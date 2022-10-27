import type { NextPage } from 'next';
import Link from 'next/link'


const Header: NextPage = () => {
    return (
        <nav className="sticky p-6 mx-auto bg-white w-full">
            {/* <!-- Flex Container --> */}
            <div className="flex items-center justify-between">
              {/* <!-- Logo --> */}
              <div className="space-x-6">
                <Link href="/">
                  <a className="text-2xl hover:text-dominant">CatSafe</a>
                </Link>
              </div>

              {/* <!-- Menu Items --> */}
              <div className="items-center hidden space-x-4 text-xl md:flex">
                <Link href="#"><a className="hover:text-dominant">How It Works</a></Link>
                <Link href="#"><a className="hover:text-dominant">Resources</a></Link>
                <Link href="#"><a className="hover:text-dominant">About Us</a></Link>
                <Link href="#"><a className="hover:text-dominant">Contact</a></Link>
              </div>

              {/* <!-- Button --> */}
              <div className="items-center hidden text-xl md:flex">
                <Link href="/login"><a className="py-1 mr-4 hover:text-dominant hover:text-bold">Login</a></Link>
                <Link href="/signup"><a className="hidden px-6 py-2 text-white rounded bg-accent hover:bg-dominant md:block">Sign Up</a></Link>
              </div>

              {/* <!-- Hamburger Icon --> */}
              <button className="block space-y-1.5 md:hidden focus:outline-none">
                <span className="block h-1 bg-black w-7"></span>
                <span className="block h-1 bg-black w-7"></span>
                <span className="block h-1 bg-black w-7"></span>
              </button>
            </div>

            {/* <!-- Mobile Menu --> */}
            <div className="md:hidden">
              <div id="menu" className="absolute flex hidden flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white left-6 right-6 drop-shadow-md sm:w-auto sm:self-center">
                <Link href="#"><a className="hover:text-dominant">How It Works</a></Link>
                <Link href="#"><a className="hover:text-dominant">Resources</a></Link>
                <Link href="#"><a className="hover:text-dominant">About Us</a></Link>
                <Link href="#"><a className="hover:text-dominant">Contact</a></Link>
              </div>
            </div>
          </nav>
    );
}

export default Header;