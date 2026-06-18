import React, { useState } from 'react';

const Contact = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <section id="contact" className="bg-warm-white px-6 py-16 md:px-16 md:py-28">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div>
          <span className="text-[0.62rem] font-light tracking-[0.28em] uppercase text-accent mb-6">
            Contacto
          </span>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-light leading-[1.18] text-dark mt-4 mb-4">
            ¿Hablamos sobre<br /><em className="italic">tu próximo proyecto?</em>
          </h2>
          <p className="text-[0.88rem] font-light leading-[1.85] text-mid max-w-[42ch] mb-10">
            Cuéntame tu idea y buscaremos la mejor forma de llevarla a cabo. Respondo en menos de 24 horas.
          </p>

          <div className="flex flex-col gap-6 mt-10">
            <div className="text-[0.82rem] font-light text-mid tracking-[0.05em]">
              <strong className="text-dark font-normal block mb-1 text-[0.68rem] tracking-[0.18em] uppercase">
                Email
              </strong>
              <a href="mailto:melisaquiroga@gmail.com" className="hover:text-accent transition-colors">melisaquiroga@gmail.com</a>
            </div>
            <div className="text-[0.82rem] font-light text-mid tracking-[0.05em]">
              <strong className="text-dark font-normal block mb-1 text-[0.68rem] tracking-[0.18em] uppercase">
                WhatsApp
              </strong>
              <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">+54 9 11 XXXX-XXXX</a>
            </div>
          </div>

          {/* Botones redes sociales */}
          <div className="flex flex-wrap gap-3 mt-10">
            {[
              {
                href: 'https://instagram.com/melisaquiroga',
                label: 'Instagram',
                icon: (
                  <svg className="w-3.5 h-3.5 flex-shrink-0 relative z-10 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-[8deg] group-hover:scale-125" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <rect x="2" y="2" width="20" height="20" rx="5.5"/>
                    <circle cx="12" cy="12" r="4.5"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                  </svg>
                ),
              },
              {
                href: 'https://tiktok.com/@melisaquiroga',
                label: 'TikTok',
                icon: (
                  <svg className="w-3.5 h-3.5 flex-shrink-0 relative z-10 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-[8deg] group-hover:scale-125" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.93a8.2 8.2 0 0 0 4.78 1.52V7a4.85 4.85 0 0 1-1.01-.31z"/>
                  </svg>
                ),
              },
              {
                href: 'https://facebook.com/melisaquiroga',
                label: 'Facebook',
                icon: (
                  <svg className="w-3.5 h-3.5 flex-shrink-0 relative z-10 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-[8deg] group-hover:scale-125" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z"/>
                  </svg>
                ),
              },
            ].map(({ href, label, icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className={`group relative flex items-center gap-2.5 px-6 py-3 border overflow-hidden rounded-full
                  text-[0.65rem] font-light tracking-[0.22em] uppercase transition-all duration-300
                  shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)]
                  ${label === 'Instagram' ? 'max-md:text-cream max-md:border-transparent max-md:shadow-[0_8px_20px_rgba(225,48,108,0.2)]' : ''}
                  ${label === 'TikTok' ? 'max-md:text-cream max-md:border-transparent max-md:shadow-[0_8px_20px_rgba(0,0,0,0.2)]' : ''}
                  ${label === 'Facebook' ? 'max-md:text-cream max-md:border-transparent max-md:shadow-[0_8px_20px_rgba(24,119,242,0.2)]' : ''}
                  md:border-[rgba(90,82,72,0.25)] md:bg-white/60 md:text-mid md:hover:text-cream md:hover:border-transparent`}
              >
                {/* wipe fill */}
                <span className={`absolute inset-0 transition-transform duration-[380ms] ease-[cubic-bezier(0.76,0,0.24,1)] rounded-full
                  max-md:translate-y-0 md:translate-y-full md:group-hover:translate-y-0
                  ${label === 'Instagram' ? 'bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888]' : ''}
                  ${label === 'TikTok' ? 'bg-[#010101]' : ''}
                  ${label === 'Facebook' ? 'bg-[#1877f2]' : ''}
                `} />
                
                {/* Icon wrapper to handle mobile active state */}
                <div className="relative z-10 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] 
                  max-md:-rotate-[8deg] max-md:scale-125 md:group-hover:-rotate-[8deg] md:group-hover:scale-125">
                  {icon}
                </div>

                <span className="relative z-10">{label}</span>
                <span className="relative z-10 text-[0.7rem] opacity-0 -translate-x-1 translate-y-1 
                  max-md:opacity-100 max-md:translate-x-0 max-md:translate-y-0
                  md:group-hover:opacity-100 md:group-hover:translate-x-0 md:group-hover:translate-y-0 transition-all duration-300 delay-75">↗</span>
              </a>
            ))}
          </div>
        </div>

        <form className="flex flex-col gap-8 bg-cream p-8 md:p-12 border border-[rgba(160,140,120,0.15)] shadow-[0_20px_40px_rgba(0,0,0,0.03)]" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2 group">
              <label className="text-[0.62rem] font-medium tracking-[0.2em] uppercase text-accent/80 transition-colors group-focus-within:text-accent">Nombre</label>
              <input 
                type="text" 
                placeholder="Tu nombre completo"
                className="bg-transparent border-b border-[rgba(90,82,72,0.2)] py-2.5 font-sans text-[0.9rem] font-light text-dark outline-none transition-all focus:border-accent placeholder:text-mid/30" 
              />
            </div>
            <div className="flex flex-col gap-2 group">
              <label className="text-[0.62rem] font-medium tracking-[0.2em] uppercase text-accent/80 transition-colors group-focus-within:text-accent">Email</label>
              <input 
                type="email" 
                placeholder="tu@email.com"
                className="bg-transparent border-b border-[rgba(90,82,72,0.2)] py-2.5 font-sans text-[0.9rem] font-light text-dark outline-none transition-all focus:border-accent placeholder:text-mid/30" 
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-2 group relative">
            <label className="text-[0.62rem] font-medium tracking-[0.2em] uppercase text-accent/80 transition-colors group-focus-within:text-accent">Tipo de Proyecto</label>
            <div className="relative">
              <select className="w-full bg-transparent border-b border-[rgba(90,82,72,0.2)] py-2.5 font-sans text-[0.9rem] font-light text-dark outline-none focus:border-accent appearance-none rounded-none cursor-pointer">
                <option value="" className="bg-cream">Selecciona una opción...</option>
                <option className="bg-cream">Edición de Reels</option>
                <option className="bg-cream">Video Institucional / Storytelling</option>
                <option className="bg-cream">Drone Work</option>
                <option className="bg-cream">Fotografía</option>
                <option className="bg-cream">Otro</option>
              </select>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-accent/50">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 group">
            <label className="text-[0.62rem] font-medium tracking-[0.2em] uppercase text-accent/80 transition-colors group-focus-within:text-accent">Mensaje</label>
            <textarea 
              placeholder="¿En qué puedo ayudarte?"
              className="bg-transparent border-b border-[rgba(90,82,72,0.2)] py-2.5 font-sans text-[0.9rem] font-light text-dark outline-none transition-all focus:border-accent resize-none min-h-[100px] placeholder:text-mid/30" 
            />
          </div>

          <button 
            type="submit" 
            className={`group relative overflow-hidden font-sans text-[0.7rem] font-medium tracking-[0.25em] uppercase px-12 py-4 transition-all duration-500 self-start mt-4 ${
              isSent ? 'bg-accent text-cream' : 'bg-dark text-cream hover:bg-accent'
            }`}
            disabled={isSent}
          >
            <span className="relative z-10">{isSent ? 'Mensaje Enviado ✓' : 'Enviar Mensaje'}</span>
            {!isSent && (
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
