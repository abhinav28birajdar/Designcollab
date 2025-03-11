"use client";
import React from 'react';
import { ShootingStars } from "../components/ui/shooting-stars";
import { StarsBackground } from "../components/ui/stars-background";
import { NavbarWithMegaMenu } from '../Navbar/Navbar';
import { TypewriterEffectSmoothDemo } from '../components/ui/typreffect';

export default function Hero() {
  return (
    <div>
      <div className="relative z-50">
        <NavbarWithMegaMenu />
      </div>
      <ShootingStars />
      <StarsBackground />
      <TypewriterEffectSmoothDemo />
    </div>
  );
}