import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Page() {
  return (
    <div>
      <header className="flex items-center w-full mt-3 px-5">
        {/* Logo Image */}
        <Image 
          src="./logo.png" 
          width={40} 
          height={40} 
          alt="logo image" 
        />

        {/* Nav bar */}
        <nav className="flex justify-center w-full text-sm">
          <Link href="#home" className="hover:underline mx-8">home</Link>
          <Link href="#about" className="hover:underline mx-8">about</Link>
          <Link href="#contact" className="hover:underline mx-8">contact</Link>
          {/* More dropdown */}
          <div className="relative group mx-8">
            <div className="flex flex-row items-center cursor-pointer">
              <Link href="#more">more</Link>
              <Image 
                src="./downarrow.png" 
                width={8} 
                height={8} 
                alt="downarrow" 
                className="ml-1" 
              />
            </div>
            {/* Dropdown menu */}
            <div className="absolute left-0  w-32 bg-black text-white text-sm rounded-md  hidden group-hover:block border border-white ">
              <Link 
                href="#projects" 
                className="block px-4 py-1 hover:bg-yellow-400 hover:text-black">
                projects
              </Link>
              <Link 
                href="#skills" 
                className="block px-4 py-1 hover:bg-yellow-400 hover:text-black">
                skills
              </Link>
              <Link 
                href="#resume" 
                className="block px-4 py-1 hover:bg-yellow-400 hover:text-black">
                resume
              </Link>
            </div>
          </div>
        </nav>
      </header>

        {/*body content of the web*/}
        <div>
          

        </div>
    </div>
  );
}

export default Page;
