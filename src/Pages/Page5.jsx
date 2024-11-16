import React from 'react';

const Page5 = () => {
  return (
    <div className='h-screen w-full p-5 relative bg-white'>
        <div className='h-full w-full rounded-[45px] relative bg-black overflow-hidden'>
            <video autoPlay muted loop className='w-full h-full object-cover z-10' src=".\src\assets\moon.mp4"></video>
            <h1 className='absolute top-[20vh] left-[4vw] text-[40vw] font-[anzo4] text-white p-2 z-30'>
              ABOUT
            </h1>
        </div>
    </div>
  );
};

export default Page5;
// top-[40vh]