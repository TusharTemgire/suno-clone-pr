import React from 'react';
import Link from 'next/link';

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266.058 1.644.07 4.85.07zm0-2.163C8.74 0 8.333.012 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947C23.728 2.69 21.31.272 16.947.072 15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/>
  </svg>
);

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M21.57.195a.43.43 0 0 0-.58-.33l-3.32 1.39A20.22 20.22 0 0 0 12 1a20.08 20.08 0 0 0-5.67.255L3 .195a.43.43 0 0 0-.58.33c-.22.48-.12.92.17 1.25l2.25 2.16a19.16 19.16 0 0 0-3.38 3.75.47.47 0 0 0 .1.6c.15.12.36.13.52.06l3-1.6a.42.42 0 0 1 .5.09l.06.09a15.3 15.3 0 0 0 13.5 0l.06-.09a.42.42 0 0 1 .5-.09l3 1.6a.46.46 0 0 0 .62-.66 19.16 19.16 0 0 0-3.38-3.75l2.25-2.16c.3-.33.4-.77.18-1.25zM8.33 13.25c-1.1 0-2-1.07-2-2.37s.9-2.37 2-2.37 2 1.08 2 2.37-.9 2.37-2 2.37zm7.34 0c-1.1 0-2-1.07-2-2.37s.9-2.37 2-2.37 2 1.08 2 2.37-.9 2.37-2 2.37z"/>
  </svg>
);

const FooterSection = () => {
  return (
    <footer className="bg-black py-[60px]">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3 md:gap-8 md:text-left">
          {/* Brand Column */}
          <div>
            <h3 className="mb-4 text-[16px] font-medium text-white">Brand</h3>
            <ul className="flex flex-col gap-1">
              <li><Link href="/about" className="text-[14px] text-white/70 transition hover:text-white">About</Link></li>
              <li><Link href="/jobs" className="text-[14px] text-white/70 transition hover:text-white">Work at Suno</Link></li>
              <li><Link href="/blog" className="text-[14px] text-white/70 transition hover:text-white">Blog</Link></li>
              <li><Link href="/pricing" className="text-[14px] text-white/70 transition hover:text-white">Pricing</Link></li>
              <li><a href="https://suno.com" target="_blank" rel="noopener noreferrer" className="text-[14px] text-white/70 transition hover:text-white">Hub</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="mb-4 text-[16px] font-medium text-white">Support</h3>
            <ul className="flex flex-col gap-1">
              <li><a href="https://suno.com" target="_blank" rel="noopener noreferrer" className="text-[14px] text-white/70 transition hover:text-white">Help</a></li>
              <li><Link href="/contact" className="text-[14px] text-white/70 transition hover:text-white">Contact Us</Link></li>
              <li><Link href="/community-guidelines" className="text-[14px] text-white/70 transition hover:text-white">Community Guidelines</Link></li>
              <li><Link href="/faq" className="text-[14px] text-white/70 transition hover:text-white">FAQs</Link></li>
              <li><Link href="/terms" className="text-[14px] text-white/70 transition hover:text-white">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-[14px] text-white/70 transition hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Social Media Column */}
          <div className="flex items-start justify-center md:justify-end">
            <div className="flex gap-5">
              <a href="https://twitter.com/suno_ai_" target="_blank" rel="noopener noreferrer" className="text-white transition hover:opacity-70">
                <XIcon className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/suno_ai_/" target="_blank" rel="noopener noreferrer" className="text-white transition hover:opacity-70">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="https://discord.gg/sunoai" target="_blank" rel="noopener noreferrer" className="text-white transition hover:opacity-70">
                <DiscordIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-14 text-center text-[12px] text-white/50">
          © 2025 Suno, Inc.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;