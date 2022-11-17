import type { NextPage } from 'next';
import Image from 'next/image';
import avatarMale from '../images/avatar/male.png';
import Chat from '../components/chat';
import ChatBox from '../components/chatbox';

const ChatPage: NextPage = (props): JSX.Element => {
    return (
        <div>
            <div className="h-screen w-screen bg-gradient-to-r from-complementary to-dominant flex justify-center items-center">
                <div className="p:2 w-screen h-screen md:h-3/4 md:w-4/5 md:rounded-2xl lg:bg-white lg:rounded-2xl chat-lg justify-between flex flex-col bg-white">
                    <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200 pr-3">
                        <div className="relative flex items-center space-x-4">
                            <div className="relative pl-6 flex items-center">
                                <div className="w-full h-full sm:w-16 sm:h-16 flex items-center">
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
                                        StinkyGiraffe#7468
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            {/* Menu Button */}
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Messages Window Start */}
                    <div
                        id="messages"
                        className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
                    >
                        <Chat user="sender">
                            <ChatBox>Hey, can I talk to you?</ChatBox>
                        </Chat>

                        <Chat user="receiver">
                            <ChatBox>
                                Yeah sure, what's going on? I'm here to listen.
                            </ChatBox>
                        </Chat>

                        <Chat user="sender">
                            <ChatBox>
                                I haven't been feeling well lately.
                            </ChatBox>
                            <ChatBox>
                                I have anxiety and depression and I can not keep
                                up with my current semester schedule
                            </ChatBox>
                            <ChatBox>
                                I have to maintain an A for my scholarship but
                                that seems impossible right now.
                            </ChatBox>
                            <ChatBox>
                                And thinking about that is causing me a lot of
                                stress
                            </ChatBox>
                        </Chat>

                        <Chat user="receiver">
                            <ChatBox>
                                Oh no! I'm so sorry to hear that. Have you tried
                                contacting your instructors?
                            </ChatBox>
                        </Chat>

                        <Chat user="sender">
                            <ChatBox>
                                No I have not, I don't think they are going to
                                do anything
                            </ChatBox>
                        </Chat>

                        <Chat user="receiver">
                            <ChatBox>
                                I can understand why you might feel that way. I
                                used to be the same during my freshman year.
                            </ChatBox>
                            <ChatBox>
                                But I started letting them know when I was in
                                difficult circumstances and they were very
                                understanding and helpful, you should definitely
                                send them an email and explain your situation
                            </ChatBox>
                            <ChatBox>
                                There's nothing to lose by doing that!
                            </ChatBox>
                        </Chat>

                        <Chat user="sender">
                            <ChatBox>Really?</ChatBox>
                            <ChatBox>
                                I had the assumption that professors at UK
                                wouldn't be understanding
                            </ChatBox>
                        </Chat>

                        <Chat user="receiver">
                            <ChatBox>
                                Yes! Many friends I know also had that
                                assumption until they contacted their professors
                            </ChatBox>
                        </Chat>

                        <Chat user="sender">
                            <ChatBox>Got youuu?</ChatBox>
                            <ChatBox>Thank you so much!</ChatBox>
                            <ChatBox>
                                I am going to try doing that, you have a good
                                day.
                            </ChatBox>
                        </Chat>

                        <Chat user="receiver">
                            <ChatBox>You too!</ChatBox>
                        </Chat>
                    </div>
                    {/* Messages Window End */}

                    <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0 pb-3">
                        <div className="relative flex">
                            <input
                                type="text"
                                placeholder="Write your message!"
                                className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-6 bg-gray-200 rounded-md py-3"
                            />
                            <div className="absolute right-0 items-center inset-y-0 flex">
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center rounded-lg px-4 py-3 text-white hover:bg-black bg-gradient-to-tr from-complementary to-dominant focus:outline-none"
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
