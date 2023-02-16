// @ts-nocheck
// import type { NextPage } from 'next';
// import { PropsWithChildren } from 'react';
import Image from 'next/image';
import avatarReceiver from '../images/avatar/male.png';
import avatarSender from '../images/avatar/female.png';

// NextJs requires more explicit typing for props when defining a `NextPage`
const Chat = (props) => {
    return (
        <div>
            <div className="chat-message">
                <div
                    className={`flex items-end ${props.user === 'info' ? 'justify-center' : props.user === 'sender' ? '' : 'justify-end'
                        }`}
                >
                    <div
                        className={`flex flex-col space-y-2 text-sm md:text-sm lg:text-base 2xl:text-xl max-w-xs mx-2 ${props.user === 'sender'
                                ? 'order-2 items-start'
                                : 'order-1 items-end'
                            }`}
                    >
                        <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                            {props.message}
                        </span>
                    </div>

                    <div className="w-6 h-6 rounded-full order-1 flex items-center">
                        {props.user === 'info' ? (<></>) : props.user === 'sender' ? (
                            <Image
                                src={avatarSender}
                                alt="Female Avatar"
                                className="avatar"
                            />
                        ) : (
                            <Image
                                src={avatarReceiver}
                                alt="Male Avatar"
                                className="avatar"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
