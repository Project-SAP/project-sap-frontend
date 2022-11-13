// @ts-nocheck

// NextJs requires more explicit typing for props when defining a `NextPage`
const ChatBox = (props) => {
    return (
        <div>
            <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                {props.children}
            </span>
        </div>
    );
};

export default ChatBox;
