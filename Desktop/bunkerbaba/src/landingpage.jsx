import React from 'react';
import SecondSection from './secondsection';
import baba from './assets/baba.png';
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-black rounded-full"></div>
          <span className="ml-2 text-xl font-semibold">Framer</span>
        </div>
        
        <div className="flex items-center gap-6">
          <button className="text-gray-600 hover:text-gray-900">Product</button>
          <button className="text-gray-600 hover:text-gray-900">Login</button>
          <button className="text-gray-600 hover:text-gray-900">Sign Up</button>
          <button className="text-gray-600 hover:text-gray-900">Pricing</button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-4 pt-16 text-center">
        {/* Character container with floating animation */}
        <div className="relative flex justify-center mb-16">        
          {/* Floating character */}
          <img 
            src={baba}
            alt="Zen character" 
            className="w-96 h-96 object-contain relative animate-float"
          />
          
        </div>

        <h1 className="text-6xl font-bold mb-4 text-[#1D1D1F]">
          Ship sites with style.
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Go from design to site with Framer,
          <br />
          the web builder for creative pros.
        </p>

        <div className="flex justify-center gap-4">
          <Button 
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-base"
          >
            Get Started
          </Button>
          <Button 
            variant="outline"
            className="px-6 py-3 bg-transparent border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-base"
          >
            Learn More
          </Button>
        </div>
      </main>

      {/* Second Section */}
      <SecondSection />
    </div>
  );
};

export default LandingPage;