"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
  return (
    <section className="flex justify-center items-center min-h-screen px-4 lg:px-16" id="heroSection">
    <div className="grid grid-cols-1 sm:grid-cols-12 items-center max-w-6xl w-full">
    {/* Text Section */}
    <div className="col-span-7 text-center sm:text-left">
      <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-black">
          Hello, I'm Daniyal <br />
        </span>

        {/* Type Animation */}
        <Typewriter
              words={["Web Developer", "Front End Developer", "Graphic Designer", "Video Editor", "Problem Solver" , "Programmer"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
      </h1>
      <p className="text-gray-600 text-base sm:text-lg mb-6 lg:text-xl">
      Transforming ideas into engaging websites, eye-catching designs, and captivating videos—I'm a passionate front-end developer, skilled graphic designer, and creative problem solver. Let's work together to bring your vision to life with innovation and precision!
      </p>

      <div>
        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-gray-700 via-gray-900 to-black hover:bg-slate-200 text-white">
          <Link href={"#contact"}>Hire Me</Link>
        </button>
        <Link href="/daniyalCV.pdf" download legacyBehavior>
               <a className="inline-block mt-3 px-1 py-1 w-full sm:w-fit rounded-full bg-[#000000] text-white hover:bg-[#0056b3]">
                 <span className="block bg-[#f0f0f7] text-black rounded-full px-5 py-2">Download CV</span>
               </a>
        </Link>
      </div>
    </div>

    {/* Image Section */}
    <div className="col-span-5 place-self-center mt-4 lg:mt-0">
      <div className="lg:w-[400px] w-[250px] h-[250px] rounded-full relative overflow-hidden">
        <Image
          src="/image.png"
          alt="Profile Picture"
          className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover rounded-full"
          width={250}
          height={500}
        />
      </div>
    </div>
  </div>
</section>

  );
};

export default HeroSection;
