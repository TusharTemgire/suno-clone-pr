import Image from 'next/image';

const PremiumIcon = () => (
  <div className="absolute top-[13px] left-[13px]">
    <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
      <path d="M9.01633 0.354004L0.266327 5.37801V15.426L9.01633 20.45L17.7663 15.426V5.37801L9.01633 0.354004ZM8.01633 9.45301H10.0163V11.453H12.0163V7.45301H8.01633V5.45301H14.0163V13.453H12.0163V15.453H6.01633V7.45301H8.01633V9.45301Z" fill="currentColor"/>
    </svg>
  </div>
);

const PlayIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-3 w-3">
    <path d="M2 10.5V1.5L9.5 6L2 10.5Z" fill="currentColor"/>
  </svg>
);

const HeartIcon = () => (
  <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5">
    <path d="M12.3529 2.5975C11.9705 2.22154 11.5126 1.92813 11.0069 1.73711C9.48971 1.16843 7.74718 1.63674 6.55162 2.87328C6.54133 2.88394 6.53112 2.89452 6.521 2.90503L6.5 2.9265C6.46827 2.95896 6.43912 2.98983 6.41249 3.01918C5.23485 1.60336 3.44296 1.18956 1.97193 1.83401C1.49347 2.03159 1.0583 2.31682 0.69705 2.6715C-0.30295 3.6515 -0.23295 5.2515 0.83705 6.3615L5.78705 11.4815C6.18705 11.8915 6.81705 11.8915 7.21705 11.4815L12.1671 6.3615C13.2371 5.2515 13.3071 3.6515 12.3529 2.5975Z" fill="currentColor"/>
  </svg>
);


interface Song {
  title: string;
  artistName: string;
  artistAvatar: string;
  albumArt: string;
  playCount: string;
  likeCount: string;
  isPremium: boolean;
}

const SongCard = ({ song }: { song: Song }) => (
  <div className="w-[260px] shrink-0">
    <div className="relative h-[267px] w-full origin-top overflow-hidden rounded-[12px] transition-transform duration-300 hover:scale-[102%] md:h-[311px]">
      <Image src={song.albumArt} alt={song.title} width={260} height={311} className="h-full w-full object-cover" />
      {song.isPremium && <PremiumIcon />}
      <div className="absolute bottom-[13px] left-[14.5px] flex flex-row gap-1">
        <div aria-label="Play button with play count" className="inline-flex h-[30px] flex-row items-center gap-1 rounded-md border border-border-primary bg-white/25 px-2 py-1 font-sans text-[12.68px] font-medium uppercase leading-[15.216px] text-foreground backdrop-blur-[15.22px]">
          <PlayIcon />
          <div>{song.playCount}</div>
        </div>
        <button className="hidden h-[30px] flex-row items-center gap-1 rounded-md border border-border-primary bg-white/25 px-2 py-1 font-sans text-[12.68px] font-medium uppercase leading-[15.216px] text-foreground backdrop-blur-[15.22px] md:flex" aria-label="Like button with like count">
          <HeartIcon />
          <div>{song.likeCount}</div>
        </button>
      </div>
    </div>
    <div className="mt-[15px] overflow-hidden whitespace-nowrap text-ellipsis text-[15.581px] font-medium leading-[15.581px] text-white">
      {song.title}
    </div>
    <div className="mt-2.5 flex items-center gap-1">
      <div className="h-6 w-6 shrink-0">
        <Image src={song.artistAvatar} alt={song.artistName} width={24} height={24} className="h-full w-full rounded-full" />
      </div>
      <div className="flex-1 overflow-hidden whitespace-nowrap text-ellipsis text-[11.685px] font-medium leading-[15.581px]">
        {song.artistName}
      </div>
    </div>
  </div>
);

