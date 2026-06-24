import { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/melquigrafias/',
  tiktok:    'https://www.tiktok.com/@meelqui',
};

const IconInstagram = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
  </svg>
);

const IconTikTok = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
  </svg>
);

const socialButtons = [
  { key: 'instagram', Icon: IconInstagram, label: 'Instagram', color: '#E1306C' },
  { key: 'tiktok',    Icon: IconTikTok,    label: 'TikTok',    color: '#010101' },
];

// ─── iPhone Frame ────────────────────────────────────────────────────────────
interface IPhoneFrameProps {
  video: string;
  videos?: string[];
  isActive: boolean;
  onClick: () => void;
  isMobile?: boolean;
}

const IPhoneFrame = ({ video, videos = [video], isActive, onClick, isMobile = false }: IPhoneFrameProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-8deg', '8deg']);

  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  const currentVideo = videos[currentVideoIndex] || video;

  useEffect(() => {
    if (!isActive && videoRef.current) {
      videoRef.current.pause();
      setPlaying(false);
    }
  }, [isActive]);

  const handleVideoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.play()
        .then(() => {
          setPlaying(true);
        })
        .catch((err: any) => {
          console.warn("Video play interrupted:", err);
        });
    } else {
      vid.pause();
      setPlaying(false);
    }
    onClick();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseEnter = () => {
    if (!isMobile) setHovered(true);
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHovered(false);
      x.set(0);
      y.set(0);
    }
  };

  return (
    <motion.div
      ref={frameRef}
      onMouseMove={isMobile ? undefined : handleMouseMove}
      onMouseEnter={isMobile ? undefined : handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={isMobile ? {} : { rotateX, rotateY, perspective: 1000 }}
      whileHover={isMobile ? {} : { scale: 1.04, y: -8 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className="iphone-frame cursor-pointer"
    >
      {/* Outer shell */}
      <div
        style={{
          width: '220px',
          height: '460px',
          borderRadius: '42px',
          background: 'linear-gradient(145deg, #2a2a2a 0%, #111 40%, #1a1a1a 100%)',
          padding: '3px',
          boxShadow: isActive
            ? '0 0 0 2px #e02020, 0 40px 80px rgba(0,0,0,0.25), 0 0 40px rgba(220,30,30,0.1)'
            : '0 20px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.12)',
          position: 'relative',
        }}
      >
        {/* Inner bezel */}
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '40px',
            background: '#0a0a0a',
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Status bar + notch */}
          <div
            style={{
              height: '32px',
              background: '#000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              position: 'relative',
            }}
          >
            {/* Notch */}
            <div
              style={{
                width: '80px',
                height: '20px',
                background: '#000',
                borderRadius: '0 0 14px 14px',
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 10,
              }}
            />
          </div>

          {/* Video content */}
          <div
            onClick={handleVideoClick}
            style={{ flex: 1, overflow: 'hidden', position: 'relative', cursor: 'pointer' }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentVideoIndex}
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ duration: 0.55, ease: "easeInOut" }}
                style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }}
              >
                <video
                  ref={videoRef}
                  onLoadedMetadata={(e) => {
                    if (isActive) {
                      e.currentTarget.play()
                        .then(() => setPlaying(true))
                        .catch((err: any) => console.warn("Video play interrupted:", err));
                    }
                  }}
                  loop
                  muted={false}
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block',
                    backgroundColor: '#000'
                  }}
                >
                  <source src={currentVideo} type="video/mp4" />
                  <source src={currentVideo} type="video/quicktime" />
                </video>
              </motion.div>
            </AnimatePresence>

            {/* Play/Pause overlay */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: playing ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: playing ? 'transparent' : 'rgba(0,0,0,0.25)',
                pointerEvents: 'none',
                zIndex: 10,
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.85)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                }}
              >
                {/* Play triangle */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#111">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </div>
            </motion.div>

            {/* Subtle screen glare */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)',
                pointerEvents: 'none',
                zIndex: 15,
              }}
            />

            {/* Arrow controllers for desktop (on hover) */}
            {!isMobile && videos && videos.length > 1 && (
              <>
                {/* Left Arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setPlaying(false);
                    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
                  }}
                  style={{
                    position: 'absolute',
                    left: '8px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    color: '#fff',
                    border: 'none',
                    opacity: hovered ? 1 : 0,
                    transition: 'opacity 0.2s ease, background-color 0.2s',
                    cursor: 'pointer',
                    zIndex: 20,
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.6)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.4)'}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>

                {/* Right Arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setPlaying(false);
                    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
                  }}
                  style={{
                    position: 'absolute',
                    right: '8px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    color: '#fff',
                    border: 'none',
                    opacity: hovered ? 1 : 0,
                    transition: 'opacity 0.2s ease, background-color 0.2s',
                    cursor: 'pointer',
                    zIndex: 20,
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.6)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.4)'}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </>
            )}

            {/* Dots indicators for desktop */}
            {!isMobile && videos && videos.length > 1 && (
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: '6px',
                  zIndex: 20,
                  background: 'rgba(0, 0, 0, 0.4)',
                  padding: '4px 8px',
                  borderRadius: '12px',
                  backdropFilter: 'blur(4px)',
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {videos.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setPlaying(false);
                      setCurrentVideoIndex(idx);
                    }}
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      border: 'none',
                      padding: 0,
                      background: idx === currentVideoIndex ? '#e02020' : 'rgba(255, 255, 255, 0.4)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    aria-label={`Video ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Home indicator bar */}
          <div
            style={{
              height: '24px',
              background: '#000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: '60px',
                height: '4px',
                background: '#333',
                borderRadius: '2px',
              }}
            />
          </div>
        </div>

        {/* Side buttons (decorative) */}
        <div
          style={{
            position: 'absolute',
            left: '-4px',
            top: '80px',
            width: '4px',
            height: '28px',
            background: '#2a2a2a',
            borderRadius: '2px 0 0 2px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: '-4px',
            top: '118px',
            width: '4px',
            height: '44px',
            background: '#2a2a2a',
            borderRadius: '2px 0 0 2px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: '-4px',
            top: '172px',
            width: '4px',
            height: '44px',
            background: '#2a2a2a',
            borderRadius: '2px 0 0 2px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: '-4px',
            top: '110px',
            width: '4px',
            height: '64px',
            background: '#2a2a2a',
            borderRadius: '0 2px 2px 0',
          }}
        />
      </div>
    </motion.div>
  );
};

// ─── Main Section ─────────────────────────────────────────────────────────────
const VideoWorkSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const lastScrollRef = useRef(0);


  const categories = [
    { 
      name: 'Social Media', 
      desc: 'Contenido optimizado para redes sociales.',  
      video: '/assets/video/work/social_media_1.mp4',
      videos: ['/assets/video/work/social_media_1.mp4', '/assets/video/work/social_media_2.mov'] 
    },
    { 
      name: 'Talking Head', 
      desc: 'Entrevistas y contenido directo a cámara.',   
      video: '/assets/video/work/talking_head_1.mp4',
      videos: ['/assets/video/work/talking_head_1.mp4', '/assets/video/work/talking_head_2.mov']
    },
    { 
      name: 'Drone',        
      desc: 'Tomas aéreas cinematográficas.',              
      video: '/assets/video/work/drone_1.mp4',
      videos: ['/assets/video/work/drone_1.mp4', '/assets/video/work/drone_2.mp4']
    },
    { 
      name: 'Events',       
      desc: 'Cobertura y edición de eventos en vivo.',     
      video: '/assets/video/work/event_1.mov',
      videos: ['/assets/video/work/event_1.mov', '/assets/video/work/event_2.mov']
    },
  ];

  const [activeMobileCategory, setActiveMobileCategory] = useState<string>('Todos');
  const [hoveredButtonIndex, setHoveredButtonIndex] = useState<number | null>(null);

  const mobileSlides = categories.flatMap((cat) =>
    (cat.videos || [cat.video]).map((vid) => ({
      category: cat.name,
      name: cat.name,
      desc: cat.desc,
      video: vid,
    }))
  );

  const filteredMobileSlides = activeMobileCategory === 'Todos'
    ? mobileSlides
    : mobileSlides.filter(slide => slide.category === activeMobileCategory);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1025);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    if (containerRef.current) {
      containerRef.current.scrollTo({ left: 0, behavior: 'instant' as any });
    }
    setCurrentSlide(0);
    setActiveIndex(null);
  }, [activeMobileCategory, isMobile]);

  // Autoplay carousel every 10 seconds on mobile, scrolling programmatically
  useEffect(() => {
    if (!isMobile) return;
    
    let interval: any = null;
    if (activeIndex === null && !isDragging) {
      interval = setInterval(() => {
        const nextSlide = (currentSlide + 1) % filteredMobileSlides.length;
        if (containerRef.current) {
          const width = containerRef.current.offsetWidth;
          containerRef.current.scrollTo({ left: nextSlide * width, behavior: 'smooth' });
        }
        setCurrentSlide(nextSlide);
      }, 10000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isMobile, activeIndex, currentSlide, isDragging, filteredMobileSlides.length]);

  useGSAP(() => {
    if (!isMobile) {
      const frames = gsap.utils.toArray('.iphone-frame');
      frames.forEach((frame, i) => {
        gsap.from(frame as HTMLElement, {
          scrollTrigger: {
            trigger: frame as HTMLElement,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
          y: 80,
          opacity: 0,
          duration: 1.0,
          delay: i * 0.12,
          ease: 'power3.out',
        });
      });
    }
  }, { scope: sectionRef, dependencies: [isMobile] });

  return (
    <section
      id="video-work"
      ref={sectionRef}
      style={{
        background: '#f7f4ef',
        padding: isMobile ? '60px 16px 80px' : '80px 24px 100px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Subtle accent glow top */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '300px',
          background: 'radial-gradient(ellipse, rgba(220,30,30,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '64px' }}>
        <span
          style={{
            fontSize: '0.62rem',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: '#e02020',
            display: 'block',
            marginBottom: '16px',
          }}
        >
          02. Video Work
        </span>
        <h2
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 300,
            color: '#1a1714',
            lineHeight: 1.18,
            margin: 0,
          }}
        >
          Categorías y<br />
          <em style={{ fontStyle: 'italic', color: '#555' }}>especialidades</em>
        </h2>
      </div>

      {isMobile ? (
        <>
          {/* Category Selector Tabs for Mobile */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(6, 1fr)', 
              gap: '8px', 
              padding: '4px 16px 20px', 
              maxWidth: '340px',
              margin: '0 auto',
            }}
          >
            {['Todos', 'Social Media', 'Talking Head', 'Drone', 'Events'].map((catName, idx) => {
              const isSelected = activeMobileCategory === catName;
              const isHovered = hoveredButtonIndex === idx;

              // Grid positioning for 3 on top, 2 below centered:
              // Index 0, 1, 2 take columns 1-2, 3-4, 5-6 (span 2 each)
              // Index 3 takes columns 2-3 (starts at col 2, span 2)
              // Index 4 takes columns 4-5 (starts at col 4, span 2)
              const gridColumnStyle = idx < 3 
                ? 'span 2' 
                : idx === 3 
                  ? '2 / span 2' 
                  : '4 / span 2';

              return (
                <button
                  key={catName}
                  onClick={() => setActiveMobileCategory(catName)}
                  onMouseEnter={() => setHoveredButtonIndex(idx)}
                  onMouseLeave={() => setHoveredButtonIndex(null)}
                  style={{
                    gridColumn: gridColumnStyle,
                    padding: '8px 4px',
                    borderRadius: '20px',
                    fontSize: '0.72rem',
                    fontWeight: 500,
                    border: isSelected ? '1px solid #ff4d6d' : (isHovered ? '1px solid #ff4d6d' : '1px solid rgba(0,0,0,0.08)'),
                    background: isSelected ? '#ff4d6d' : (isHovered ? '#ffe3e8' : 'rgba(255,255,255,0.7)'),
                    color: isSelected ? '#fff' : (isHovered ? '#ff4d6d' : '#555'),
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    textAlign: 'center',
                    transition: 'all 0.25s ease',
                    boxShadow: isSelected ? '0 4px 10px rgba(255,77,109,0.15)' : 'none',
                    outline: 'none',
                  }}
                >
                  {catName}
                </button>
              );
            })}
          </div>

          <div 
            ref={containerRef} 
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none w-full max-w-[300px] mx-auto"
            style={{
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
            }}
            onTouchStart={() => {
              setIsDragging(true);
            }}
            onTouchEnd={() => {
              setIsDragging(false);
            }}
            onScroll={(e) => {
              const width = e.currentTarget.offsetWidth;
              const currentScroll = e.currentTarget.scrollLeft;

              // Calcular la velocidad/dirección del scroll
              lastScrollRef.current = currentScroll;

              if (width > 0) {
                const slide = Math.round(currentScroll / width);
                if (slide !== currentSlide) {
                  setCurrentSlide(slide);
                  setActiveIndex(null);
                }
              }
            }}
          >
            {filteredMobileSlides.map((slide, i) => (
              <div
                key={slide.video}
                className="min-w-full snap-center flex flex-col items-center gap-5 px-8 shrink-0"
              >
                <h3
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '1.2rem',
                    fontWeight: 400,
                    color: '#1a1714',
                    margin: '0 0 4px',
                    textAlign: 'center',
                  }}
                >
                  {slide.name}
                </h3>

                <IPhoneFrame
                  video={slide.video}
                  isActive={activeIndex === i}
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                  isMobile={isMobile}
                />

                <div style={{ textAlign: 'center' }}>
                  <p
                    style={{
                      fontSize: '0.75rem',
                      color: '#888',
                      margin: '0 0 12px',
                      maxWidth: '220px',
                      lineHeight: 1.5,
                    }}
                  >
                    {slide.desc}
                  </p>

                  {/* Social icons */}
                  <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                    {socialButtons.map(({ key, Icon, label, color }) => (
                      <a
                        key={key}
                        href={SOCIAL_LINKS[key as keyof typeof SOCIAL_LINKS]}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'rgba(0,0,0,0.05)',
                          border: `1px solid ${color}33`,
                          color: color,
                          transition: 'transform 0.2s, border-color 0.2s',
                          textDecoration: 'none',
                        }}
                      >
                        <Icon />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1.5 mt-6">
            {filteredMobileSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (containerRef.current) {
                    const width = containerRef.current.offsetWidth;
                    containerRef.current.scrollTo({ left: idx * width, behavior: 'smooth' });
                  }
                  setCurrentSlide(idx);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? 'w-5 bg-[#e02020]' : 'w-1.5 bg-dark/20'
                }`}
                style={{ border: 'none', outline: 'none', cursor: 'pointer' }}
                aria-label={`Ir al slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      ) : (
        /* Desktop View - Original Staggered Grid */
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '32px',
            maxWidth: '1100px',
            margin: '0 auto',
            alignItems: 'flex-start',
          }}
        >
          {categories.map((cat, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px',
              }}
            >
              {/* Category Name Title above phone */}
              <motion.h3
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '1.2rem',
                  fontWeight: 400,
                  color: '#1a1714',
                  margin: '0 0 8px',
                  textAlign: 'center',
                  minHeight: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {cat.name}
              </motion.h3>

              <IPhoneFrame
                video={cat.video}
                videos={cat.videos}
                isActive={activeIndex === i}
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                isMobile={isMobile}
              />

              {/* Label below phone */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.3 }}
                style={{ textAlign: 'center' }}
              >
                <p
                  style={{
                    fontSize: '0.75rem',
                    color: '#888',
                    margin: '0 0 12px',
                    maxWidth: '180px',
                    lineHeight: 1.5,
                  }}
                >
                  {cat.desc}
                </p>

                {/* Social icons */}
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                  {socialButtons.map(({ key, Icon, label, color }) => (
                    <a
                      key={key}
                      href={SOCIAL_LINKS[key as keyof typeof SOCIAL_LINKS]}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(0,0,0,0.05)',
                        border: `1px solid ${color}33`,
                        color: color,
                        transition: 'transform 0.2s, border-color 0.2s',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = 'scale(1.15)';
                        e.currentTarget.style.borderColor = color + '88';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.borderColor = color + '33';
                      }}
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default VideoWorkSection;