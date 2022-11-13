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
            {/* Sender Message */}
            {props.user === 'sender' && (
                <div className="chat-message">
                    <div className="flex items-end">
                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                            {props.children}
                        </div>

                        <div className="w-6 h-6 rounded-full order-1 flex items-center ">
                            <Image
                                src={avatarSender}
                                alt="Female Avatar"
                                className="avatar"
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Receiver Message */}
            {props.user === 'receiver' && (
                <div className="chat-message">
                    <div className="flex items-end justify-end">
                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                            {props.children}
                        </div>

                        <div className="w-6 h-6 rounded-full order-1 flex items-center">
                            <Image
                                src={avatarReceiver}
                                alt="Male Avatar"
                                className="avatar"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chat;
