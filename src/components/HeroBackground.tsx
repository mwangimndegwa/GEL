import { useEffect, useState, useRef } from 'react';

const mediaList = [
  { type: 'image', src: 'https://media.gettyimages.com/id/2188069587/photo/confident-computer-programmer-smiling-with-crossed-arms-in-modern-office.jpg?b=1&s=2048x2048&w=0&k=20&c=FfAy9K0FWh1FwdEC_8UB7S6F_G4VCCUNhPebiDNo-L0=' },
  { type: 'video', src: 'https://res.cloudinary.com/dqy962s6x/video/upload/Welcome_Video_1_zqvfeu.mp4' },
  { type: 'video', src: 'https://res.cloudinary.com/dqy962s6x/video/upload/Welcome_Vid_2_1_u5bgy0.mp4' }
];

export default function HeroBackground() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    function nextMedia() {
      setFade(true);
      setTimeout(() => {
        setCurrent((prev) => {
          const nextIdx = (prev + 1) % mediaList.length;
          // If next media is video, reset its currentTime
          if (mediaList[nextIdx].type === 'video' && videoRefs.current[nextIdx]) {
            videoRefs.current[nextIdx].currentTime = 0;
          }
          return nextIdx;
        });
        setFade(false);
      }, 1000); // 1s fade duration
      // Set next timeout based on which media is next
      const nextIdx = (current + 1) % mediaList.length;
      const duration = nextIdx === 2 ? 8000 : 6000;
      timeoutId = setTimeout(nextMedia, duration);
    }
    // Initial timeout
    timeoutId = setTimeout(nextMedia, current === 2 ? 8000 : 6000);
    return () => clearTimeout(timeoutId);
  }, [current]);

  // Preload the next media to avoid blank transitions
  const next = (current + 1) % mediaList.length;
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      {mediaList.map((media, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === current && !fade ? 'opacity-100' :
            idx === next && fade ? 'opacity-100' :
            'opacity-0'
          }`}
          style={{ zIndex: idx === current ? 2 : idx === next && fade ? 1 : 0 }}
        >
          {media.type === 'image' ? (
            <img src={media.src} alt="" className="object-cover w-full h-full" />
          ) : (
            <video
              ref={el => videoRefs.current[idx] = el}
              src={media.src}
              className={`w-full h-full ${idx === 2 ? 'object-contain' : 'object-cover'} ${idx === 2 ? 'object-top' : ''}`}
              autoPlay
              loop
              muted
              playsInline
            />
          )}
          {/* Blue filter overlay for each media */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/55 to-black/70" />
        </div>
      ))}
    </div>
  );
}

// ...existing code...
// Insert <HeroBackground /> as the first child of your hero section
// ...existing code...
