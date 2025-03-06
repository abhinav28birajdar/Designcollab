import React from 'react';
import { Hero } from './Hero/Hero';
import { ParallaxScrollDemo } from './components/ui/images';

export default function Home() {
  return (
    <main>
      <div> 
      <Hero />
     <ParallaxScrollDemo />
    </div>
    </main>
  );
}