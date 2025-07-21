'use client'
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import Carousel from './Carousel';

const TestimonialsSlider = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(1);

  const testimonials = [
    {
      id: 1,
      author: 'Nazmeen Khan',
      position: 'CEO, Sana Search International',
      image : "/sanaInternational.jpeg",
      content:
      "Partnering with Rare Professions was an absolute game-changer for us. Their expertise in manpower solutions revolutionized the way we operate.",
    },
    {
      id: 2,
      author: 'Ayush Pandey',
      position: 'Mahaul Events',
      image : "/IMG_3066.png",
      content: "Their team's commitment to understanding our needs and delivering exceptional solutions surpassed our expectations. Thanks to Rare Professions, we've achieved unparalleled success in our workforce management.",
    },
  
  ];

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 1 ? testimonials.length : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length ? 1 : prev + 1));
  };

  return (
    <div className="my-8 md:my-16 mx-auto flex flex-wrap">
      <div id="1" className="relative h-[40vh] md:h-[70vh] w-full md:w-1/2 py-2 md:py-24 bg-[#021f4e] flex flex-col item-center justify-center">
        <div className="absolute top-0 left-0 z-10 grid-indigo w-16 h-16 md:w-40 md:h-40 md:ml-20 md:mt-24"></div>
        <div className="text-3xl md:text-5xl py-2 px-6 md:py-6 md:px-1 md:w-[70%] md:mx-auto text-indigo-100 font-semibold leading-tight tracking-tight mb-0 z-20">
          <span className="md:block">What Our Customers are saying!</span>
        </div>
        
      </div>

      <div id='2' className="bg-gray-100 h-[70vh] md:w-1/2 overflow-hidden">
        <div className="flex flex-col h-full relative">
          <div className="absolute top-0 left-0 mt-3 ml-4 md:mt-5 md:ml-12">
            {/* Add SVG code here */}
          </div>
          <div className="h-full flex items-center justify-center relative z-10 overflow-clip">
           <Carousel data={testimonials}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
