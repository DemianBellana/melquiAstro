const Footer = () => {
  return (
    <footer className="bg-dark text-[rgba(255,255,255,0.45)] px-6 py-16 md:px-16 md:py-20">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <div>
          <div className="font-serif text-[1.3rem] font-light italic text-white mb-3">
            Melisa Quiroga
          </div>
          <p className="text-[0.72rem] font-extralight tracking-[0.12em] leading-[1.7]">
            Video Editor & Content Creator<br />
            Historias que impactan.<br />
            Argentina & Worldwide.
          </p>
          <div className="flex gap-5 mt-6">
            <a href="#" className="text-[0.7rem] font-light tracking-[0.15em] uppercase text-[rgba(255,255,255,0.4)] no-underline transition-colors duration-200 hover:text-accent">
              Instagram
            </a>
            <a href="#" className="text-[0.7rem] font-light tracking-[0.15em] uppercase text-[rgba(255,255,255,0.4)] no-underline transition-colors duration-200 hover:text-accent">
              Facebook
            </a>
          </div>
        </div>
        
        <div>
          <p className="text-[0.62rem] font-light tracking-[0.22em] uppercase text-accent mb-5">
            Navegación
          </p>
          <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
            {[
              { name: 'Inicio', href: '#inicio' },
              { name: 'Reels', href: '#reels' },
              { name: 'Video Work', href: '#video-work' },
              { name: 'Fotografía', href: '#photography' },
              { name: 'Sobre Mí', href: '#about' },
              { name: 'Contacto', href: '#contact' }
            ].map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-[0.8rem] font-extralight text-[rgba(255,255,255,0.45)] no-underline transition-colors duration-200 hover:text-white">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[0.62rem] font-light tracking-[0.22em] uppercase text-accent mb-5">
            Especialidades
          </p>
          <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
            {['Edición de Reels', 'Storytelling', 'Drone Work', 'Photography'].map((link) => (
              <li key={link}>
                <a href="#" className="text-[0.8rem] font-extralight text-[rgba(255,255,255,0.45)] no-underline transition-colors duration-200 hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-[rgba(255,255,255,0.05)] text-center text-[0.65rem] font-extralight tracking-[0.14em] text-[rgba(255,255,255,0.25)]">
        © 2025 Melisa Quiroga · Video Editor & Content Creator · All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
