const Hero = () => {
  return (
    <section id="inicio" className="h-screen relative flex items-center justify-center overflow-hidden">
      {/* Video Background - Reel Corto Automático */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/herovideo_melisa.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay elegante */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="relative z-20 text-center text-white px-4">
        <p className="font-sans text-[0.68rem] font-light tracking-[0.28em] uppercase text-[rgba(255,255,255,0.75)] mb-6 animate-fadeUp">
          Melisa Quiroga
        </p>
        <h1 className="font-serif text-[clamp(3rem,7vw,6.5rem)] font-light italic leading-[1.08] mb-6 animate-fadeUp delay-150">
          Video Editor &<br />Content Creator
        </h1>
        <p className="font-sans text-[0.75rem] font-extralight tracking-[0.22em] uppercase text-[rgba(255,255,255,0.7)] mb-11 animate-fadeUp delay-300">
          Dinámica · Creatividad · Historias que impactan
        </p>
        <a 
          href="#reels" 
          className="inline-block text-[0.68rem] font-light tracking-[0.2em] uppercase text-white border border-[rgba(255,255,255,0.55)] px-10 py-4 no-underline transition-all duration-300 hover:bg-[rgba(255,255,255,0.12)] hover:border-[rgba(255,255,255,0.8)] animate-fadeUp delay-450"
        >
          Ver Portfolio
        </a>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 animate-fadeUp delay-700">
        <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[rgba(255,255,255,0.55)]">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[rgba(255,255,255,0.5)] to-transparent animate-scrollDown" />
      </div>
    </section>
  );
};

export default Hero;
