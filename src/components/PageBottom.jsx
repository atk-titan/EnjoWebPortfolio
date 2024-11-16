import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';

const PageBottom = () => {
  useGSAP(()=>{
    gsap.to('.rotator img',{
      rotation:360,
      duration:5,
      repeat:-1,
      ease:"linear"
    })
  },[])

  return (
    <div className='w-full h-[22vh] left-0 bottom-6 px-24 flex items-end justify-between absolute'>
        <div className="flex-col items-end">
            <h2 className='font-[anzo2] text-[26px]'>BRAND DESIGN | WEBSITE DESIGN</h2>
            <h3 className='font-[anzo3] text-[26px] mt-2 text-gray-400'>BESPOKE FREELANCE</h3>
        </div>
        <div className='rotator'>
            <img className='h-[85px] w-[85px] mb-6' src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png" alt="" />
            <img className='h-[85px] w-[85px]' src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png" alt="" />       
        </div>
    </div>
  );
}

export default PageBottom;