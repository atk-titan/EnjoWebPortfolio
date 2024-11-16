import React from 'react';
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <div className='fixed w-[content-fit] right-5 h-28 px-10 py-28 flex items-center justify-end z-20'>
        <button className='bg-black border-4 text-[15px] px-11 py-4 hover:bg-gray-500 rounded-full font-[anzo2] '>Hire Me</button>
        <i className="ri-more-2-fill text-4xl ml-2 text-gray-400"></i>
    </div>
  );
}

export default Header;