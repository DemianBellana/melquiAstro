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
            <div className="text-[0.82rem] font-light text-mid tracking-[0.05em]">
              <strong className="text-dark font-normal block mb-1 text-[0.68rem] tracking-[0.18em] uppercase">
                Instagram
              </strong>
              <a href="https://instagram.com/melisaquiroga" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">@melisaquiroga</a>
            </div>
          </div>
        </div>

        <form className="flex flex-col gap-6 bg-cream p-8 md:p-12 border border-[rgba(160,140,120,0.1)] shadow-sm" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.62rem] font-light tracking-[0.2em] uppercase text-light">Nombre</label>
              <input type="text" className="bg-transparent border-none border-b border-[rgba(90,82,72,0.3)] py-2 font-sans text-[0.88rem] font-light text-dark outline-none focus:border-accent" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.62rem] font-light tracking-[0.2em] uppercase text-light">Email</label>
              <input type="email" className="bg-transparent border-none border-b border-[rgba(90,82,72,0.3)] py-2 font-sans text-[0.88rem] font-light text-dark outline-none focus:border-accent" />
            </div>
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.62rem] font-light tracking-[0.2em] uppercase text-light">Tipo de Proyecto</label>
            <select className="bg-transparent border-none border-b border-[rgba(90,82,72,0.3)] py-2 font-sans text-[0.88rem] font-light text-dark outline-none focus:border-accent appearance-none rounded-none">
              <option value="">Selecciona uno...</option>
              <option>Edición de Reels</option>
              <option>Video Institucional / Storytelling</option>
              <option>Drone Work</option>
              <option>Fotografía</option>
              <option>Otro</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[0.62rem] font-light tracking-[0.2em] uppercase text-light">Mensaje</label>
            <textarea className="bg-transparent border-none border-b border-[rgba(90,82,72,0.3)] py-2 font-sans text-[0.88rem] font-light text-dark outline-none focus:border-accent resize-none min-h-[80px]" />
          </div>

          <button 
            type="submit" 
            className={`font-sans text-[0.68rem] font-light tracking-[0.2em] uppercase px-11 py-4 border-none transition-all duration-300 self-start mt-4 ${
              isSent ? 'bg-accent text-cream cursor-default' : 'bg-dark text-cream hover:bg-accent'
            }`}
            disabled={isSent}
          >
            {isSent ? 'Mensaje Enviado ✓' : 'Enviar Mensaje'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
