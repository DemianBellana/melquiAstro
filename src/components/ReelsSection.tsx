import { useState, useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ReelsSection = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const iphoneRef = useRef(null);
  
  const frameRef = useRef(null);
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    // MOBILE: Entrada desde el costado suave
    mm.add("(max-width: 1023px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        }
      });

      tl.from(textRef.current.children, {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8
      });

      tl.from(iphoneRef.current, {
        x: "50%",
        opacity: 0,
        scale: 0.9,
        rotate: 5,
        duration: 1.5,
        ease: "power2.out"
      }, "-=0.4");
    });

    return () => mm.revert();
  }, { scope: containerRef });

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['5deg', '-5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);

  const handleMouseMove = (e) => {
    if (!frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  const togglePlay = (e) => {
    e.stopPropagation();
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) { vid.play(); }
    else            { vid.pause(); }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section 
      id="reels" 
      ref={containerRef}
      className="min-h-[90vh] bg-[#D8B7B0] overflow-hidden flex items-center justify-center py-20"
    >
      <div className="max-w-[1200px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 items-center">
        {/* Columna Izquierda: Texto */}
        <div 
          ref={textRef}
          className="flex flex-col justify-center px-6 lg:px-20 z-10 order-2 lg:order-1"
        >
          <span className="text-[0.62rem] font-light tracking-[0.28em] uppercase text-[#161616] opacity-70 mb-6">
            01. Edición de Reels
          </span>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-light leading-[1.18] text-[#161616] mb-6">
            Contenido que<br /><em className="italic text-white">atrapa en segundos</em>
          </h2>
          <p className="text-[0.88rem] font-light leading-[1.85] text-[#161616] opacity-80 max-w-[42ch] mb-9">
            Edición dinámica pensada para el formato vertical. Transiciones fluidas, ritmo visual y storytelling condensado para maximizar el engagement en plataformas como Instagram y TikTok.
          </p>
          <p className="text-[0.88rem] font-light leading-[1.85] text-[#161616] opacity-80 max-w-[42ch] mb-9">
            Esta pieza recopila mis mejores trabajos, demostrando mi capacidad para captar la atención y contar historias potentes en formatos breves.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-[#161616]/20 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            </div>
            <span className="text-[0.7rem] uppercase tracking-widest text-[#161616] opacity-70 font-medium">
              Formato Vertical 9:16
            </span>
          </div>
        </div>

        {/* Columna Derecha: iPhone */}
        <div className="relative flex items-center justify-center order-1 lg:order-2">
          <div className="absolute w-[500px] h-[500px] bg-white/10 blur-[150px] rounded-full z-0" />

          <div ref={iphoneRef} className="relative z-10">
            <motion.div
              ref={frameRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, perspective: 1000, transformStyle: 'preserve-3d' }}
              whileHover={{ scale: 1.03, y: -8 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            >
              {/* Outer shell */}
              <div style={{
                width: '240px',
                height: '500px',
                borderRadius: '42px',
                background: 'linear-gradient(145deg, #2a2a2a 0%, #111 40%, #1a1a1a 100%)',
                padding: '3px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 4px 16px rgba(0,0,0,0.4)',
                position: 'relative',
              }}>
                {/* Inner bezel */}
                <div style={{
                  width: '100%', height: '100%', borderRadius: '40px',
                  background: '#0a0a0a', overflow: 'hidden', position: 'relative',
                  display: 'flex', flexDirection: 'column',
                }}>
                  {/* Notch */}
                  <div style={{ height: '32px', background: '#000', flexShrink: 0, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '80px', height: '20px', background: '#000', borderRadius: '0 0 14px 14px', position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', zIndex: 10 }} />
                  </div>

                  {/* Video + overlays */}
                  <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }} onClick={togglePlay}>
                    <video
                      ref={videoRef}
                      autoPlay
                      loop
                      muted={isMuted}
                      playsInline
                      onPlay={() => setPlaying(true)}
                      onPause={() => setPlaying(false)}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', cursor: 'pointer' }}
                    >
                      <source src="/assets/video/reels/reel_principal.mov" type="video/mp4" />
                    </video>

                    {/* Reel overlay UI */}
                    <div style={{ position: 'absolute', inset: 0, zIndex: 30, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '16px', color: 'white', pointerEvents: 'none' }}>
                      {/* Top bar */}
                      <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '8px' }}>
                        <button
                          onClick={toggleMute}
                          style={{ background: 'rgba(0,0,0,0.25)', backdropFilter: 'blur(8px)', borderRadius: '50%', padding: '7px', border: '1px solid rgba(255,255,255,0.1)', pointerEvents: 'auto', cursor: 'pointer', color: 'white', display: 'flex' }}
                        >
                          {isMuted ? (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
                            </svg>
                          ) : (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                            </svg>
                          )}
                        </button>
                      </div>

                      {/* Sidebar icons */}
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '18px', marginBottom: '24px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}>
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                          </svg>
                          <span style={{ fontSize: '10px', fontWeight: 500 }}>98.5k</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}>
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-14c.9 0 1.8.2 2.6.6L21 3l-1.4 5.5L21 11.5z"/>
                          </svg>
                          <span style={{ fontSize: '10px', fontWeight: 500 }}>4.2k</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}>
                            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                          </svg>
                          <span style={{ fontSize: '10px', fontWeight: 500 }}>Share</span>
                        </div>
                      </div>
                    </div>

                    {/* Play/pause overlay */}
                    {!playing && (
                      <div
                        onClick={togglePlay}
                        style={{
                          position: 'absolute', inset: 0, zIndex: 40,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          background: 'rgba(0,0,0,0.15)',
                          cursor: 'pointer',
                        }}
                      >
                        <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'rgba(255,255,255,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="#111"><polygon points="5,3 19,12 5,21"/></svg>
                        </div>
                      </div>
                    )}

                    {/* Screen glare */}
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)', pointerEvents: 'none' }} />
                  </div>

                  {/* Home indicator */}
                  <div style={{ height: '24px', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <div style={{ width: '60px', height: '4px', background: '#333', borderRadius: '2px' }} />
                  </div>
                </div>

                {/* Side buttons */}
                <div style={{ position: 'absolute', left: '-4px', top: '80px',  width: '4px', height: '28px', background: '#2a2a2a', borderRadius: '2px 0 0 2px' }} />
                <div style={{ position: 'absolute', left: '-4px', top: '118px', width: '4px', height: '44px', background: '#2a2a2a', borderRadius: '2px 0 0 2px' }} />
                <div style={{ position: 'absolute', left: '-4px', top: '172px', width: '4px', height: '44px', background: '#2a2a2a', borderRadius: '2px 0 0 2px' }} />
                <div style={{ position: 'absolute', right: '-4px', top: '110px', width: '4px', height: '64px', background: '#2a2a2a', borderRadius: '0 2px 2px 0' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReelsSection;