const FeaturedSongsSection = () => {
  const songs: Song[] = [
    {
      title: "Mojave",
      artistName: "HighSpeedOutro9488",
      artistAvatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d379c487-54bc-4fa0-8716-872371df7d6e-suno-com/assets/images/defaultBlue-3.webp",
      albumArt: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d379c487-54bc-4fa0-8716-872371df7d6e-suno-com/assets/images/image_b52e3b57-8a04-45d2-8950-6703d8f04742-2.jpeg",
      playCount: "30K",
      likeCount: "742",
      isPremium: true
    },
    {
      title: "Lo-Fi Rocks",
      artistName: "Stray Cat/Game Dev",
      artistAvatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d379c487-54bc-4fa0-8716-872371df7d6e-suno-com/assets/images/ee2ab324-5.webp",
      albumArt: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d379c487-54bc-4fa0-8716-872371df7d6e-suno-com/assets/images/image_ed482c5c-3c23-416c-8fa5-09dca6ed392e-4.jpeg",
      playCount: "26K",
      likeCount: "495",
      isPremium: true
    },
    {
      title: "almost home",
      artistName: "Lofi Vibes",
      artistAvatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d379c487-54bc-4fa0-8716-872371df7d6e-suno-com/assets/images/8e9692c3-7.webp",
      albumArt: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d379c487-54bc-4fa0-8716-872371df7d6e-suno-com/assets/images/image_50b3c251-bf5a-4f64-850a-625a43c4ba97-6.jpeg",
      playCount: "33K",
      likeCount: "661",
      isPremium: true
    },
    {
      title: "The Traveler's Song",
      artistName: "The Bard",
      artistAvatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d379c487-54bc-4fa0-8716-872371df7d6e-suno-com/assets/images/0e32929a-9.webp",
      albumArt: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d379c487-54bc-4fa0-8716-872371df7d6e-suno-com/assets/images/6ac66ed1-da65-4715-986b-eec035c18d95-8.jpeg",
      playCount: "26K",
      likeCount: "530",
      isPremium: true
    },
    {
      title: "Cosmic Drift",
      artistName: "Soundtrack",
      artistAvatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d379c487-54bc-4fa0-8716-872371df7d6e-suno-com/assets/images/eb6ae7a4-11.webp",
      albumArt: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d379c487-54bc-4fa0-8716-872371df7d6e-suno-com/assets/images/image_bc7c7097-bd20-4742-b678-9e14ec35fbe9-10.jpeg",
      playCount: "13K",
      likeCount: "250",
      isPremium: true
    },
    {
      title: "Mojave",
      artistName: "HighSpeedOutro9488",
      artistAvatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d379c487-54bc-4fa0-8716-872371df7d6e-suno-com/assets/images/defaultBlue-3.webp",
      albumArt: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d379c487-54bc-4fa0-8716-872371df7d6e-suno-com/assets/images/image_b52e3b57-8a04-45d2-8950-6703d8f04742-2.jpeg",
      playCount: "30K",
      likeCount: "742",
      isPremium: true
    },
    {
      title: "Lo-Fi Rocks",
      artistName: "Stray Cat/Game Dev",
      artistAvatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d379c487-54bc-4fa0-8716-872371df7d6e-suno-com/assets/images/ee2ab324-5.webp",
      albumArt: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d379c487-54bc-4fa0-8716-872371df7d6e-suno-com/assets/images/image_ed482c5c-3c23-416c-8fa5-09dca6ed392e-4.jpeg",
      playCount: "26K",
      likeCount: "495",
      isPremium: true
    },
     {
      title: "almost home",
      artistName: "Lofi Vibes",
      artistAvatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d379c487-54bc-4fa0-8716-872371df7d6e-suno-com/assets/images/8e9692c3-7.webp",
      albumArt: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d379c487-54bc-4fa0-8716-872371df7d6e-suno-com/assets/images/image_50b3c251-bf5a-4f64-850a-625a43c4ba97-6.jpeg",
      playCount: "33K",
      likeCount: "661",
      isPremium: true
    },
  ];

  return (
    <section id="featured-songs" className="bg-linear-to-b from-[#101012] to-[#101012] overflow-hidden">
      <div className="mx-auto mt-20 max-w-[800px] px-2.5">
        <div className="text-center">
          <h1 className="mx-auto max-w-xl text-white select-none whitespace-pre-wrap text-center font-sans font-medium text-foreground-primary text-[35px] leading-[35px] lg:text-[72px] lg:leading-16">
            Mind blowing song quality
          </h1>
          <h2 className="mx-auto mt-4 max-w-[615px] text-center text-[16px] leading-6 text-white/70 md:text-[18px]">
            Whether you have a melody in your head, lyrics you&apos;ve written, or just a feeling you want to hear—Suno makes high-quality music creation accessible to all
          </h2>
        </div>
      </div>
      <div className="mx-auto mt-10 mb-0 w-full max-w-[2508px] md:mt-[60px] md:mb-[150px]">
        <div className="w-full overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max gap-6 px-6">
            {songs.map((song, index) => (
              <SongCard key={index} song={song} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSongsSection;