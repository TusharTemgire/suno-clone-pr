"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const MobileAppSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    const observers = cardRefs.current.map((card) => {
      if (!card) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('card-visible');
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-background-primary">
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
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 80%, rgba(0,0,0,0.85) 100%)",
          }}
        />
      </div>
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(139,69,19,0.3),rgba(184,54,12,0.15),transparent)]"></div>

      <style>
        {`
          .mobile-card {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
            transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .mobile-card.card-visible {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        `}
      </style>
      <div className="container relative z-20 flex flex-col items-center justify-center w-full">
        <div className="mx-auto max-w-[800px] text-center">
          <h1 
            className="text-9xl font-medium leading-11 tracking-[-0.96px] text-white md:leading-24 md:tracking-[-1.44px] transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            }}
          >
            The #1 AI<br /> music app
          </h1>
          <h2 
            className="mt-9 text-base font-light leading-6 text-white/80 md:text-lg transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transitionDelay: '0.2s',
            }}
          >
            Where you can discover, create and share from anywhere because music has no boundaries.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 w-full max-w-[700px]">
          <div 
            ref={(el) => { cardRefs.current[0] = el; }}
            className="mobile-card flex flex-col items-start rounded-2xl border border-white/15 bg-black/10 p-8 text-left backdrop-blur-[1px] relative hover:bg-black/20 hover:border-white/25 transition-all duration-300"
            style={{ transitionDelay: '0.3s' }}
          >
            <div className="flex items-center gap-2 mb-6">

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" aria-hidden="true" className="h-5 w-5text-white">
                <g>
                  <path d="M16.694 12.572c-.02-2.274 1.78-3.38 1.863-3.431-1.02-1.555-2.6-1.767-3.155-1.784-1.326-.147-2.613.83-3.29.83-.675 0-1.73-.817-2.851-.792-1.443.023-2.794.897-3.535 2.255-1.529 2.768-.389 6.835 1.076 9.072C7.534 19.82 8.39 21.042 9.51 21c1.096-.047 1.505-.73 2.828-.73s1.695.73 2.838.702c1.176-.019 1.917-1.1 2.623-2.206.847-1.255 1.187-2.493 1.2-2.556a3.93 3.93 0 0 1-2.307-3.637zm-2.159-6.687c.59-.77.993-1.82.881-2.885-.853.04-1.92.617-2.535 1.372-.544.665-1.03 1.754-.904 2.779.958.074 1.942-.506 2.557-1.265z"></path>
                </g>
              </svg>
              <span className="text-lg font-medium text-white">Top 10 music app</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-5xl font-bold tracking-tight text-white">4.9</span>
              <span className="text-xl text-yellow-400">★</span>
            </div>
            <div className="mt-1 text-base text-white/70">363k+ reviews</div>
            <a
              href="#"
              aria-label="Download on iPhone"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-medium leading-6 text-black transition-opacity hover:opacity-90 w-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 text-black">
                <g>
                  <path d="M16.694 12.572c-.02-2.274 1.78-3.38 1.863-3.431-1.02-1.555-2.6-1.767-3.155-1.784-1.326-.147-2.613.83-3.29.83-.675 0-1.73-.817-2.851-.792-1.443.023-2.794.897-3.535 2.255-1.529 2.768-.389 6.835 1.076 9.072C7.534 19.82 8.39 21.042 9.51 21c1.096-.047 1.505-.73 2.828-.73s1.695.73 2.838.702c1.176-.019 1.917-1.1 2.623-2.206.847-1.255 1.187-2.493 1.2-2.556a3.93 3.93 0 0 1-2.307-3.637zm-2.159-6.687c.59-.77.993-1.82.881-2.885-.853.04-1.92.617-2.535 1.372-.544.665-1.03 1.754-.904 2.779.958.074 1.942-.506 2.557-1.265z"></path>
                </g>
              </svg>
              Download on iPhone
            </a>
          </div>

          <div 
            ref={(el) => { cardRefs.current[1] = el; }}
            className="mobile-card flex flex-col items-start rounded-2xl border border-white/15 bg-black/10 p-8 text-left backdrop-blur-[1px] relative hover:bg-black/20 hover:border-white/25 transition-all duration-300"
            style={{ transitionDelay: '0.4s' }}
          >
            <div className="flex items-center gap-2 mb-6">
     
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="white" className="h-5 w-5"><g><g><path d="M2.7 3.227v17.545a.193.193 0 0 0 .329.137L12.164 12 3.03 3.09a.193.193 0 0 0-.33.137M15.994 8.34 4.54 2.028l-.007-.004c-.197-.107-.385.16-.223.315l8.979 8.586zM4.31 21.66c-.162.155.026.422.224.315l.007-.004 11.453-6.31-2.705-2.587zM20.619 10.884l-3.2-1.762L14.413 12l3.008 2.876 3.198-1.76c.87-.48.87-1.751 0-2.232"></path></g></g></svg>
              <span className="text-lg font-medium text-white">Top 10 music app</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-5xl font-bold tracking-tight text-white">4.8</span>
              <span className="text-xl text-yellow-400">★</span>
            </div>
            <div className="mt-1 text-base text-white/70">653k+ reviews</div>
            <a
              href="#"
              aria-label="Download on Android"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-medium leading-6 text-black transition-opacity hover:opacity-90 w-full"
            >
        
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><g><g><path d="M2.7 3.227v17.545a.193.193 0 0 0 .329.137L12.164 12 3.03 3.09a.193.193 0 0 0-.33.137M15.994 8.34 4.54 2.028l-.007-.004c-.197-.107-.385.16-.223.315l8.979 8.586zM4.31 21.66c-.162.155.026.422.224.315l.007-.004 11.453-6.31-2.705-2.587zM20.619 10.884l-3.2-1.762L14.413 12l3.008 2.876 3.198-1.76c.87-.48.87-1.751 0-2.232"></path></g></g></svg>
              Download on Android
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;