import type { NextPage } from 'next';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import Chat from '../components/chat';
import avatarMale from '../images/avatar/male.png';
import { ChatMessage } from './../models/chatMessage';
import { ChatRoom } from './../models/chatRoom';
import SocketClientFactory from './../utils/socketClientFactory';

const messages: ChatMessage[] = [];
let chatRoom: ChatRoom;

const ChatPage: NextPage = (props): JSX.Element => {
    // TODO: Once username is properly implemented, remove use of email. It's only being used for debugging purposes
    const userName: string = useSession().data?.user?.name || useSession().data?.user?.email?.split('@')[0] || 'current user';

    const socket = SocketClientFactory.getInstance();
    const [isConnected, setIsConnected] = useState(socket.connected);

    useEffect(() => {
        socket.on('connect', () => {
            setIsConnected(true);
            // tslint:disable-next-line:no-console
            console.log(`Socket connected`);
            // TODO: Get basic socket information. Store into session storage.
            sessionStorage.setItem('currentChatSession', JSON.stringify(chatRoom));
            // TODO: Determine if connection is a reconnect, if so, load room from session
        });

        socket.on('disconnect', () => {
            setIsConnected(false);
            // tslint:disable-next-line:no-console
            console.log(`Socket disconnected`);
            sessionStorage.removeItem('currentChatSession');
        })

        // Expecting to receive a `ChatMessage`
        socket.on("message", (message: ChatMessage) => {
            messages.push(message);
            // tslint:disable-next-line:no-console
            console.log(`Socket ${message.source} said ${message.content}`);
        });

        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('message');
        }
        // Passing in an empty array here only runs this once and not every page reload... For some reason.
    }, []);

    const { data: session } = useSession();


    // Used later to scroll to the bottom of the chat window every time a user sends a message
    const chatEnd: any = useRef();
    const [chatText, setChatText] = useState('');

    // If user is not authenticated
    if (!session) return <p>Access Denied.</p>;

    // Configure
    const onConnect = () => {
        sessionStorage.setItem('room', socket.id);
    }

    // Check if message is empty or just blank spaces
    const messageValid = (txt: any) => txt && txt.replace(/\s/g, '').length;

    // Submit the message if it is valid
    const submitMessage = (e: any) => {
        e.preventDefault();
        if (messageValid(chatText)) {
            // Message is valid, build chat message to send
            const chatMessage: ChatMessage = {
                source: userName,
                content: chatText,
                timestamp: new Date()
            }

            messages.push(chatMessage);
            socket.emit('message', chatText);
            setChatText('');
            chatEnd.current.scrollIntoView({ behavior: 'smooth' });
            // TODO: Once message is added, update session storage
            sessionStorage.setItem('currentChatSession', JSON.stringify(chatRoom));
        }
        // tslint:disable-next-line:no-console
        console.log(messages);
    };

    return (
        <div>
            <div className="h-screen w-screen bg-gradient-to-r from-complementary to-dominant flex justify-center items-center">
                <div className="p:2 w-screen h-screen md:h-3/4 md:w-4/5 md:rounded-2xl lg:bg-white lg:rounded-2xl chat-lg justify-between flex flex-col bg-white">
                    <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200 pr-3">
                        <div className="relative flex items-center space-x-4">
                            <div className="relative pl-6 flex items-center">
                                <div className="w-16 h-16 flex items-center">
                                    <Image
                                        src={avatarMale}
                                        alt="Male Avatar"
                                        className="avatar"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col leading-tight">
                                <div className="text-2xl mt-1 flex items-center">
                                    <span className="text-gray-700 mr-3">
                                        {userName}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            {/* Sign Out Button */}
                            <button
                                onClick={() => {
                                    signOut({
                                        callbackUrl: `${window.location.origin}`,
                                    });
                                }}
                                className="px-4 py-1 mr-3 text-white rounded bg-dominant hover:bg-accent"
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>

                    {/* Messages Window Start */}
                    <div
                        id="messages"
                        className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
                    >
                        {/* If a message exists, add the latest message to the chat window */}
                        {messages &&
                            messages.map((chatMsg: ChatMessage, index: number) => (
                                <Chat
                                    user={
                                        chatMsg.source == userName ? 'sender' : 'receiver'
                                    }
                                    key={index}
                                    message={chatMsg.content}
                                />
                            ))}

                        {/* Scroll the chat to the bottom of the chat window when a new message is sent */}
                        <span ref={chatEnd}>&nbsp;</span>
                    </div>
                    {/* Messages Window End */}

                    <div className="border-t-2 border-gray-200 px-4 pt-3 mb-2 sm:mb-0 pb-3">
                        <form className="relative flex">
                            <input
                                id="chatInput"
                                type="text"
                                placeholder="Write your message!"
                                className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-6 bg-gray-200 rounded-md py-2"
                                onChange={(e) => setChatText(e.target.value)}
                                value={chatText}
                            />
                            <div className="absolute right-0 items-center inset-y-0 flex bg-dominant hover:bg-black rounded-r-md">
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center px-4 py-2 text-white bg-dominant hover:bg-black focus:outline-none rounded-r-md"
                                    onClick={submitMessage}
                                    disabled={!chatText}
                                >
                                    <span className="font-bold ">Send</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-6 w-6 ml-2 transform rotate-90"
                                    >
                                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatPage;
