import React from 'react';
import horizontalImg from '../assets/Horizontal.jpg';

const InstagramIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="2" y="2" width="20" height="20" rx="5.5"/>
    <circle cx="12" cy="12" r="4.5"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);

const TikTokIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.93a8.2 8.2 0 0 0 4.78 1.52V7a4.85 4.85 0 0 1-1.01-.31z"/>
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="relative px-6 py-20 md:px-16 md:py-32 overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={horizontalImg} 
          alt="Contact Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-[800px] mx-auto text-center w-full flex flex-col items-center justify-center">
        <div className="text-white flex flex-col items-center">
          <span className="text-[0.62rem] font-light tracking-[0.28em] uppercase text-white/70 mb-6 block">
            Contacto
          </span>
          <h2 className="font-serif text-[clamp(2.5rem,4vw,3.8rem)] font-light leading-[1.12] text-white mt-4 mb-6 text-center">
            ¿Hablamos sobre<br /><em className="italic text-[#D8B7B0]">tu próximo proyecto?</em>
          </h2>
          <p className="text-[1rem] font-light leading-[1.8] text-white/80 max-w-[42ch] mb-10 text-center">
            Cuéntame tu idea y buscaremos la mejor forma de llevarla a cabo. Respondo en menos de 24 horas.
          </p>

          <div className="flex flex-col gap-8 justify-center items-center mt-6 mb-12">
            <div className="text-[0.9rem] font-light text-white/70 tracking-[0.05em] text-center">
              <strong className="text-white font-normal block mb-1 text-[0.68rem] tracking-[0.18em] uppercase opacity-50">
                Email
              </strong>
              <a href="mailto:melisaquiroga@gmail.com" className="hover:text-[#D8B7B0] transition-colors text-xl">melisaquiroga@gmail.com</a>
            </div>
            <div className="text-[0.9rem] font-light text-white/70 tracking-[0.05em] text-center">
              <strong className="text-white font-normal block mb-1 text-[0.68rem] tracking-[0.18em] uppercase opacity-50">
                WhatsApp
              </strong>
              <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" className="hover:text-[#D8B7B0] transition-colors text-xl">+54 9 11 XXXX-XXXX</a>
            </div>
          </div>

          {/* Redes sociales - Desktop Version */}
          <ul className="social-list-desktop hidden lg:flex justify-center gap-6">
            {[
              {
                href: 'https://instagram.com/melisaquiroga',
                label: 'Instagram',
                icon: <InstagramIcon size={28} />,
                i: '#E1306C',
                j: '#bc1888'
              },
              {
                href: 'https://tiktok.com/@melisaquiroga',
                label: 'TikTok',
                icon: <TikTokIcon size={28} />,
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

          {/* Redes sociales - Mobile Version (Circular & Filled) */}
          <ul className="social-list-mobile flex lg:hidden justify-center gap-4">
            {[
              {
                href: 'https://instagram.com/melisaquiroga',
                label: 'Instagram',
                icon: <InstagramIcon size={28} />,
                color: '#e4405f'
              },
              {
                href: 'https://tiktok.com/@melisaquiroga',
                label: 'TikTok',
                icon: <TikTokIcon size={28} />,
                color: '#000000'
              },
            ].map(({ href, label, icon, color }) => (
              <li key={label}>
                <a 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-circle"
                  style={{ '--i': color } as React.CSSProperties}
                >
                  <span className="icon">{icon}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
