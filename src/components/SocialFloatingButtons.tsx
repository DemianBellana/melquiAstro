import React, { useState, useEffect } from 'react';

const InstagramIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="2" y="2" width="20" height="20" rx="5.5"/>
    <circle cx="12" cy="12" r="4.5"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);

const TikTokIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.93a8.2 8.2 0 0 0 4.78 1.52V7a4.85 4.85 0 0 1-1.01-.31z"/>
  </svg>
);

const SocialFloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isInFooter, setIsInFooter] = useState(false);

  useEffect(() => {
    const heroElement = document.getElementById('inicio');
    if (!heroElement) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.5, // Aparece cuando el Hero se ha scrolleado un 50% fuera de vista
      }
    );

    observer.observe(heroElement);
    return () => observer.unobserve(heroElement);
  }, []);

  useEffect(() => {
    const footerElement = document.querySelector('footer');
    if (!footerElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInFooter(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: '0px 0px 0px 0px',
      }
    );

    observer.observe(footerElement);

    return () => {
      observer.unobserve(footerElement);
    };
  }, []);

  if (!isVisible) return null;

  const solapaBgColor = isInFooter ? '#1a1714' : '#707f6a';

  return (
    <>
      {/* Versión Desktop: Siempre visible en md+, oculta en móvil */}
      <ul className="hidden md:flex social-floating-list animate-fade-in-up">
        {[
          {
            href: 'https://www.instagram.com/melquigrafias/',
            label: 'Instagram',
            icon: <InstagramIcon size={26} />,
            i: '#E1306C',
            j: '#bc1888'
          },
          {
            href: 'https://www.tiktok.com/@meelqui',
            label: 'TikTok',
            icon: <TikTokIcon size={26} />,
            i: '#000000',
            j: '#444444'
          },
        ].map(({ href, label, icon, i, j }) => (
          <li
            key={label}
            style={{ '--i': i, '--j': j } as React.CSSProperties}
            onClick={() => window.open(href, '_blank', 'noopener,noreferrer')}
          >
            <span className="icon">{icon}</span>
            <span className="title">{label}</span>
          </li>
        ))}
      </ul>

      {/* Versión Móvil: Visible en móvil, oculta en md+ (Desplegable tras solapa vertical) */}
      <div className="flex md:hidden fixed right-0 top-1/2 -translate-y-1/2 items-center justify-end z-[99] h-[130px] w-[95px] select-none animate-fade-in-up">
        {/* Menú de botones */}
        <div 
          className={`absolute right-[31px] flex flex-col gap-3 transition-all duration-300 ${
            isOpen 
              ? 'translate-x-0 opacity-100 pointer-events-auto' 
              : 'translate-x-12 opacity-0 pointer-events-none'
          }`}
        >
          <a
            href="https://www.instagram.com/melquigrafias/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-white border-2 border-white shadow-[0_10px_25px_rgba(0,0,0,0.2)] transition-transform duration-200 active:scale-95"
            style={{ backgroundColor: '#e4405f' }}
          >
            <InstagramIcon size={22} />
          </a>
          <a
            href="https://www.tiktok.com/@meelqui"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-white border-2 border-white shadow-[0_10px_25px_rgba(0,0,0,0.2)] transition-transform duration-200 active:scale-95"
            style={{ backgroundColor: '#000000' }}
          >
            <TikTokIcon size={22} />
          </a>
        </div>

        {/* Solapita Vertical */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-0 flex flex-col items-center justify-center gap-2 py-3.5 px-1.5 text-[#E8E2D8] border-l border-y border-white/20 rounded-l-xl shadow-lg focus:outline-none active:opacity-90"
          style={{ 
            backgroundColor: solapaBgColor,
            transition: 'background-color 0.6s ease-in-out, color 0.6s ease-in-out'
          }}
        >
          <span className="[writing-mode:vertical-lr] rotate-180 text-[8.5px] font-semibold tracking-[0.25em] text-[#E8E2D8]/95">
            REDES
          </span>
          <svg 
            className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth="3"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default SocialFloatingButtons;
