"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { VideoScreen } from "./landing/screens/VideoScreen";
import { DownloadScreen } from "./landing/screens/DownloadScreen";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import {
  RiFocus3Line,
  RiGamepadLine,
  RiVipDiamondLine,
  RiTeamLine,
  RiBarChartGroupedLine,
  RiRecordCircleLine,
  RiLockLine,
  RiTrophyLine,
  RiCalendarCheckLine,
  RiRocketLine,
  RiSecurePaymentLine,
  RiRefund2Line,
  RiCustomerService2Line,
  RiLinkedinFill,
  RiTwitterXFill,
  RiInstagramFill,
  RiYoutubeFill,
} from "react-icons/ri";

import { BsClock } from "react-icons/bs";
import { FiCalendar } from "react-icons/fi";
import {
  FaRegCircle,
  FaCheckCircle,
  FaStar,
  FaTimes,
  FaCheck,
} from "react-icons/fa";
import { BiBarChartSquare } from "react-icons/bi";
import ChatBot from "./ChatBot";
import LoginModal from "./LoginModal";

const LandingPage = () => {
  const [currentScreen, setCurrentScreen] = useState("video");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [registrationType, setRegistrationType] = useState<
    "company" | "individual" | null
  >(null);
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
  });

  const scrollToStayUpdated = () => {
    document
      .querySelector("#stay-updated")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (videoRef.current && currentScreen === "video") {
      const playVideo = async () => {
        try {
          await videoRef.current?.play();
        } catch (error) {
          console.log("Autoplay failed:", error);
        }
      };
      playVideo();
    }
  }, [currentScreen]);

  if (currentScreen === "video") {
    return (
      <VideoScreen setCurrentScreen={setCurrentScreen} videoRef={videoRef} />
    );
  }

  if (currentScreen === "download") {
    return <DownloadScreen setCurrentScreen={setCurrentScreen} />;
  }

  // Main screen - keeping all the existing content
  return (
    <>
      <div className="bg-black text-white overflow-x-hidden">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="#" className="flex items-center gap-2">
              <Image
                src="/images/Chiefy upscale logo.png"
                alt="Chiefy.AI"
                width={280}
                height={200}
                className="h-24 w-auto"
                priority
              />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-white/80 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#features")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-white/80 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#how-it-works")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="text-white/80 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#testimonials")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Success Stories
              </a>
              <a
                href="#pricing"
                className="text-white/80 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#pricing")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Pricing
              </a>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="text-white/70 hover:text-white transition-colors"
              >
                Login
              </button>
              <a
                href="https://chiefy-beta-app.adalo.com/online-education-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all"
                >
                Download Chatbot
                <span>↓</span>
              </a>
            </div>
          </div>
        </nav>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
          {/* Background Image */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "url('https://readdy.ai/api/search-image?query=Futuristic%20cityscape%20with%20neon-outlined%20skyscrapers%20and%20buildings%20in%20purple%2C%20pink%2C%20and%20orange%20gradients.%20Modern%20architecture%20with%20glowing%20windows%20and%20holographic%20elements.%20Perspective%20grid%20integrated%20into%20city%20streets.%20Starry%20sky%20backdrop%20transitioning%20from%20deep%20purple%20to%20pink%20and%20orange%20horizon.%20Digital%20particle%20effects%20suggesting%20AI%20analysis.%20Subtle%20construction%20drones%20and%20holographic%20scaffolding%20visible%20between%20buildings.&width=1920&height=1080&orientation=landscape')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.6,
            }}
          ></div>
          {/* Bottom Fade Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

          {/* Top Overlay (Optional for subtle dimming) */}
          <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

          {/* Content */}
          <div className="container mx-auto px-6 py-20 relative z-20">
            <div className="max-w-3xl">
              <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Get {" "}
                <span className="gradient-text">Property Development</span>{" "}
                Ready in 30 Days
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8">
                Practical, fun & new-age, beginner-friendly coaching.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="#stay-updated"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#stay-updated")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="neon-button bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-button text-center font-bold whitespace-nowrap"
                >
                  Join the Waitlist
                </a>

                
              </div>

              {/* COMMENTED OUT - Stats Section
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                  <h3 className="text-3xl font-bold gradient-text">90%</h3>
                  <p className="text-white/70 text-sm">Employment Rate</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                  <h3 className="text-3xl font-bold gradient-text">100</h3>
                  <p className="text-white/70 text-sm">Active Learners</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                  <h3 className="text-3xl font-bold gradient-text">25+</h3>
                  <p className="text-white/70 text-sm">Industry Partners</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                  <h3 className="text-3xl font-bold gradient-text">4.9/5</h3>
                  <p className="text-white/70 text-sm">User Rating</p>
                </div>
              </div>
              END COMMENTED OUT - Stats Section */}
            </div>
          </div>

          {/* Animated Scroll Indicator
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <p className="text-white/70 mb-2 text-sm">Scroll to explore</p>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
      </div> */}
        </section>

        {/* Message Section */}
        <section className="py-16 bg-gradient-to-b from-black to-black/95">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Are you feeling lost or confused or don't know where to start with your career in property & construction? 
                At <span className="gradient-text font-bold">Chiefy</span> we give you the tools you need to communicate 
                across the <span className="text-purple-400 font-bold">100+ industry trades and professionals</span> so you 
                can act with confidence from <span className="text-pink-400 font-bold">Day 1</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Who is <span className="gradient-text">Chiefy For?</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-purple-500/50 transition-all">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6 mx-auto">
                  <i className="ri-graduation-cap-line text-3xl text-purple-400"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 text-center">
                  University Students
                </h3>
                <p className="text-white/70 text-center">
                  Launch your property development career with practical skills and industry connections
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-purple-500/50 transition-all">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6 mx-auto">
                  <i className="ri-hammer-line text-3xl text-purple-400"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 text-center">
                  Trades Professionals
                </h3>
                <p className="text-white/70 text-center">
                  Expand your expertise and transition into property development management
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration Section */}
        <section className="py-16 bg-gradient-to-b from-black to-black/95">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12">
                Brought to you in <span className="gradient-text">collaboration</span> with...
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 w-full h-32 flex items-center justify-center hover:border-purple-500/50 transition-all">
                  <p className="text-white/70 font-semibold text-center">University of Sydney</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 w-full h-32 flex items-center justify-center hover:border-purple-500/50 transition-all">
                  <p className="text-white/70 font-semibold text-center">UTS</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 w-full h-32 flex items-center justify-center hover:border-purple-500/50 transition-all">
                  <p className="text-white/70 font-semibold text-center">RMIT</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 w-full h-32 flex items-center justify-center hover:border-purple-500/50 transition-all">
                  <p className="text-white/70 font-semibold text-center">University of Melbourne</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 w-full h-32 flex items-center justify-center hover:border-purple-500/50 transition-all">
                  <p className="text-white/70 font-semibold text-center">Bryant Alsop Arch</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 w-full h-32 flex items-center justify-center hover:border-purple-500/50 transition-all">
                  <p className="text-white/70 font-semibold text-center">UrbanCore</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 w-full h-32 flex items-center justify-center hover:border-purple-500/50 transition-all">
                  <p className="text-white/70 font-semibold text-center">Stadiums Tasmania</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 w-full h-32 flex items-center justify-center hover:border-purple-500/50 transition-all">
                  <p className="text-white/70 font-semibold text-center">LVL Group</p>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-black">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Game-Changing <span className="gradient-text">Features</span>
              </h2>
              <p className="text-white/70 text-lg">
                Our Platform combines cutting edge AI with interactive learning
                to create an immersive and practical property development
                experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 - AI Development Coach */}
              <div className="feature-card bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/5 rounded-full blur-xl"></div>
                <div className="w-14 h-14 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6">
                  <FaRegCircle className="text-purple-500 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  AI Development Coach
                </h3>
                <p className="text-white/70 mb-4">
                  Personalised AI mentor that adapts to your learning style and
                  provides real-time feedback on your delivery strategies.
                </p>
                <div
                  className="flex items-center gap-2 text-purple-500 cursor-pointer hover:text-purple-400 transition-colors"
                  onClick={scrollToStayUpdated}
                >
                  <span>Learn more</span>
                  <span>→</span>
                </div>
              </div>

              {/* Feature 2 - Development Simulator */}
              <div className="feature-card bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-red-400/5 rounded-full blur-xl"></div>
                <div className="w-14 h-14 bg-red-400/10 rounded-lg flex items-center justify-center mb-6">
                  <RiGamepadLine className="text-red-400 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  Development Simulator
                </h3>
                <p className="text-white/70 mb-4">
                  Practice with realistic property development scenarios that
                  simulate market conditions, zoning challenges, and financial
                  constraints.
                </p>
                <div
                  className="flex items-center gap-2 text-red-400 cursor-pointer hover:text-red-300 transition-colors"
                  onClick={scrollToStayUpdated}
                >
                  <span>Learn more</span>
                  <span>→</span>
                </div>
              </div>

              {/* Feature 3 - Achievement System */}
              <div className="feature-card bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/5 rounded-full blur-xl"></div>
                <div className="w-14 h-14 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6">
                  <RiVipDiamondLine className="text-purple-500 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  Achievement System
                </h3>
                <p className="text-white/70 mb-4">
                  Earn badges, certifications, and industry recognition as you
                  complete projects and master development skills.
                </p>
                <div
                  className="flex items-center gap-2 text-purple-500 cursor-pointer hover:text-purple-400 transition-colors"
                  onClick={scrollToStayUpdated}
                >
                  <span>Learn more</span>
                  <span>→</span>
                </div>
              </div>

              {/* Feature 4 - Industry Network */}
              <div className="feature-card bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-red-400/5 rounded-full blur-xl"></div>
                <div className="w-14 h-14 bg-red-400/10 rounded-lg flex items-center justify-center mb-6">
                  <RiTeamLine className="text-red-400 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  Industry Network
                </h3>
                <p className="text-white/70 mb-4">
                  Connect with peers, mentors and industry professionals and
                  build your own property development team.
                </p>
                <div
                  className="flex items-center gap-2 text-red-400 cursor-pointer hover:text-red-300 transition-colors"
                  onClick={scrollToStayUpdated}
                >
                  <span>Learn more</span>
                  <span>→</span>
                </div>
              </div>

              {/* Feature 5 - Data Analytics */}
              <div className="feature-card bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/5 rounded-full blur-xl"></div>
                <div className="w-14 h-14 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6">
                  <BiBarChartSquare className="text-purple-500 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  Project Personalisation
                </h3>
                <p className="text-white/70 mb-4">
                  Access real-time market data and AI-powered insights to inform
                  your staff management and training decision.
                </p>
                <div
                  className="flex items-center gap-2 text-purple-500 cursor-pointer hover:text-purple-400 transition-colors"
                  onClick={scrollToStayUpdated}
                >
                  <span>Learn more</span>
                  <span>→</span>
                </div>
              </div>

              {/* Feature 6 - Project Personalisation */}
              <div className="feature-card bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-red-400/5 rounded-full blur-xl"></div>
                <div className="w-14 h-14 bg-red-400/10 rounded-lg flex items-center justify-center mb-6">
                  <FaRegCircle className="text-red-400 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  Project Personalisation
                </h3>
                <p className="text-white/70 mb-4">
                  Customise and personalise your development projects with
                  advanced tools, profiling and templates to your projects
                  unique requirements.
                </p>
                <div
                  className="flex items-center gap-2 text-red-400 cursor-pointer hover:text-red-300 transition-colors"
                  onClick={scrollToStayUpdated}
                >
                  <span>Learn more</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* How It Works Section */}
        <section
          id="how-it-works"
          className="py-20 bg-gradient-to-b from-black to-black/95 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="w-full h-full grid-bg opacity-20"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="hero-title text-4xl font-bold mb-4">
                Your 30-Day <span className="gradient-text">Path to Development Ready</span>
              </h2>
              <p className="text-white/70 text-lg">
                Follow a structured path from industry novice to development
                expert with our interactive learning system.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 relative">
                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                  {/* Level Progress */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/70">Current Level</span>
                      <span className="text-white font-bold">
                        Development Associate
                      </span>
                    </div>

                    {/* Outer bar (background) */}
                    <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">
                      {/* Inner bar (progress) */}
                      <div
                        className="h-4 bg-white/30 rounded-full transition-all duration-500 ease-in-out"
                        style={{ width: "75%" }} // Dynamically bind this to XP %
                      ></div>
                    </div>

                    {/* XP Text */}
                    <div className="flex justify-between text-xs mt-1 text-white/50">
                      <span>0 XP</span>
                      <span>1,500 / 2,000 XP</span>
                    </div>
                  </div>
                  {/* Current Mission */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-3">
                      Current Mission: Site Acquisition
                    </h3>
                    <p className="text-white/70 mb-4">
                      Complete a site analysis and acquisition strategy for a
                      mixed-use development in an emerging neighbourhood.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 flex items-center justify-center">
                          <FaCheckCircle className="text-green-500" />
                        </div>
                        <span className="text-white/50">Market Research</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 flex items-center justify-center">
                          <FaCheckCircle className="text-green-500" />
                        </div>
                        <span className="text-white/50">Zoning Analysis</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 flex items-center justify-center">
                          <BsClock className="text-purple-500" />
                        </div>
                        <span className="text-white">
                          Financial Feasibility Study
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 flex items-center justify-center">
                          <RiLockLine className="text-white/30" />
                        </div>
                        <span className="text-white/30">
                          Acquisition Strategy
                        </span>
                      </div>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="neon-button bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-button text-center font-bold whitespace-nowrap block"
                  >
                    Continue Mission
                  </a>
                </div>
                <div className="mt-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <RiTrophyLine className="text-yellow-400 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold">Career Progression</h4>
                      <p className="text-white/70 text-sm">
                        Track your journey from novice to expert
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <RiCalendarCheckLine className="text-green-400 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold">Real-time Feedback</h4>
                      <p className="text-white/70 text-sm">
                        Get instant AI evaluation on your work
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="hero-title text-2xl font-bold mb-6">
                  Development Career Path
                </h3>
                <div className="relative">
                  {/* Vertical line through center of circles */}
                  <div className="absolute left-[8px] top-[8px] w-[2px] h-[calc(100%-16px)] bg-white/10"></div>

                  <div className="space-y-6">
                    <div className="relative pl-8">
                      <div className="absolute top-0 left-0 w-4 h-4 bg-green-500 rounded-full transform -translate-x-1/2"></div>
                      <h4 className="font-bold text-green-400">
                        Development Associate
                      </h4>
                      <p className="text-white/70">
                        Master the fundamentals of property development, market
                        analysis, and basic financial modeling.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute top-0 left-0 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2"></div>
                      <h4 className="font-bold text-primary">
                        Development Manager
                      </h4>
                      <p className="text-white/70">
                        Lead site acquisition, manage entitlements, and
                        coordinate with design and construction teams.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute top-0 left-0 w-4 h-4 bg-white/30 rounded-full transform -translate-x-1/2"></div>
                      <h4 className="font-bold text-white/70">
                        Senior Development Manager
                      </h4>
                      <p className="text-white/50">
                        Oversee multiple projects, manage complex financial
                        structures, and optimise development strategies.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute top-0 left-0 w-4 h-4 bg-white/20 rounded-full transform -translate-x-1/2"></div>
                      <h4 className="font-bold text-white/50">
                        Development Director
                      </h4>
                      <p className="text-white/40">
                        Lead development divisions, create investment
                        strategies, and manage stakeholder relationships.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <RiRocketLine className="text-primary text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold">Fast-Track Learning</h4>
                      <p className="text-white/70 text-sm">
                        Our AI system adapts to your pace and learning style
                      </p>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm">
                    Complete your development career path in as little as 12
                    months with our accelerated program. Industry average is 3-5
                    years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chiefy Way Section */}
        <section className="py-20 bg-gradient-to-b from-black/95 to-black relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="w-full h-full grid-bg opacity-20"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="hero-title text-4xl font-bold mb-12">
                Join the Waitlist and experience the{' '}
                <span className="gradient-text">Chiefy Way</span> with...
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {/* Feature 1 */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4 mx-auto">
                    <i className="ri-team-line text-2xl text-purple-400"></i>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Exposure to Industry Experts and Networks
                  </h3>
                </div>

                {/* Feature 2 */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4 mx-auto">
                    <i className="ri-book-open-line text-2xl text-purple-400"></i>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Relatable Lessons & Real-life Scenarios
                  </h3>
                </div>

                {/* Feature 3 */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4 mx-auto">
                    <i className="ri-building-line text-2xl text-purple-400"></i>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Site Visit(s)
                  </h3>
                </div>

                {/* Feature 4 */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4 mx-auto">
                    <i className="ri-mic-line text-2xl text-purple-400"></i>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Guest Speakers
                  </h3>
                </div>

                {/* Feature 5 */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4 mx-auto">
                    <i className="ri-tools-line text-2xl text-purple-400"></i>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Innovative Training Tools
                  </h3>
                </div>

                {/* Feature 6 */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4 mx-auto">
                    <i className="ri-shopping-bag-line text-2xl text-purple-400"></i>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Limited Edition Chiefy.ai Merchandise
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-black">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="hero-title text-4xl font-bold mb-4">
                Success <span className="gradient-text">Stories</span>
              </h2>
              <p className="text-white/70 text-lg">
                Hear from professionals who transformed their careers with our
                platform.
              </p>
            </div>

            {/* Changed to grid with 2 columns and items centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Testimonial 1 */}
              <div className="testimonial-card bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-bold text-primary">
                    JM
                  </div>
                  <div>
                    <h4 className="font-bold">James Morrison</h4>
                    <p className="text-white/70 text-sm">
                      Architect → Development Manager
                    </p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-white/80 mb-4">
                  "As an architect, I always wanted to understand the
                  development side of projects. Chiefy gave me practical
                  experience through simulations that felt like real-world
                  scenarios. Within 8 months, I landed a development manager
                  role at a major firm."
                </p>
                <div className="flex items-center gap-2 text-white/50 text-sm">
                  <i className="ri-building-2-line"></i>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="testimonial-card bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center text-2xl font-bold text-secondary">
                    SR
                  </div>
                  <div>
                    <h4 className="font-bold">Sophia Rodriguez</h4>
                    <p className="text-white/70 text-sm">
                      Civil Engineer → Senior Development Associate
                    </p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-white/80 mb-4">
                  "The interactive approach made learning complex financial
                  concepts actually enjoyable. The AI mentor identified my
                  knowledge gaps and customised my learning path. I'm now
                  leading mixed-use projects and earning 40% more than in my
                  previous role."
                </p>
                <div className="flex items-center gap-2 text-white/50 text-sm">
                  <i className="ri-building-line"></i>
                </div>
              </div>
            </div>

            {/* COMMENTED OUT - Stats Section
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 text-center">
                <h3 className="text-4xl font-bold gradient-text">90%</h3>
                <p className="text-white/70">Career Advancement Rate</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 text-center">
                <h3 className="text-4xl font-bold gradient-text">9 mo</h3>
                <p className="text-white/70">Avg. Time to Promotion</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 text-center">
                <h3 className="text-4xl font-bold gradient-text">25+</h3>
                <p className="text-white/70">Success Stories</p>
              </div>
            </div>
            END COMMENTED OUT - Stats Section */}
          </div>
        </section>
        {/* Pricing Section */}
        <section
          id="pricing"
          className="py-20 bg-gradient-to-b from-black to-black/95 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="w-full h-full grid-bg opacity-20"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="hero-title text-4xl font-bold mb-4">
                Early Bird Special - <span className="gradient-text"> Limited Time Offer</span>
              </h2>
              <p className="text-white/70 text-lg">
                Join us in Melbourne and kickstart your property development career with this exclusive offer!
              </p>
            </div>
            {/* COMMENTED OUT - OLD PRICING TIERS
            <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto">
              Explorer ($29/month), Developer ($79/month), Enterprise (Custom) plans
            END COMMENTED OUT OLD PRICING */}

            {/* NEW SINGLE PRICING TIER */}
            <div className="flex justify-center max-w-4xl mx-auto">
              <div className="developer-plan backdrop-blur-sm rounded-2xl p-10 border-2 border-purple-500/50 w-full relative overflow-hidden shadow-2xl">
                <div className="absolute top-6 right-6 bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg animate-pulse">
                  75% OFF - LIMITED SPOTS!
                </div>
                
                <div className="mb-8 mt-4">
                  <h3 className="text-3xl font-bold mb-3 gradient-text">Property Development Bootcamp</h3>
                  <p className="text-white/80 text-lg mb-2">
                    🏢 Melbourne CBD (City Venue)
                  </p>
                  <p className="text-white/70">
                    Your complete pathway from beginner to development-ready professional
                  </p>
                </div>

                <div className="mb-10 bg-white/5 p-6 rounded-xl border border-white/20">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-white/50 line-through text-2xl">RRP: $1,999</span>
                  </div>
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-5xl font-bold gradient-text">$499</span>
                    <span className="text-white/70 text-xl">one-time payment</span>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-4 py-2 rounded-lg inline-block">
                    <span className="text-white font-semibold">💰 Save $1,500 (75% OFF)</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-bold mb-4 text-white">What You Get - Incredible Value:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 flex items-center justify-center mt-0.5">
                        <FaCheck className="text-green-400 text-lg" />
                      </div>
                      <span className="text-white/90"><strong className="text-white">Full platform access</strong> - All Explorer & Developer features included</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 flex items-center justify-center mt-0.5">
                        <FaCheck className="text-green-400 text-lg" />
                      </div>
                      <span className="text-white/90"><strong className="text-white">AI Development Coach</strong> - Personalized mentoring & feedback</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 flex items-center justify-center mt-0.5">
                        <FaCheck className="text-green-400 text-lg" />
                      </div>
                      <span className="text-white/90"><strong className="text-white">Advanced development simulations</strong> - Real market scenarios</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 flex items-center justify-center mt-0.5">
                        <FaCheck className="text-green-400 text-lg" />
                      </div>
                      <span className="text-white/90"><strong className="text-white">Real-time market data access</strong> - Live property insights</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 flex items-center justify-center mt-0.5">
                        <FaCheck className="text-green-400 text-lg" />
                      </div>
                      <span className="text-white/90"><strong className="text-white">Financial modeling tools</strong> - Professional-grade analytics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 flex items-center justify-center mt-0.5">
                        <FaCheck className="text-green-400 text-lg" />
                      </div>
                      <span className="text-white/90"><strong className="text-white">6 x 1-on-1 mentoring sessions</strong> - Direct expert guidance (Worth $900 alone!)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 flex items-center justify-center mt-0.5">
                        <FaCheck className="text-green-400 text-lg" />
                      </div>
                      <span className="text-white/90"><strong className="text-white">Industry certification preparation</strong> - Get qualified faster</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 flex items-center justify-center mt-0.5">
                        <FaCheck className="text-green-400 text-lg" />
                      </div>
                      <span className="text-white/90"><strong className="text-white">Community forum & networking</strong> - Connect with peers & experts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 flex items-center justify-center mt-0.5">
                        <FaCheck className="text-green-400 text-lg" />
                      </div>
                      <span className="text-white/90"><strong className="text-white">Monthly industry webinars</strong> - Stay ahead of trends</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 flex items-center justify-center mt-0.5">
                        <FaCheck className="text-green-400 text-lg" />
                      </div>
                      <span className="text-white/90"><strong className="text-white">Custom learning paths</strong> - Tailored to your goals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 flex items-center justify-center mt-0.5">
                        <FaCheck className="text-green-400 text-lg" />
                      </div>
                      <span className="text-white/90"><strong className="text-white">Progress tracking dashboard</strong> - Monitor your growth</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 flex items-center justify-center mt-0.5">
                        <FaCheck className="text-green-400 text-lg" />
                      </div>
                      <span className="text-white/90"><strong className="text-white">Lifetime access to course materials</strong> - Learn at your own pace forever</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-xl mb-8 border border-purple-500/30">
                  <h4 className="text-lg font-bold mb-3 text-white">📍 Event Details:</h4>
                  <div className="space-y-2 text-white/80">
                    <p><strong className="text-white">Location:</strong> Melbourne, City (Premium Venue)</p>
                    <p><strong className="text-white">Commencing:</strong> Early 2026</p>
                    <p><strong className="text-white">Format:</strong> In-person session + Online platform access (hybrid)</p>
                    <p className="text-yellow-400 font-semibold mt-3">⚡ Only 15 spots available at this price!</p>
                  </div>
                </div>

                <a
                  href="#stay-updated"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#stay-updated")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="neon-button bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-5 rounded-button text-center font-bold text-xl whitespace-nowrap block shadow-lg transform hover:scale-105 transition-all"
                >
                  🎯 Secure Your Spot Now - Save $1,500!
                </a>
                
                <p className="text-center text-white/60 text-sm mt-4">
                  ✓ No credit card required to reserve • ✓ 30-day money-back guarantee
                </p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <p className="text-white/70 mb-4">
                Exclusive early bird offer - Limited spots available!
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <RiSecurePaymentLine className="text-green-400" />
                  </div>
                  <span className="text-white/70 text-sm">Secure Payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <RiRefund2Line className="text-green-400" />
                  </div>
                  <span className="text-white/70 text-sm">
                    30-Day Money Back
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <RiCustomerService2Line className="text-green-400" />
                  </div>
                  <span className="text-white/70 text-sm">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-black relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url('https://readdy.ai/api/search-image?query=Futuristic%20cityscape%20at%20night%20with%20glowing%20neon%20buildings%20and%20skyscrapers.%20Modern%20architecture%20with%20holographic%20projections%20and%20digital%20interfaces.%20Dark%20background%20with%20purple%20and%20blue%20gradient%20lighting.%20Abstract%20data%20visualization%20elements%20and%20grid%20patterns%20overlaid%20on%20buildings.%20The%20image%20has%20a%20subtle%20vignette%20effect%20with%20the%20center%20being%20brighter%20to%20allow%20for%20text%20overlay.&width=1920&height=1080&seq=cta1&orientation=landscape')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.3,
            }}
          ></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="hero-title text-4xl font-bold mb-4">

                What are you waiting for? {" "} <span className="gradient-text"> Build your Future Today</span>
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Join the next wave of property innovators with AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="#"
                  className="neon-button bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-button text-center font-bold whitespace-nowrap"
                >
                  Join Today
                </a>
                <a
                  href="#"
                  className="border border-white/30 hover:border-white/50 bg-black/50 backdrop-blur-sm px-8 py-4 rounded-button text-center font-bold whitespace-nowrap flex items-center justify-center gap-2"
                >
                  <FiCalendar className="text-xl" /> Watch Demo
                </a>
              </div>
              {/*<div className="flex flex-wrap justify-center gap-8">
                <span>
                  {" "}
                  Join our many active users, companies and institutions today!
                </span>
              </div>*/}
            </div>
          </div>
        </section>
        {/* Newsletter Section */}
        {/*
        <section
          id="stay-updated"
          className="py-20 bg-gradient-to-b from-black to-purple-900/20"
        >
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-4 font-kernel">
                Stay Updated
              </h2>
              <p className="text-white/70 text-lg mb-12 community-text">
                Join our community and stay informed about the latest updates
                and features
              </p>

              {!registrationType ? (
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setRegistrationType("company")}
                    className="action-button bg-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-purple-700 transition-all flex items-center justify-center gap-2"
                  >
                    Register as Company
                  </button>
                  <button
                    onClick={() => setRegistrationType("individual")}
                    className="action-button border border-white/30 hover:border-white/50 bg-black/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                  >
                    Register as Individual
                  </button>
                </div>
              ) : (
                <div className="max-w-md mx-auto">
                  <button
                    onClick={() => setRegistrationType(null)}
                    className="mb-6 text-white/70 hover:text-white flex items-center gap-2 transition-all"
                  >
                    <span>←</span>
                    Back to Options
                  </button>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const dataToSend = {
                        type: registrationType,
                        name: formData.name,
                        companyName: formData.companyName,
                        email: formData.email,
                        phone: formData.phone,
                        timestamp: new Date().toLocaleString(),
                      };

                      fetch("https://sheetdb.io/api/v1/8fhp4ycdc8j1g", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ data: dataToSend }),
                      })
                        .then((res) => res.json())
                        .then(() => {
                          alert("Registration successful!");
                          setFormData({
                            name: "",
                            companyName: "",
                            email: "",
                            phone: "",
                          });
                          setRegistrationType(null);
                        })
                        .catch((err) => {
                          console.error("Submission error:", err);
                          alert("Something went wrong. Try again.");
                        });
                    }}
                    className="space-y-4"
                  >
                    {registrationType === "company" ? (
                      <div>
                        <label className="block text-white/70 mb-2 font-kernel">
                          Company Name
                        </label>
                        <input
                          type="text"
                          value={formData.companyName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              companyName: e.target.value,
                            })
                          }
                          className="w-full bg-white/5 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 border border-purple-500/20"
                          required
                        />
                      </div>
                    ) : (
                      <div>
                        <label className="block text-white/70 mb-2 font-kernel">
                          Name
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full bg-white/5 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 border border-purple-500/20"
                          required
                        />
                      </div>
                    )}

                    <div>
                      <label className="block text-white/70 mb-2 font-kernel">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-white/5 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 border border-purple-500/20"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-white/70 mb-2 font-kernel">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full bg-white/5 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 border border-purple-500/20"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-lg font-kernel transition-all mt-6"
                    >
                      Register Now
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </section>
        */}
        {/* Footer */}
        <footer className="py-16 bg-black border-t border-white/10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
              <div className="lg:col-span-2">
                <Link href="#" className="flex items-center gap-2 mb-4">
                  <Image
                    src="https://static.readdy.ai/image/604526b099075072f9fc122e55328024/b41ffca8773352ad86add0ffd6c25b78.png"
                    alt="Chiefy Logo"
                    width={60}
                    height={60}
                  />
                  <Image
                    src="/images/Chiefy upscale logo.png"
                    alt="Chiefy Logo"
                    width={280}
                    height={200}
                    className="h-24 w-auto"
                  />
                </Link>
                <p className="text-white/70 mb-6">
                  AI-powered property development mentoring platform that makes
                  learning fun and practical for industry entrants.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  >
                    <RiLinkedinFill />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  >
                    <RiTwitterXFill />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  >
                    <RiInstagramFill />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  >
                    <RiYoutubeFill />
                  </Link>
                </div>
              </div>
              {/*<div>
                <h4 className="font-bold text-lg mb-4">Platform</h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="#"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      Learning Paths
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      Simulations
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      Certifications
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      Community
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4">Company</h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="#"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      Partners
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4">Legal</h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="#"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      Cookie Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      GDPR Compliance
                    </Link>
                  </li>
                </ul>
              </div>
            </div> */}
            </div>
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/50 text-sm">
                ©️ 2025 BuilderVerse. All rights reserved.
              </p>
              <div className="flex gap-6">
                <div className="flex items-center gap-2 text-white/50">
                  <i className="ri-visa-line ri-lg"></i>
                  <i className="ri-mastercard-line ri-lg"></i>
                  <i className="ri-paypal-line ri-lg"></i>
                  <i className="ri-apple-fill ri-lg"></i>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <ChatBot />
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
};

export default LandingPage;
