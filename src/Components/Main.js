// Main.js
import React from 'react';
import Landing from './Landing';
import About from './About';
import Timeline from './Timeline';
import ThemeCard from './ThemeCard';
import Contact from './Contact';

const Main = () => {
  return (
    <div>
      <Landing />
      <About />
      <Timeline />
      <ThemeCard />
      <Contact />
    </div>
  );
}

export default Main;
