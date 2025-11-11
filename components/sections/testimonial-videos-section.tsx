"use client";
import type { FC } from 'react';

const PlayIcon: FC<{ className?: string }> = ({ className }) => (
  <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M22.5 11.2581C24.5 12.4122 24.5 15.0984 22.5 16.2525L3.75 26.883C1.75 28.0371 -0.25 26.694 -0.25 24.4406V3.06998C-0.25 0.816484 1.75 -0.526615 3.75 0.627484L22.5 11.2581Z" fill="currentColor"/>
  </svg>
);

const testimonials = [
  {
    videoSrc: "https://cdn1.suno.ai/Devan+Ibiza.mp4",
    overlayText: "Devan Ibiza plays his Suno track in Ibiza",
    username: "@devanibiza",
  },
  {
    videoSrc: "https://cdn1.suno.ai/Tech+Guy+Ver.MOV",
    overlayText: "Suno is wild #suno #aimusic #music",
    username: "@techguyver",
  },
  {
    videoSrc: "https://cdn1.suno.ai/Suno+Timbaland+Cover+Edit+4+(1)+-+Smaller.mp4",
    username: "@timbaland",
  },
  {
    videoSrc: "https://cdn1.suno.ai/Spell+Spell+Spell.mp4",
    overlayText: "Wrote a song about my city with AI #suno",
    username: "@spellspellspell",
  },
  {
    videoSrc: "https://cdn1.suno.ai/Nick+St+Pierre+Covers.mp4",
    overlayText: "I can't believe AI made this song",
    username: "@rickfloats",
  },
];

const TestimonialVideosSection = () => {
  return (
    <section id="community" className="bg-black pt-[100px] md:pt-[150px] overflow-hidden">
      <div className="px-5">
        <div className="mx-auto max-w-[784px] text-center">
          <h1 className="font-sans font-medium text-white text-[48px] leading-11 tracking-[-0.96px] lg:text-[72px] lg:leading-16 lg:tracking-[-1.44px]">
            Explore and get inspired
          </h1>
          <h2 className="mx-auto mt-4 max-w-[784px] text-center font-light text-[16px] leading-6 text-white/70 md:text-[18px]">
            Join the #1 AI music generator. Create songs, remix tracks, make beats, and share your music with millions — free forever.
          </h2>
        </div>
      </div>
      
      <div className="mt-[60px]">
        {/* The 'scrollbar-hide' class is assumed to be defined in a global stylesheet to hide the scrollbar thumb */}
        <div className="scrollbar-hide overflow-x-auto">
          <div className="mx-auto flex max-w-[1790px] justify-center gap-[15px] px-[15px]">
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <div className="group relative h-[475px] w-[267px] shrink-0 cursor-pointer overflow-hidden rounded-[12px] transition-transform duration-300 hover:scale-[102%]">
                  <video
                    className="h-full w-full object-cover"
                    src={testimonial.videoSrc}
                    loop
                    playsInline
                    autoPlay
                    muted
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-black/40 backdrop-blur-sm">
                      <PlayIcon className="text-white/70" />
                    </div>
                  </div>
                  {testimonial.overlayText && (
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10">
                      <p 
                        className="mb-1 text-[14px] font-medium leading-4 text-white"
                        style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
                      >
                        {testimonial.overlayText}
                      </p>
                    </div>
                  )}
                </div>
                <p className="mt-[15px] text-center text-[14px] text-white/70">
                  {testimonial.username}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20 flex justify-center pb-20">
        <a
          href="#"
          className="relative rounded-full px-8 py-3 text-[18px] font-medium text-white transition-opacity hover:opacity-90 overflow-hidden"
          style={{
            backgroundImage:
              "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d379c487-54bc-4fa0-8716-872371df7d6e-suno-com/assets/images/Aura-1-Hero-Web-1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="relative z-10">Sign up for free</span>
          <span
            className="absolute inset-0 rounded-full"
            style={{
              background: "linear-gradient(to right, rgba(255,107,107,0.7), rgba(238,90,111,0.7))",
              zIndex: 1,
            }}
          />
        </a>
      </div>
    </section>
  );
};

export default TestimonialVideosSection;