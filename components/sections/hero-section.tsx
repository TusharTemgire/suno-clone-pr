"use client";

import { useState, useEffect, useRef, memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Shuffle, SlidersHorizontal, Music } from "lucide-react";

const SunoLogo = () => (
  <div className="font-sans font-medium text-white text-[28px] tracking-[-0.05em]">
    <svg width="606" height="149" viewBox="0 0 606 149" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="[&amp;_path]:transition-[d] [&amp;_path]:duration-[3s] block h-full w-full object-contain" aria-label="Suno Logo"><g fillRule="evenodd" clipRule="evenodd"><path d="M61.4512,148.002C49.5956,148.002 38.3407,146.172 27.6689,142.512C16.9971,138.851 7.77415,133.183 0,125.489C3.5337,118.583 7.0674,111.677 10.6011,104.771C18.2693,111.256 26.5028,116.125 35.3017,119.359C44.1007,122.611 54.1364,124.21 65.3912,124.21C74.3669,124.21 81.2046,122.593 85.8691,119.359C90.5336,116.107 92.8835,111.434 92.8835,105.304C92.8835,99.7952 90.1625,95.7794 84.7029,93.3273C79.261,90.8574 67.7235,88.121 50.1256,85.1181C33.2345,82.4705 21.3083,78.1882 14.3645,72.2356C7.42078,66.283 3.94008,57.3808 3.94008,45.4756C3.94008,32.6287 8.74592,21.9673 18.3223,13.5093C23.7829,8.70541 30.6743,5.25998 39,3.18286C45.3022,1.61055 52.4262,0.822266 60.3734,0.822266C65.8752,0.822266 71.2479,1.26797 76.5,2.16152C81.8908,3.07865 87.1545,4.46759 92.3004,6.33063C102.424,9.99103 110.428,15.0552 116.294,21.5586C113.17866666666666,28.162733333333332 110.06333333333333,34.766866666666665 106.948,41.371C99.7565,35.9159 92.2297,31.758 84.3849,28.8972C76.5401,26.0541 68.3596,24.6149 59.861,24.6149C51.9455,24.6149 45.7262,26.0364 41.1677,28.8616C36.6092,31.6869 34.33,36.0581 34.33,41.9751C34.33,47.519 37.1216,51.4993 42.6872,53.9158C45.8963,55.3092 51.1672,56.8267 58.5,58.4614C63.8845,59.6617 70.3808,60.9254 77.9889,62.2495C87.1465,63.8316 94.8149,65.9022 101,68.4643C106.068,70.5636 110.14,72.9929 113.22,75.7538C120.058,81.8664 123.468,90.8752 123.468,102.763C123.468,117.049 117.973,128.154 107.018,136.079C102.168,139.582 96.4964,142.311 90,144.266C81.7998,146.733 72.2856,148.002 61.4512,148.002"></path><path d="M165.456,135.546C170.458,140.232 178.495,143.675 188.131,145.879C196.702,147.839 206.538,148.819 216.628,148.819C216.63866666666667,148.819 216.64933333333332,148.819 216.66,148.819C226.752,148.819 236.587,147.839 245.157,145.878C254.788,143.674 262.823,140.231 267.832,135.546C273.041,130.665 276.814,124.309 279.152,116.482C281.056,110.108 282.008,95.5 282.008,94.4341C282.008,93.3682 278.5,71 278.5,58.5C278.5,46 282.008,29.5 282.008,27.485C282.008,25.47 282.008,2.47 282.008,2.47C271.77233333333334,2.47 261.53666666666663,2.47 251.301,2.47C251.301,2.47 251.301,11.985 251.301,23.5C251.301,35.015 270,49 269,58.5C268,68 252.5,86 251.301,91.9019C250.102,97.8038 249.253,111.66 245.157,116.482C241.044,121.304 228.336,123.707 216.644,123.707C204.952,123.707 192.227,121.304 188.131,116.482C184.035,111.66 181.986,103.5 181.986,91.9019C181.986,80.3038 181.986,61 181.986,52.5C181.986,44 181.986,36 181.986,27.485C181.986,18.97 181.986,2.47 181.986,2.47C171.75066666666666,2.47 161.51533333333333,2.47 151.28,2.47C151.28,2.47 151.28,18.97 151.28,27.485C151.28,36 151.28,43.5 151.28,52.5C151.28,61.5 151.28,85.8682 151.28,94.4341C151.28,103 152.231,110.111 154.133,116.482C156.471,124.311 160.245,130.663 165.456,135.546"></path><path d="M314,145.882C322.96866666666665,145.882 331.93733333333336,145.882 340.906,145.882C340.906,135.38566666666668 340.906,124.88933333333334 340.906,114.393C340.906,100.96666666666667 340.906,87.54033333333334 340.906,74.114C340.906,60.68766666666667 340.906,47.26133333333334 340.906,33.835C340.906,33.835 345.5,46 354,55.5C362.5,65 376.267,71.0558 381.5,80.5C386.648,89.7901 385.5,110.5 391,124C396.5,137.5 402.991,145.882 402.991,145.882C402.9963333333333,145.882 403.00166666666667,145.882 403.007,145.882C417.188,145.882 431.369,145.882 445.55,145.882C445.55,135.38566666666668 445.55,124.88933333333334 445.55,114.393C445.55,100.96666666666667 445.55,87.54033333333334 445.55,74.114C445.55,60.68766666666667 445.55,47.26133333333334 445.55,33.835C445.55,23.223333333333336 445.55,12.611666666666668 445.55,2C436.63933333333335,2 427.72866666666664,2 418.818,2C418.818,12.611666666666666 418.818,23.223333333333333 418.818,33.835C418.818,47.26133333333333 418.818,60.68766666666667 418.818,74.114C418.818,87.54033333333334 418.818,100.96666666666667 418.818,114.393C418.818,114.393 413.5,105 407,99C400.5,93 397,92.5 389,78.5C381,64.5 380.252,44.0312 372.5,30C364.748,15.9688 356.725,2 356.725,2C342.48333333333335,2 328.2416666666667,2 314,2C314,12.611666666666666 314,23.223333333333333 314,33.835C314,47.26133333333333 314,60.68766666666667 314,74.114C314,87.54033333333334 314,100.96666666666667 314,114.393C314,124.88933333333334 314,135.38566666666668 314,145.882"></path><path d="M490.573,135.564C495.897,140.161 503.844,143.563 513.043,145.769C521.513,147.8 531.044,148.816 540.568,148.816C540.5733333333333,148.816 540.5786666666667,148.816 540.584,148.816C550.236,148.816 559.887,147.774 568.436,145.692C577.5,143.484 585.325,140.108 590.595,135.564C596.007,130.89 599.992,125.181 602.543,118.438C604.812,112.442 605.948,105.5 605.948,97.9954C605.948,90.4908 605.948,88 605.948,74.7642C605.948,61.5284 605.948,59.066 605.948,51.533C605.948,44 604.813,36.8424 602.543,30.7481C600.005,23.9323 596.048,18.1597 590.675,13.43C585.41,8.79445 577.549,5.36036 568.436,3.12549C559.937,1.04122 550.349,0 540.761,0C531.173,0 521.57,1.04122 513.043,3.12549C503.9,5.36036 495.994,8.79445 490.67,13.43C485.226,18.1539 481.5,24.4962 480,30.7481C478.5,37 478,42 480.5,50.5C483,59 492.5,65.2642 492.5,78.5C492.5,91.7358 489,94 486,101.5C483,109 480.5,115.5 482,121.5C483.5,127.5 485.097,130.842 490.573,135.564M568.436,118.229C563.92,122.652 551.405,124.855 540.568,124.855C529.73,124.855 517.216,122.652 512.7,118.229C508.184,113.807 505.927,106 505.927,95.4519C505.927,84.9038 505.927,88 505.927,74.7642C505.927,61.5284 505.927,65.153 505.927,54.0765C505.927,43 508.184,35.2842 512.7,30.7481C517.216,26.212 529.73,23.944 540.568,23.944C551.405,23.944 563.92,26.1958 568.436,30.7481C572.951,35.3004 575.209,43.5 575.209,54.0765C575.209,64.653 575.209,61.5284 575.209,74.7642C575.209,88 575.209,84.9038 575.209,95.4519C575.209,106 572.951,113.807 568.436,118.229"></path></g></svg>
  </div>
);

const PlayIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M22.0833 12.1698C23.4166 12.9427 23.4166 14.8573 22.0833 15.6302L3.75 27.023C2.41667 27.7959 0.75 26.8386 0.75 25.2928L0.750001 2.50718C0.750001 0.961384 2.41667 0.00407158 3.75 0.776971L22.0833 12.1698Z" fill="currentColor" />
  </svg>
);

const SongCard = memo(({
  title,
  artist,
  imageUrl,
  avatarUrl,
  className,
  rotate = 0,
}: {
  title: string;
  artist: string;
  imageUrl: string;
  avatarUrl: string;
  className?: string;
  rotate?: number;
}) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget as HTMLDivElement;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 6;
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.transform = `rotate(${rotate}deg) perspective(600px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget as HTMLDivElement;
    card.style.transform = `rotate(${rotate}deg)`;
  };

  return (
    <div
      className={`cursor-pointer blur-[1px] hover:blur-none ml-2 mr-2 shadow-2xl ${className} group`}
      style={{ transform: `rotate(${rotate}deg)`, willChange: 'transform' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-full w-full origin-top overflow-hidden rounded-[12px] transition-all duration-500 hover:scale-[115%] hover:shadow-2xl md:h-[311px]">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
          priority
          quality={85}
        />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 to-transparent transition-opacity duration-300 group-hover:from-black/70" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-black/60">
          <PlayIcon className="text-white/70 ml-1 transition-colors duration-300 group-hover:text-white" />
        </div>
      </div>
      <div className="absolute right-3.5 bottom-3.5 left-3.5 z-10 text-shadow transition-all duration-300 group-hover:bottom-4">
        <div className="mb-1 text-sm font-medium text-white transition-all duration-300 group-hover:text-[15px]" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
          {title}
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-5 w-5 transition-transform duration-300 group-hover:scale-110">
            <Image src={avatarUrl} alt={artist} width={20} height={20} className="rounded-full" />
          </div>
          <div className="text-[11px] font-medium text-white/80 transition-colors duration-300 group-hover:text-white/90" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
            {artist}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
});

SongCard.displayName = 'SongCard';

const logos = [
  { name: "Billboard", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d379c487-54bc-4fa0-8716-872371df7d6e-suno-com/assets/svgs/Billboard_logo-1.svg" },
  { name: "Complex", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d379c487-54bc-4fa0-8716-872371df7d6e-suno-com/assets/svgs/COMPLEX_Magazine_logo-2.svg" },
  { name: "Forbes", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d379c487-54bc-4fa0-8716-872371df7d6e-suno-com/assets/svgs/Forbes_logo-3.svg" },
  { name: "Rolling Stone", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d379c487-54bc-4fa0-8716-872371df7d6e-suno-com/assets/svgs/Rolling_Stone_logo-4.svg" },
  { name: "Variety", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d379c487-54bc-4fa0-8716-872371df7d6e-suno-com/assets/svgs/Variety_logo-5.svg" },
  { name: "Wired", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d379c487-54bc-4fa0-8716-872371df7d6e-suno-com/assets/svgs/Wired_logo-6.svg" },
];

const LogoMarquee = () => {
  const allLogos = [...logos, ...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden bg-transparent flex items-center group h-20">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-80 z-10"
        style={{
          background: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        }}
      />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-80 z-10"
        style={{
          background: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        }}
      />

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
          .animate-marquee {
            animation: marquee 60s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      <div className="flex animate-marquee whitespace-nowrap">
        {allLogos.map((logo, index) => (
          <div key={index} className="inline-block px-3 md:px-6">
            <div className="flex h-12 w-24 items-center justify-center grayscale transition-all duration-500 hover:grayscale-0 hover:scale-110 md:h-16 md:w-32">
              <Image
                src={logo.src}
                alt={logo.name}
                width={128}
                height={40}
                className="h-auto max-h-8 w-auto max-w-full object-contain md:max-h-10 transition-all duration-500"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const initialText = "Make a country song about Jess being late";
  const lastUpdateRef = useRef<number>(0);

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(loadTimer);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    let currentIndex = 0;
    const typingSpeed = 50;
    let animationFrameId: number;

    const typeCharacter = (timestamp: number) => {
      if (!lastUpdateRef.current) {
        lastUpdateRef.current = timestamp;
      }

      const elapsed = timestamp - lastUpdateRef.current;

      if (elapsed >= typingSpeed) {
        if (currentIndex < initialText.length) {
          currentIndex++;
          setTypedText(initialText.slice(0, currentIndex));
          lastUpdateRef.current = timestamp;
          animationFrameId = requestAnimationFrame(typeCharacter);
        }
      } else {
        animationFrameId = requestAnimationFrame(typeCharacter);
      }
    };

    const startTypingTimer = setTimeout(() => {
      animationFrameId = requestAnimationFrame(typeCharacter);
    }, 300);

    return () => {
      clearTimeout(startTypingTimer);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isLoaded, initialText]);

  return (
    <div className="hero-section-optimized relative min-h-screen w-full bg-background-primary overflow-hidden flex flex-col">
      <style>
        {`
          @keyframes blink-caret {
            from, to { opacity: 1; }
            50% { opacity: 0; }
          }
          .animate-blink {
            animation: blink-caret 1s step-end infinite;
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out forwards;
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
            will-change: transform;
          }
          .animate-scaleIn {
            animation: scaleIn 0.6s ease-out forwards;
          }
          /* Performance optimizations */
          .hero-section-optimized * {
            backface-visibility: hidden;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          .transition-optimized {
            will-change: opacity, transform;
          }
          .typing-text {
            contain: layout style paint;
          }
        `}
      </style>
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d379c487-54bc-4fa0-8716-872371df7d6e-suno-com/assets/images/Aura-1-Hero-Web-1.jpg"
          alt="Suno background aura"
          fill
          quality={100}
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.55) 4%, rgba(0,0,0,0) 50%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
          style={{
            background: "linear-gradient(to top, rgba(16,16,18,1) 0%, rgba(16,16,18,0.0) 100%)",
          }}
        />
      </div>

      <header className={`transition-optimized fixed top-0 right-0 left-0 z-50 w-full p-5 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="flex items-center">
          <div className="flex flex-1 items-start">
            <Link href="/" className="relative inline-block h-[19.394px] w-[78.709px] transition-transform duration-300 hover:scale-105">
              <SunoLogo />
            </Link>
          </div>
          <div className="flex flex-2 items-start justify-end text-white gap-2.5">
            <a href="#" className="relative inline-block select-none cursor-pointer rounded-full bg-transparent px-4 py-2 text-center font-sans text-[15px] font-medium leading-6 text-foreground-primary ring-1 ring-inset ring-white/20 transition-all duration-200 hover:bg-white/10 hover:scale-105 active:scale-95">
              Sign In
            </a>
            <a href="#" className="relative inline-block select-none cursor-pointer rounded-full bg-foreground-primary px-4 py-2 text-center font-sans text-[15px] font-medium leading-6 text-background-primary transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95">
              Sign Up
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 flex flex-1 items-center justify-center w-full">
        <div className="flex w-full items-center justify-center">
          <div className={`transition-optimized transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="animate-float" style={{ animationDelay: '0s' }}>
              <SongCard
                title="Mojave"
                artist="HighSpeedOutro9488"
                imageUrl="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d379c487-54bc-4fa0-8716-872371df7d6e-suno-com/assets/images/image_b52e3b57-8a04-45d2-8950-6703d8f04742-2.jpeg"
                avatarUrl="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d379c487-54bc-4fa0-8716-872371df7d6e-suno-com/assets/images/defaultBlue-3.webp"
                className="hidden lg:block lg:w-52 mr-8"
                rotate={-8}
              />
            </div>
          </div>
          <section className="flex flex-col items-center justify-center flex-1">
            <div className={`transition-all duration-1000 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="mx-auto min-h-[88px] max-w-[854px] px-5 space-y-6 text-center text-[58px] font-semibold leading-11 tracking-[-0.96px] text-white transition-all duration-300 md:min-h-32 md:px-0 md:text-7xl md:leading-16">
                {typedText}
                <span className="ml-0.5 inline-block h-11 w-0.5 animate-blink align-middle bg-foreground-primary transition-opacity duration-100 md:ml-2.5 md:h-16"></span>
              </h1>
            </div>
            <div className={`transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="mx-auto max-w-[410px] pt-3 text-center text-sm font-light leading-6 text-white/80">
                Start with a simple prompt or dive into our pro editing
                tools, your next track is just a step away.
              </h2>
            </div>
            <section className={`mx-auto mt-6 w-full max-w-[800px] px-5 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
              <div className="relative flex w-full flex-col gap-2 rounded-[20px] border border-white/10 bg-black/30 backdrop-blur-[2px] transition-all duration-300 hover:border-white/20 hover:bg-black/40">
                <div className="mx-5 mt-4 flex flex-1 items-end">
                  <textarea
                    className="w-full resize-none overflow-hidden rounded-xl bg-transparent px-1 text-base leading-7 text-white outline-none placeholder:text-white/40 md:text-md md:leading-8 transition-all duration-200 focus:placeholder:text-white/60"
                    placeholder="Chat to make music"
                    rows={1}
                  ></textarea>
                </div>
                <div className="flex items-center gap-2 px-5 pb-4">
                  <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 transition-all duration-200 hover:bg-white/10 hover:scale-110 active:bg-white/15 active:scale-95">
                    <Plus className="h-5 w-5 text-white/80 transition-colors duration-200 hover:text-white" />
                  </button>
                  <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 transition-all duration-200 hover:bg-white/10 hover:scale-110 active:bg-white/15 active:scale-95">
                    <Shuffle className="h-5 w-5 text-white/80 transition-colors duration-200 hover:text-white" />
                  </button>
                  <button className="flex h-9 items-center justify-center gap-1.5 rounded-full bg-white/5 transition-all duration-200 hover:bg-white/10 hover:scale-105 active:bg-white/15 active:scale-95 md:w-auto md:px-3">
                    <SlidersHorizontal className="h-4 w-4 text-white/80 shrink-0 transition-colors duration-200 hover:text-white" />
                    <span className="hidden text-sm text-white/80 md:inline transition-colors duration-200">Advanced</span>
                  </button>
                  <div className="flex-1"></div>
                  <button className="flex h-9 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-[#FF1744] to-[#FF6B35] px-3.5 py-1.5 text-sm font-medium text-white shadow-lg transition-all duration-300 ease-in-out hover:opacity-90 hover:scale-105 hover:shadow-xl active:scale-95 md:px-4 md:py-2">
                    <div className="flex h-full w-full items-center justify-center">
                      <Music className="h-4 w-4 md:mr-1.5" />
                      <span className="hidden md:block">Create</span>
                    </div>
                  </button>
                </div>
              </div>
            </section>
          </section>
          <div className={`transition-optimized transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="animate-float" style={{ animationDelay: '3s' }}>
              <SongCard
                title="Lo-Fi Rocks"
                artist="Stray Cat/Game Dev"
                imageUrl="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d379c487-54bc-4fa0-8716-872371df7d6e-suno-com/assets/images/image_ed482c5c-3c23-416c-8fa5-09dca6ed392e-4.jpeg"
                avatarUrl="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d379c487-54bc-4fa0-8716-872371df7d6e-suno-com/assets/images/ee2ab324-5.webp"
                className="hidden lg:block lg:w-52 ml-8"
                rotate={8}
              />
            </div>
          </div>
        </div>
      </main>

      <div className={`transition-optimized relative w-full mt-auto pb-10 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <LogoMarquee />
      </div>
    </div>
  );
}