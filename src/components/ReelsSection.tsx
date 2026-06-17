const ReelsSection = () => {
  return (
    <section id="reels" className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] bg-warm-white">
      <div className="flex flex-col justify-center px-6 py-14 lg:px-20 lg:py-24 bg-cream order-2 lg:order-1">
        <span className="text-[0.62rem] font-light tracking-[0.28em] uppercase text-accent mb-6">
          01. Edición de Reels
        </span>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-light leading-[1.18] text-dark mb-6">
          Contenido que<br /><em className="italic">atrapa en segundos</em>
        </h2>
        <p className="text-[0.88rem] font-light leading-[1.85] text-mid max-w-[42ch] mb-9">
          Edición dinámica pensada para el formato vertical. Transiciones fluidas, ritmo visual y storytelling condensado para maximizar el engagement en plataformas como Instagram y TikTok.
        </p>
        <p className="text-[0.88rem] font-light leading-[1.85] text-mid max-w-[42ch] mb-9">
          Esta pieza de 60 segundos recopila mis mejores trabajos, demostrando mi capacidad para captar la atención y contar historias potentes en formatos breves.
        </p>
      </div>
      <div className="relative bg-dark order-1 lg:order-2 flex items-center justify-center min-h-[600px] overflow-hidden">
        <video
          controls
          className="w-full h-full object-cover lg:absolute lg:inset-0"
          poster="/assets/photo/sports_1.avif"
        >
          <source src="/assets/video/reels/reel_principal.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default ReelsSection;
