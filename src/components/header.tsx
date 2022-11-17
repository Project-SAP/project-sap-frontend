import type { NextPage } from 'next';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { signOut, useSession } from 'next-auth/react';
import { GrMenu, GrClose } from 'react-icons/gr';
import { useState } from 'react';

const Header: NextPage = () => {
    const { data: session } = useSession();
    const [menuIsOpen, setMenuIsOpen] = useState(true);

    // Hamburger Button Click Handler
    const handleMenuClick = () => {
        // Hides Mobile Menu
        document.getElementById('mobile-navbar')?.classList.toggle('hidden');
        setMenuIsOpen(!menuIsOpen);
    };

    return (
        <nav className="sticky px-6 py-3 mx-auto bg-white w-full">
            {/* <!-- Flex Container --> */}
            <div className="flex items-center justify-between">
                {/* <!-- Logo --> */}
                <div className="space-x-6">
                    <Link href="/">
                        <a className="text-2xl hover:text-dominant">CatSafe</a>
                    </Link>
                </div>

                {/* <!-- Menu Items --> */}
                <div className="items-center hidden space-x-4 text-xl lg:flex">
                    <Link href="/">
                        <a className="hover:text-dominant">How It Works</a>
                    </Link>
                    <Link href="/">
                        <a className="hover:text-dominant">Resources</a>
                    </Link>
                    <Link href="/">
                        <a className="hover:text-dominant">About Us</a>
                    </Link>
                    <Link href="/">
                        <a className="hover:text-dominant">Contact</a>
                    </Link>
                </div>

                <div className="flex">
                    {/* <!-- Button --> */}
                    {!session ? (
                        <div className="items-center text-lg flex">
                            <button
                                onClick={() => {
                                    signIn();
                                }}
                                className="py-1 mr-3 hover:text-dominant hover:text-bold hover:underline"
                            >
                                Login
                            </button>

                            <Link href="/signup">
                                <a className="px-4 py-1 mr-3 text-white rounded bg-accent hover:bg-dominant">
                                    Sign Up
                                </a>
                            </Link>
                        </div>
                    ) : (
                        <div className="items-center text-lg flex">
                            <button
                                onClick={() => {
                                    signOut();
                                }}
                                className="px-4 py-1 mr-3 text-white rounded bg-accent hover:bg-dominant"
                            >
                                Sign Out
                            </button>
                        </div>
                    )}

                    {/* <!-- Hamburger Button --> */}
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="lg:hidden inline-flex items-center py-2 text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                        onClick={handleMenuClick}
                    >
                        <span className="sr-only">Open main menu</span>
                        {menuIsOpen ? (
                            <GrMenu size={25} />
                        ) : (
                            <GrClose size={25} />
                        )}
                    </button>
                </div>
            </div>

            {/* <!-- Mobile Menu --> */}
            <div
                className="justify-between items-center w-full lg:hidden hidden"
                id="mobile-navbar"
            >
                <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <Link href="/">
                            <a className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:text-dominant p-0 dark:hover:bg-transparent">
                                How It Works
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:text-dominant p-0 dark:hover:bg-transparent">
                                Resources
                            </a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/">
                            <a className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:text-dominant p-0 dark:hover:bg-transparent">
                                About Us
                            </a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/">
                            <a className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:text-dominant p-0 dark:hover:bg-transparent">
                                Contact
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
