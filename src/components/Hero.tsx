import { useState } from 'react';

const Hero = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className="relative h-screen flex items-center justify-center bg-cover bg-center bg">
      {/* Top Navigation */}
      <div className="absolute top-0 left-0 w-full bg-white bg-opacity-50 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl text-gray-800 font-bold">
          <span role="img" aria-label="Church">
            🕊️
          </span>{' '}
          Worship Centre
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4">
          <a className='uppercase' href="#home">Home</a>
          <a className='uppercase' href="#about">About</a>
          <a className='uppercase' href="#services">Services</a>
          <a className='uppercase' href="#events">Events</a>
          <a className='uppercase' href="#contact">Contact</a>
        </div>

        {/* Responsive Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Responsive Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-black bg-opacity-90 text-white flex flex-col items-center justify-center">
            <a href="#home" onClick={toggleMenu} className="py-2">Home</a>
            <a href="#about" onClick={toggleMenu} className="py-2">About</a>
            <a href="#services" onClick={toggleMenu} className="py-2">Services</a>
            <a href="#events" onClick={toggleMenu} className="py-2">Events</a>
            <a href="#contact" onClick={toggleMenu} className="py-2">Contact</a>
          </div>
        )}
      </div>
    </div>

      {/* Hero Text */}
      <div className="text-white text-center z-10">
        <h1 className="text-4xl md:text-6xl font-medium mb-4">Welcome to <br /> <span className="font-semibold uppercase pt-2 text-[24px] md:text-[48px]">our worship centre</span> </h1>
        {/* Add any additional text or content for the hero section */}
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 flex justify-center gap-4 text-white">
        <button className="bg-blue-500 px-4 py-1.5 uppercase text-[16px] font-medium">watch sermon</button>
        <button className="bg-blue-500 px-4 py-1.5 uppercase text-[16px] font-medium">need prayer?</button>
        <button className="bg-blue-500 px-4 py-1.5 uppercase text-[16px] font-medium">find an event</button>
        <button className="bg-blue-500 px-4 py-1.5 uppercase text-[16px] font-medium">read a verse</button>
      </div>
    </div>
  );
};

export default Hero;
