const About = () => {
  return (
    <section id="about" className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] bg-dark">
      <div 
        className="bg-center bg-cover min-h-[50vw] lg:min-h-full brightness-[0.8] grayscale-[0.2]"
        style={{ backgroundImage: `url('/assets/about/retrato.avif')` }}
      />
      <div className="flex flex-col justify-center px-6 py-14 lg:px-20 lg:py-24 text-white bg-[#111]">
        <span className="text-[0.62rem] font-light tracking-[0.28em] uppercase text-accent mb-6">
          Sobre Mí
        </span>
        <h2 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] font-light leading-[1.18] text-white mb-8">
          Melisa <em className="italic text-accent">Quiroga</em>
        </h2>
        <div className="space-y-6">
          <p className="text-[1rem] font-light leading-[1.8] text-[rgba(255,255,255,0.7)] max-w-[45ch]">
            Soy editora de video y creadora de contenido apasionada por contar historias visuales que conecten. Mi enfoque combina técnica cinematográfica con un ritmo dinámico adaptado a las tendencias actuales.
          </p>
          <p className="text-[1rem] font-light leading-[1.8] text-[rgba(255,255,255,0.7)] max-w-[45ch]">
            Desde la captura aérea con drones hasta la edición minuciosa de reels, busco siempre la excelencia visual y narrativa en cada proyecto en el que participo.
          </p>
        </div>
        <div className="mt-12 flex items-center gap-4">
          <div className="h-px w-12 bg-accent" />
          <span className="text-[0.68rem] font-light tracking-[0.3em] uppercase text-accent">
            Basada en Argentina & Worldwide
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
