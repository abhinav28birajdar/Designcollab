"use client";
import React from 'react';
import Hero from './Hero/page';
import { ParallaxScrollDemo } from '../components/ui/images';
import  Contact  from '@/app/Contact/page';
export default function Home() {
  return (
    <main>
      <div> 
        <Hero />
        <ParallaxScrollDemo />     
       <Contact />
      </div>
    </main>
  );
}