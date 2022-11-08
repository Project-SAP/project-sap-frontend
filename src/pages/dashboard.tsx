import { NextPage } from 'next';
import { useSession } from 'next-auth/react';

const Dashboard: NextPage = () => {
    const { data: session } = useSession();
    return (
        <div className="bg-gradient-to-br from-complementary to-dominant flex justify-center items-center h-screen ">
            {session ? (
                <h1 className="text-white text-7xl">
                    Welcome to the Account Dashboard, {session.user?.email}!
                </h1>
            ) : (
                <h1 className="text-white text-7xl">
                    You don't have access to this page. Please
                    <a href="/login">login</a>!
                </h1>
            )}
        </div>
    );
};

export default Dashboard;
