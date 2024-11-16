import React from 'react';

const Page3 = () => {
  return (
    <div className='h-screen relative bg-white flex items-center justify-center'>
        <img className='absolute h-[34vw] z-30' src="src\assets\transPNG.webp" alt="" />
        <video autoPlay={true} muted loop controls className='h-[30vw] w-[45vw] object-cover z-20' src=".\src\assets\vieo.mp4"></video>
        <div className='absolute h-0.5 w-[65%] top-[42%] right-[12%] z-10 bg-black opacity-60'></div>
        <div className='absolute h-0.5 w-[85%] top-[60%] right-[2%] z-10 bg-black opacity-60'></div>
        <div className='absolute h-0.5 w-[100%] top-[78%] z-10 bg-black opacity-60'></div>
    </div>
  );
}

export default Page3;