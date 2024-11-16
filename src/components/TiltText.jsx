import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const TiltText = (Props) => {
    // const tittu = useRef(null)
    // const tilt = () => {
    //     console.log(tittu.getBoundingClientRect());
    //     // tittu.current.style.transform=`rotate({})`
    // }

  return (
    <div ref={Props.abc} id='tilt'>
        <h1  className='mt-48 text-[4vw] leading-[4vw] pl-2'>I AM <span className='text-black'>DARK MODE™</span></h1> 
        <h1 className='text-[8vw] leading-[7vw]'>DESIGNER</h1>
        <h1 className='text-[4.2vw] leading-[4vw] pl-2'>TO HIRE</h1>
    </div>
  );
}

export default TiltText;