import React, { useRef, useState , useEf, useEffect } from 'react';
import Header from '../components/Header';
import TiltText from '../components/TiltText';
import PageBottom from '../components/PageBottom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Page1 = () => {
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);

    const tiltRef = useRef(null);

    const onMoving = (dets) =>{
        setX(dets.clientX);
        setY(dets.clientY);

        console.log(x,y,dets);
    }

    useGSAP(()=>{
      
      const boundRect = tiltRef.current?.getBoundingClientRect();
      let centerX=boundRect.width/2+boundRect.x;
      let centerY=boundRect.height/2+boundRect.y;

      let xAng = (x-centerX)/20;
      let yAng = (y-centerY)/20;

      gsap.to(tiltRef.current,{
        rotateX: -yAng,
        rotateY: xAng,
        duration: 2.5,
        delay: 0.5,
        ease:'power2.out'
      })
    },[x,y])

  return (
    <div onMouseMove={(dets)=>{onMoving(dets)} } className='h-screen relative bg-white px-5 py-5'>
        <div id='ParentOfTilt' className='h-full w-full relative px-24 py-16 shadow-2xl shadow-black bg-cover bg-[url(./assets/ANZO.webp)] rounded-3xl'>
            {/* <div className='h-full w-full absolute left-0 top-0 rounded-3xl bg-neutral-200 z-10 opacity-10'></div> */}
            <img className='h-24' src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png" alt="" />
            <TiltText abc={tiltRef}/>
            <PageBottom/>
        </div>
    </div>
  );
}

export default Page1;