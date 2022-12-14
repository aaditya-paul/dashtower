import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function Header(): JSX.Element {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<any>(null);
  const mobileNav = useRef<any>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: any): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: any) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <a>
                <div className="flex items-center">
                  <Image
                    src="/assets/logo.svg"
                    alt="Cruip"
                    className="w-12 h-12 text-purple-600 fill-current"
                    height={45}
                    width={45}
                  />
                  Dashtower
                </div>
              </a>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* <ul className='flex grow justify-end flex-wrap items-center'>
              <li className='text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out'>
                <Link href='/features'>Features</Link>
              </li>
              <li className='text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out'>
                <Link href='/pricing'>Pricing</Link>
              </li>
              <li className='text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out'>
                <Link href='/blog'>Blog</Link>
              </li>
              <li className='text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out'>
                <Link href='/about'>About us</Link>
              </li>
         
              <Dropdown title='Support'>
             
                <li className='font-medium text-sm text-gray-400 hover:text-purple-600 flex py-2 px-4 leading-tight'>
                  <Link href='/contact'>Contact us</Link>
                </li>
                <li className='font-medium text-sm text-gray-400 hover:text-purple-600 flex py-2 px-4 leading-tight'>
                  <Link href='/help'>Help center</Link>
                </li>
                <li className='font-medium text-sm text-gray-400 hover:text-purple-600 flex py-2 px-4 leading-tight'>
                  <Link href='/404'>404</Link>
                </li>
              </Dropdown>
            </ul> */}

            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                <Link href="/signin">Contact Us</Link>
              </li>
              <li className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                <Link href="/signup">Request Free Audit</Link>
              </li>
            </ul>
          </nav>
          {/* Mobile menu */}
          <div className="md:hidden">
            {/* Hamburger button */}
            <button
              ref={trigger}
              className={`hamburger ${mobileNavOpen && "active"}`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/* Mobile navigation */}
            <nav
              id="mobile-nav"
              ref={mobileNav}
              className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
              style={
                mobileNavOpen
                  ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 }
                  : { maxHeight: 0, opacity: 0.8 }
              }
            >
              <ul className="bg-gray-800 px-4 py-2">
                {/* <li className='flex text-gray-300 hover:text-gray-200 py-2'>
                  <Link href='/features'>Features</Link>
                </li>
                <li className='flex text-gray-300 hover:text-gray-200 py-2'>
                  <Link href='/pricing'>Pricing</Link>
                </li>
                <li className='flex text-gray-300 hover:text-gray-200 py-2'>
                  <Link href='/blog'>Blog</Link>
                </li>
                <li className='flex text-gray-300 hover:text-gray-200 py-2'>
                  <Link href='/about'>About us</Link>
                </li>
                <li className='py-2 my-2 border-t border-b border-gray-700'>
                  <span className='flex text-gray-300 py-2'>Support</span>
                  <ul className='pl-4'>
                    <li className='text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2'>
                      <Link href='/contact'>Contact us</Link>
                    </li>
                    <li className='text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2'>
                      <Link href='/help'>Help center</Link>
                    </li>
                    <li className='text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2'>
                      <Link href='/404'>404</Link>
                    </li>
                  </ul>
                </li> */}
                <li className="flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center">
                  <Link href="/signin">Contact Us</Link>
                </li>
                <li className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">
                  <Link href="/signup">Request Free Audit</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
