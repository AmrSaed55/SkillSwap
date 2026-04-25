'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faCommentDots,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
export default function Navbar() {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const pathname = usePathname();
  const handleShowProfileMenuClick = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <nav className="bg-primary-color">
      <div className="container m-auto flex items-center justify-between h-20 w-full px-6 lg:p-0">
        <h1 className="text-2xl lg:text-3xl capitalize gradient-color font-extrabold cursor-pointer">
          SkillSwap
        </h1>
        <div className="mid-list hidden md:block ">
          <ul className="flex items-center justify-between gap-5 lg:gap-10 font-medium">
            <li
              className={`nav-item cursor-pointer ${pathname === '/' ? 'active' : ''}`}
            >
              <Link href={'/'}>Home</Link>
            </li>
            <li
              className={`nav-item cursor-pointer ${pathname === '/skills' ? 'active' : ''}`}
            >
              <Link href={'/skills'}>Skills</Link>
            </li>
            <li
              className={`nav-item cursor-pointer ${pathname === '/matches' ? 'active' : ''}`}
            >
              <Link href={'/matches'}>Matches</Link>
            </li>
            <li
              className={`nav-item cursor-pointer ${pathname === '/profile' ? 'active' : ''}`}
            >
              <Link href={'/profile'}>Profile</Link>
            </li>
          </ul>
        </div>

        <div className="right-icons">
          <div className="md:hidden">
            <FontAwesomeIcon
              icon={faBars}
              className="text-indigo-950 text-xl active:text-indigo-500"
              onClick={handleShowProfileMenuClick}
            />
            {isProfileMenuOpen ? (
              <ul className=' ${isProfileMenuOpen ? "block" : "hidden"}  gap-5 lg:gap-10  absolute top-20 right-4 bg-white border border-gray-300 rounded-md shadow-lg w-85 p-1 z-10'>
                <Link href={'/'}>
                  <li
                    className={`capitalize cursor-pointer  hover:bg-indigo-200 p-2 rounded-md ${pathname === '/' ? 'font-extrabold bg-indigo-100' : ''}`}
                  >
                    home
                  </li>
                </Link>
                <Link href={'/skills'}>
                  <li
                    className={`capitalize cursor-pointer hover:bg-indigo-200 p-2 rounded-md ${pathname === '/skills' ? 'font-extrabold bg-indigo-100' : ''}`}
                  >
                    skills
                  </li>
                </Link>
                <Link href={'/matches'}>
                  <li
                    className={`capitalize cursor-pointer hover:bg-indigo-200 p-2 rounded-md ${pathname === '/matches' ? 'font-extrabold bg-indigo-100' : ''}`}
                  >
                    matches
                  </li>
                </Link>
                <li className="border-t border-gray-300 mt-2" />
                <li className="flex items-center gap-3 cursor-pointer hover:bg-indigo-200 px-1.5 my-2 rounded-md">
                  <Image
                    src={'/Profile.png'}
                    alt="user pic"
                    width={30}
                    height={30}
                    className="rounded-full cursor-pointer border-2 border-solid border-indigo-300 hover:border-indigo-400 transition-colors w-fit my-auto"
                  />
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col text-sm mt-2">
                      <h5 className="capitalize font-bold">amr saed</h5>
                      <p className="text-gray-500 font-light">
                        amr55@gmail.com
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-5">
                      <FontAwesomeIcon
                        icon={faBell}
                        aria-label="Notifications"
                      />
                      <FontAwesomeIcon icon={faCommentDots} />
                    </div>
                  </div>
                </li>
                <Link href={'/profile'}>
                  <li
                    className={`capitalize cursor-pointer hover:bg-indigo-200 p-2 rounded-md ${pathname === '/profile' ? 'font-extrabold bg-indigo-100' : ''}`}
                  >
                    your profile
                  </li>
                </Link>
                <Link href={'/settings'}>
                  <li
                    className={`capitalize cursor-pointer hover:bg-indigo-200 p-2 rounded-md ${pathname === '/settings' ? 'font-extrabold bg-indigo-100' : ''}`}
                  >
                    settings
                  </li>
                </Link>
                <Link href={'/sign-out'}>
                  <li
                    className={`capitalize cursor-pointer hover:bg-indigo-200 p-2 rounded-md ${pathname === '/sign-out' ? 'font-extrabold bg-indigo-100' : ''}`}
                  >
                    sign out
                  </li>
                </Link>
              </ul>
            ) : null}
          </div>
          <ul className="hidden md:flex items-center justify-between md:gap-6 relative">
            <li className="nav-item cursor-pointer p-2 hover:bg-indigo-200 rounded-full transition-colors">
              <FontAwesomeIcon
                icon={faBell}
                aria-label="Notifications"
                className="text-xl"
              />
            </li>
            <li className="nav-item cursor-pointer p-2 hover:bg-indigo-200 rounded-full transition-colors">
              <FontAwesomeIcon icon={faCommentDots} className="text-xl" />
            </li>
            <li className="rounded-full cursor-pointer border-2 border-solid border-indigo-300 hover:border-indigo-400 transition-colors">
              <Image
                src={'/Profile.png'}
                alt="user pic"
                width={35}
                height={40}
                className="rounded-full"
                onClick={handleShowProfileMenuClick}
              />
            </li>
            {isProfileMenuOpen ? (
              <ul className=' ${isProfileMenuOpen ? "block" : "hidden"} capitalize gap-5 lg:gap-10 text-lg absolute top-15 right-0  bg-white border-2 border-indigo-200 rounded-md shadow-lg w-40 z-10'>
                <li className="cursor-pointer mb-1.5 hover:bg-indigo-200 p-3 ">
                  your profile
                </li>
                <li className="cursor-pointer mb-1.5 hover:bg-indigo-200 p-3 ">
                  settings
                </li>
                <li className="cursor-pointer hover:bg-indigo-200 p-3 ">
                  sign out
                </li>
              </ul>
            ) : null}
          </ul>
        </div>
      </div>
    </nav>
  );
}
