import type { NextPage } from 'next';
import Header from '../components/header'
import Link from 'next/link'

const Login: NextPage = () => {
    return (
        <>
            <Header />
            <section className="h-screen flex items-center bg-gradient-to-r from-complementary to-dominant">
                <div className="flex flex-col items-center justify-center lg:w-1/2 md:w-1/2 px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 b md:space-y-6 sm:p-8">
                            <h1 className="text-xl text-center font-medium leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to CatSafe
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input type="email" name="email" id="email" pattern="[A-Za-z0-9._%+-]+@uky.edu" title="Please enter a valid UKY email address." className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="linkblue@uky.edu" required />
                                </div>
                                <div>
                                    <div className="flex justify-between items-center">
                                        <label htmlFor="password" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <Link href="/reset">
                                            <a className="text-sm text-right text-dominant hover:underline dark:text-primary-500">Forgot password?</a>
                                        </Link>
                                    </div>
                                    <input type="password" name="password" id="password" placeholder="••••••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div className="text-center">

                                </div>
                                <button type="submit" className="w-full text-white bg-dominant hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                                    New to CatSafe?&nbsp; 
                                    <Link href="/signup">
                                        <a className=" text-dominant hover:underline dark:text-primary-500">Create an account.</a>
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
