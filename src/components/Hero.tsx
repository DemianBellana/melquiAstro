import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  const container = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const ctaTextRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    gsap.from('.char-left', {
      x: -100, rotationY: 90, rotationZ: -20, opacity: 0,
      duration: 1, stagger: 0.03, ease: 'power3.out', delay: 0.5,
    });
    gsap.from('.char-right', {
      x: 100, rotationY: -90, rotationZ: 20, opacity: 0,
      duration: 1, stagger: 0.03, ease: 'power3.out', delay: 0.5,
    });

    gsap.from('.hero-badge', {
      y: 20, opacity: 0, scale: 0.9, duration: 1, ease: 'power2.out', delay: 1.2,
    });
    gsap.from('.hero-cta', {
      y: 20, opacity: 0, scale: 0.95, duration: 1, ease: 'power2.out', delay: 1.5,
    });
  }, { scope: container });

  const handleMagnet = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ctaRef.current || !ctaTextRef.current) return;
    const r = ctaRef.current.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    gsap.to(ctaTextRef.current, { x: x * 0.15, y: y * 0.25, duration: 0.3, ease: 'power2.out' });
  };

  const handleMagnetLeave = () => {
    if (!ctaTextRef.current) return;
    gsap.to(ctaTextRef.current, { x: 0, y: 0, duration: 0.4, ease: 'power2.out' });
  };

  const renderLetters = (text: string, className: string) =>
    text.split('').map((char, i) => (
      <span key={i} className={`${className} inline-block whitespace-pre`}>{char}</span>
    ));

  return (
    <section
      id="inicio"
      ref={container}
      className="h-screen relative flex items-center justify-center overflow-hidden"
    >
      <video
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/herovideo2.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/20 z-10" />

      <div className="relative z-20 text-center text-white px-4 perspective-1000">


        <h1 className="font-serif text-[clamp(3rem,7vw,6.5rem)] font-light italic leading-[1.08] mb-6 overflow-hidden">
          <div className="flex justify-center flex-wrap">
            {renderLetters('Video Editor &', 'char-left')}
          </div>
          <div className="flex justify-center flex-wrap">
            {renderLetters('Content Creator', 'char-right')}
          </div>
        </h1>

        <div className="hero-badge inline-flex items-center gap-2 sm:gap-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 sm:px-5 sm:py-1.5 text-white/90 text-[10px] sm:text-[11px] tracking-[0.05em] sm:tracking-[0.22em] uppercase shadow-lg whitespace-nowrap mb-7">
          Dinámica &amp; Creatividad · Historias que impactan
          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#7C8F7A] animate-pulse" />
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <button
            ref={ctaRef}
            onMouseMove={handleMagnet}
            onMouseLeave={handleMagnetLeave}
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hero-cta group relative overflow-hidden flex items-center gap-3
                       bg-[#ff4d6d] border border-[#ff4d6d] rounded-full
                       px-9 py-4
                       font-sans text-[11px] tracking-[0.22em] uppercase text-white
                       transition-all duration-400 ease-out
                       hover:bg-[#e03d5a] hover:border-[#e03d5a]
                       cursor-pointer shadow-lg"
          >
            {/* fill on hover */}
            <span
              className="absolute inset-0 rounded-full bg-white/5
                         -translate-x-full transition-transform duration-500
                         ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                         group-hover:translate-x-0"
            />

            <span ref={ctaTextRef} className="relative z-10">
              Contactame
            </span>

            {/* arrow */}
            <span className="relative z-10 flex items-center">
              <span
                className="block h-px bg-white/60 transition-all duration-300 ease-out w-3.5 group-hover:w-5 group-hover:bg-white"
              />
              <span
                className="block w-[5px] h-[5px] border-t border-r border-white/60 rotate-45 -ml-[3px]
                           transition-transform duration-300 group-hover:translate-x-[2px] group-hover:border-white"
              />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;