"use client";
import React from 'react';
import Hero from './Hero/page';
import { ParallaxScrollDemo } from './components/ui/images';
import Image from '@/app/Image/image';

export default function Home() {
  return (
    <main>
      <div> 
        <Hero />
        <ParallaxScrollDemo />
        <Image />
      </div>
    </main>
  );
}