import React from 'react';

const HeroBanner = () => {
  return (
    <section className="relative h-[77vh] flex flex-col justify-end text-white">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="gradient-overlay"></div>
        <video className="min-w-full min-h-full absolute object-cover"
          src="/hero-video.mp4"
          type="video/mp4" autoPlay muted loop></video>
      </div>
      <div className="video-content space-y-4 z-10 text-left bottom-0 left-0 p-8">
        <h1 className="font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-10xl 2xl:text-11xl">
          INNOVATION
        </h1>
        <p className="font-light text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl">
          UNDERSTANDING CHANGE, SHAPING THE FUTURE
        </p>
      </div>
    </section>
  );
};

export default HeroBanner;
