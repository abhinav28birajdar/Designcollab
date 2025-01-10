'use client'
import React from 'react'
import { TextRevealCardPreview } from './ui/TextRevealCardPreview';
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import { NavbarWithMegaMenu } from './Navbar';
import { TypewriterEffectSmoothDemo } from './typreffect';
export const Hero = () => {
  return (
    <div>
        <div className="relative z-50">
        <NavbarWithMegaMenu />
</div>
           <ShootingStars />
               <StarsBackground />
               {/* <TextRevealCardPreview />  */}
               <TypewriterEffectSmoothDemo />
              
    </div>
  )
}
