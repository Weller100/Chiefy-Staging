import { RefObject } from 'react';

interface VideoScreenProps {
  setCurrentScreen: (screen: string) => void;
  videoRef: RefObject<HTMLVideoElement>;
}

export const VideoScreen = ({ setCurrentScreen, videoRef }: VideoScreenProps) => (
  <div className="min-h-screen bg-gradient-to-b from-pink-400 via-purple-500 to-purple-800 py-4 sm:py-6 md:py-8 lg:py-12">
    {/* Video Container */}
    <div className="w-full mx-auto mb-4 sm:mb-6 md:mb-8">
      <div className="relative w-full aspect-video bg-black overflow-hidden shadow-xl">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          preload="auto"
          // Removed loop prop so video plays only once
        >
          <source src="/images/intro-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Skip button spanning full width at bottom of video */}
        <div className="absolute bottom-0 left-0 right-0">
          <button 
            onClick={() => setCurrentScreen("landing")}
            className="w-full bg-gray-500 hover:bg-gray-600 text-white py-2 sm:py-2.5 md:py-3 font-medium text-xs sm:text-sm md:text-base transition-colors duration-200"
          >
            Skip →
          </button>
        </div>
      </div>
    </div>
    {/* About Chiefy Section */}
    <div className="w-full mx-auto mb-6 sm:mb-8 md:mb-12">
      {/*<h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4 px-4">
        About Chiefy
      </h2>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white leading-relaxed mb-4 sm:mb-6 text-justify px-4">
        Breaking down barriers, building careers - Chiefy.AI gives you the fluency to succeed in property development. 
        We've created an AI-powered coaching platform that breaks down 
        technical jargon, complex processes, and industry barriers into accessible knowledge for newcomers and 
        professionals alike.
      </p>*/}
      <div className="text-center px-4">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold gradient-text leading-relaxed">
          "Unlock the property development world from your pocket — anytime, anywhere with Chiefy."
        </p>
      </div>
    </div>
    {/* Action Buttons */}
    <div className="w-full mx-auto">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
        {/* Download Button */}
        <a
          href="https://chiefy-beta-app.adalo.com/online-education-app"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold text-sm sm:text-base md:text-lg lg:text-xl shadow-lg transition-colors duration-200 w-full sm:flex-1 sm:min-w-[150px] md:min-w-[200px] sm:max-w-[250px] md:max-w-[300px] text-center inline-block no-underline"
        >
          Download Now
        </a>
        {/* Learn More Button */}
        <button
          onClick={() => setCurrentScreen("landing")}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold text-sm sm:text-base md:text-lg lg:text-xl shadow-lg transition-colors duration-200 w-full sm:flex-1 sm:min-w-[150px] md:min-w-[200px] sm:max-w-[250px] md:max-w-[300px]"
        >
          Learn More
        </button>
      </div>
    </div>
  </div>
);