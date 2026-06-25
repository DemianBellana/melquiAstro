import React from 'react';
import horizontalImg from '../assets/Horizontal.jpg';
import aboutmeImg from '../assets/aboutme.avif';

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
    <section id="contact" className="relative px-6 py-20 lg:px-16 lg:py-32 overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Background */}
        <img 
          src={aboutmeImg} 
          alt="Contact Background Mobile" 
          className="w-full h-full object-cover block lg:hidden"
        />
        {/* Desktop Background */}
        <img 
          src={horizontalImg} 
          alt="Contact Background Desktop" 
          className="w-full h-full object-cover hidden lg:block"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-[800px] mx-auto text-center w-full flex flex-col items-center justify-center">
        <div className="text-white flex flex-col items-center">
          <span className="text-[0.95rem] font-light tracking-[0.28em] uppercase text-white/70 mb-6 block">
            Contacto
          </span>
          <h2 className="font-serif text-[clamp(2.5rem,4vw,3.8rem)] font-light leading-[1.12] text-white mt-4 mb-6 text-center">
            ¿Hablamos sobre<br /><em className="italic text-[#D8B7B0]">tu próximo proyecto?</em>
          </h2>
          <p className="text-[1rem] font-light leading-[1.8] text-white/80 max-w-[42ch] mb-10 text-center">
            Cuéntame tu idea y buscaremos la mejor forma de llevarla a cabo. Respondo en menos de 24 horas.
          </p>

          <div className="flex flex-col gap-8 justify-center items-center mt-6">
            <div className="text-[0.9rem] font-light text-white/70 tracking-[0.05em] text-center">
              <strong className="text-white font-normal block mb-1 text-[0.68rem] tracking-[0.18em] uppercase opacity-50">
                Email
              </strong>
              <a href="mailto:melisaquiroga@gmail.com" className="hover:text-[#D8B7B0] transition-colors text-xl">melisaquiroga@gmail.com</a>
            </div>

            <a
              href="mailto:melisaquiroga@gmail.com"
              className="group relative overflow-hidden flex items-center gap-3
                         bg-[#ff4d6d] border border-[#ff4d6d] rounded-full
                         px-8 py-3.5
                         font-sans text-[10px] tracking-[0.22em] uppercase text-white
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

              <span className="relative z-10">
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
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
