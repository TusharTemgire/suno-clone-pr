/* eslint-disable @next/next/no-img-element */
"use client";

import React from 'react';
import Image from 'next/image';
import { Music, Heart, MessageSquare, Play, Download, Headphones } from 'lucide-react';

const CustomKeyframes = () => (
  <style>
    {`
      @keyframes cursor-click-animation {
        0%, 30%, 100% {
          transform: translate(20px, -20px) scale(0.9);
          opacity: 1;
        }
        40% {
          transform: translate(20px, -20px) scale(0.8);
        }
        50% {
          transform: translate(20px, -20px) scale(0.9);
        }
        60%, 90% {
          transform: translate(-30px, 20px) scale(0.9);
          opacity: 1;
        }
        95% {
          transform: translate(-30px, 20px) scale(0.8);
        }
      }
      @keyframes features-marquee-animation {
        from {
          transform: translateY(0);
        }
        to {
          transform: translateY(-50%);
        }
      }
    `}
  </style>
);

// Visual components
const FreeSongsVisual = () => (
  <div className="relative mt-auto flex h-[280px] w-full flex-col items-center justify-center overflow-hidden rounded-[10px]">
    <div className="absolute h-[250%] w-[250%] animate-[spin_30s_linear_infinite] rounded-full border-t border-white/10"></div>
    <div className="absolute h-[200%] w-[200%] animate-[spin_50s_linear_infinite] rounded-full border-t border-white/10"></div>
    <div className="absolute h-[150%] w-[150%] animate-[spin_30s_linear_infinite_reverse] rounded-full border-t border-white/10"></div>
    <img alt="" className="rounded-[12px] object-contain" style={{height: "180.573px", width: "180.578px"}} src="https://cdn-o.suno.com/splash-page/highlights/highlight%204.png" />
  </div>
);

const AIMusicVisual = () => (
  <div className="mt-auto flex h-[280px] w-full items-center justify-center overflow-hidden rounded-[10px] ">
    <img
      alt=""
      className="rounded-[12px] object-contain"
      style={{ height: '180px', width: '317px' }}
      src="https://cdn-o.suno.com/splash-page/highlights/highlight%205-v2.png"
    />
  </div>
);

const ShareWorldVisual = () => (
  <div className="mt-auto flex h-[280px] w-full items-center justify-center overflow-hidden rounded-[10px]">
    <img
      alt=""
      className="rounded-[12px] object-contain"
      style={{ height: '180px', width: '303px' }}
      src="https://cdn-o.suno.com/splash-page/highlights/highlight%206.png"
    />
  </div>
);

const ModernSongMakerVisual = () => (
  <div className="relative mt-auto flex h-[280px] w-full items-center justify-center overflow-hidden rounded-[10px] ">
    <img
      alt=""
      className="rounded-[12px] object-contain"
      style={{ height: '154.232px', width: '348px' }}
      src="https://cdn-o.suno.com/splash-page/highlights/highlight%201.png"
    />
  </div>
);

const KeepItAllVisual = () => (
  <div className="mt-auto flex h-[280px] w-full items-center justify-center overflow-hidden rounded-[10px] ">
    <img
      alt=""
      className="rounded-[12px] object-contain"
      style={{ height: '188.933px', width: '312.038px' }}
      src="https://cdn-o.suno.com/splash-page/highlights/highlight%202.png"
    />
  </div>
);

const StemsVisual = () => (
  <div className="mt-auto flex h-[280px] w-full items-center justify-center overflow-hidden rounded-[10px] ">
    <img
      alt=""
      className="rounded-[12px] object-contain"
      style={{ height: '180px', width: '348px' }}
      src="https://cdn-o.suno.com/splash-page/highlights/highlight%203.png"
    />
  </div>
);

const featureCards = [
  {
    title: "10 Free songs, daily",
    description: "Listen to generations of songs, or create your own. Never run out.",
    visual: <FreeSongsVisual />,
  },
  {
    title: "Free AI music generator",
    description: "Making a hit is now as simple as a few words. With our free AI music generator, it's never been easier.",
    visual: <AIMusicVisual />,
  },
  {
    title: "Share it with the world",
    description: "From a single source, share your music on any social or audio platform.",
    visual: <ShareWorldVisual />,
  },
  {
    title: "Experience the modern song maker",
    description: "Turn ideas into radio-quality songs. No instruments needed, just imagination.",
    visual: <ModernSongMakerVisual />,
  },
  {
    title: "Create everyday. Keep it all.",
    description: "Keep the rights to your music. Suno will never own the music you make.",
    visual: <KeepItAllVisual />,
  },
  {
    title: "Extract stems. Drop into your DAW.",
    description: "Instrumental and acapella versions are available with Pro and Premier subscriptions.",
    visual: <StemsVisual />,
  },
];

export default function FeaturesGridSection() {
  return (
    <section id="features" className="bg-[#101012] w-full">
      <CustomKeyframes />
      <div className="mx-auto flex items-center justify-center max-w-[854px] px-5">
        <h1 className="text-center font-sans text-[35px] font-medium leading-[1.1] text-white lg:text-[72px] lg:leading-[1.1]">
          Everything you need to make music your way
        </h1>
      </div>
      <div className="mx-auto mt-10 mb-10 w-full max-w-6xl px-5 md:mt-[60px] md:mb-[60px]">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {featureCards.map((card, index) =>(
            <div key={index} className="flex h-full min-h-[480px] w-full flex-col gap-5 rounded-[20px] border border-white/10 bg-white/5 ">
              <div className="flex flex-col p-6">
                <h3 className="font-sans text-[18px] font-medium leading-6 text-white">{card.title}</h3>
                <p className="mt-2 text-[16px] leading-6 text-white/70">{card.description}</p>
              </div>
              {card.visual}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}