import React, { useState } from 'react';
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

const FacebookIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z"/>
  </svg>
);

const Contact = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <section id="contact" className="relative px-6 py-20 md:px-16 md:py-32 overflow-hidden min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={horizontalImg} 
          alt="Contact Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">
        <div className="text-white">
          <span className="text-[0.62rem] font-light tracking-[0.28em] uppercase text-white/70 mb-6 block">
            Contacto
          </span>
          <h2 className="font-serif text-[clamp(2.5rem,4vw,3.8rem)] font-light leading-[1.12] text-white mt-4 mb-6">
            ¿Hablamos sobre<br /><em className="italic text-[#D8B7B0]">tu próximo proyecto?</em>
          </h2>
          <p className="text-[1rem] font-light leading-[1.8] text-white/80 max-w-[42ch] mb-10">
            Cuéntame tu idea y buscaremos la mejor forma de llevarla a cabo. Respondo en menos de 24 horas.
          </p>

          <div className="flex flex-col gap-8 mt-12">
            <div className="text-[0.9rem] font-light text-white/70 tracking-[0.05em]">
              <strong className="text-white font-normal block mb-1 text-[0.68rem] tracking-[0.18em] uppercase opacity-50">
                Email
              </strong>
              <a href="mailto:melisaquiroga@gmail.com" className="hover:text-[#D8B7B0] transition-colors text-lg">melisaquiroga@gmail.com</a>
            </div>
            <div className="text-[0.9rem] font-light text-white/70 tracking-[0.05em]">
              <strong className="text-white font-normal block mb-1 text-[0.68rem] tracking-[0.18em] uppercase opacity-50">
                WhatsApp
              </strong>
              <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" className="hover:text-[#D8B7B0] transition-colors text-lg">+54 9 11 XXXX-XXXX</a>
            </div>
          </div>

          {/* Redes sociales - Desktop Version */}
          <ul className="social-list-desktop hidden lg:flex">
            {[
              {
                href: 'https://instagram.com/melisaquiroga',
                label: 'Instagram',
                icon: <InstagramIcon size={28} />,
                i: '#E1306C', // More accurate brand pink/red
                j: '#bc1888'
              },
              {
                href: 'https://tiktok.com/@melisaquiroga',
                label: 'TikTok',
                icon: <TikTokIcon size={28} />,
                i: '#000000',
                j: '#444444'
              },
              {
                href: 'https://facebook.com/melisaquiroga',
                label: 'Facebook',
                icon: <FacebookIcon size={28} />,
                i: '#1877f2',
                j: '#2F80ED'
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
          <ul className="social-list-mobile flex lg:hidden">
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
              {
                href: 'https://facebook.com/melisaquiroga',
                label: 'Facebook',
                icon: <FacebookIcon size={28} />,
                color: '#3b5998'
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

          <form className="flex flex-col gap-8 bg-white/10 backdrop-blur-md p-8 md:p-12 border border-white/10 shadow-2xl mt-12 lg:mt-0" onSubmit={handleSubmit}>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2 group">
              <label className="text-[0.62rem] font-medium tracking-[0.2em] uppercase text-white/60 transition-colors group-focus-within:text-[#D8B7B0]">Nombre</label>
              <input 
                type="text" 
                placeholder="Tu nombre completo"
                className="bg-transparent border-b border-white/20 py-2.5 font-sans text-[0.9rem] font-light text-white outline-none transition-all focus:border-[#D8B7B0] placeholder:text-white/20" 
              />
            </div>
            <div className="flex flex-col gap-2 group">
              <label className="text-[0.62rem] font-medium tracking-[0.2em] uppercase text-white/60 transition-colors group-focus-within:text-[#D8B7B0]">Email</label>
              <input 
                type="email" 
                placeholder="tu@email.com"
                className="bg-transparent border-b border-white/20 py-2.5 font-sans text-[0.9rem] font-light text-white outline-none transition-all focus:border-[#D8B7B0] placeholder:text-white/20" 
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-2 group relative">
            <label className="text-[0.62rem] font-medium tracking-[0.2em] uppercase text-white/60 transition-colors group-focus-within:text-[#D8B7B0]">Tipo de Proyecto</label>
            <div className="relative">
              <select className="w-full bg-transparent border-b border-white/20 py-2.5 font-sans text-[0.9rem] font-light text-white outline-none focus:border-[#D8B7B0] appearance-none rounded-none cursor-pointer">
                <option value="" className="bg-[#1a1a1a]">Selecciona una opción...</option>
                <option className="bg-[#1a1a1a]">Edición de Reels</option>
                <option className="bg-[#1a1a1a]">Video Institucional / Storytelling</option>
                <option className="bg-[#1a1a1a]">Drone Work</option>
                <option className="bg-[#1a1a1a]">Fotografía</option>
                <option className="bg-[#1a1a1a]">Otro</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2 group">
            <label className="text-[0.62rem] font-medium tracking-[0.2em] uppercase text-white/60 transition-colors group-focus-within:text-[#D8B7B0]">Mensaje</label>
            <textarea 
              placeholder="¿En qué puedo ayudarte?"
              className="bg-transparent border-b border-white/20 py-2.5 font-sans text-[0.9rem] font-light text-white outline-none transition-all focus:border-[#D8B7B0] resize-none min-h-[100px] placeholder:text-white/20" 
            />
          </div>

          <button 
            type="submit" 
            className={`group relative overflow-hidden font-sans text-[0.7rem] font-medium tracking-[0.25em] uppercase px-12 py-4 transition-all duration-500 self-start mt-4 ${
              isSent ? 'bg-[#D8B7B0] text-black' : 'bg-white text-black hover:bg-[#D8B7B0]'
            }`}
            disabled={isSent}
          >
            <span className="relative z-10">{isSent ? 'Mensaje Enviado ✓' : 'Enviar Mensaje'}</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
