//@ts-nocheck
import type { NextPage } from 'next';
import Image from 'next/image';
import avatarMale from '../images/avatar/male.png';
import Chat from '../components/chat';
import { useState, useRef } from 'react';
import { useSession, signOut } from 'next-auth/react';

// Temporarily store messages of a user
const messages = [];

const ChatPage: NextPage = (props): JSX.Element => {
    const { data: session } = useSession();
    const dummy = useRef();
    const [chatText, setChatText] = useState('');

    if (!session) return <p>Access Denied.</p>;

    const userTyping = (event: any) => {
        // keycode for when the user presses the Enter button
        event.keyCode === 13
            ? submitMessage()
            : setChatText(event.target.value);
    };

    // Check if message is empty or just blank spaces
    const messageValid = (txt: any) => txt && txt.replace(/\s/g, '').length;

    // Submit the message if it is valid
    const submitMessage = () => {
        if (messageValid(chatText)) {
            document.getElementById('chatInput').value = '';
            messages.push(chatText);
            setChatText('');
            dummy.current.scrollIntoView({ behavior: 'smooth' });
        }
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
                                        {session.user?.email?.split('@')[0]}
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

                            {/* Menu Button */}
                            {/* <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                    />
                                </svg>
                            </button> */}
                        </div>
                    </div>

                    {/* Messages Window Start */}
                    <div
                        id="messages"
                        className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
                    >
                        {/* If a message exists, add the latest message to the chat window */}
                        {messages &&
                            messages.map((msg, index) => (
                                <Chat
                                    user={
                                        index % 2 == 0 ? 'sender' : 'receiver'
                                    }
                                    key={index}
                                    message={msg}
                                />
                            ))}

                        {/* Scroll the chat to the bottom of the chat window when a new message is sent */}
                        <span ref={dummy}>&nbsp;</span>
                    </div>
                    {/* Messages Window End */}

                    <div className="border-t-2 border-gray-200 px-4 pt-3 mb-2 sm:mb-0 pb-3">
                        <div className="relative flex">
                            <input
                                id="chatInput"
                                type="text"
                                placeholder="Write your message!"
                                className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-6 bg-gray-200 rounded-md py-2"
                                onKeyUp={(e) => userTyping(e)}
                                onChange={userTyping}
                            />
                            <div className="absolute right-0 items-center inset-y-0 flex bg-dominant hover:bg-black rounded-r-md">
                                <button
                                    type="button"
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatPage;
