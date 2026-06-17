const VideoWorkSection = () => {
  const categories = [
    { 
      name: 'Social Media', 
      desc: 'Contenido optimizado para redes sociales.',
      video: '/assets/video/work/social_media_1.mp4'
    },
    { 
      name: 'Talking Head', 
      desc: 'Entrevistas y contenido directo a cámara.',
      video: '/assets/video/work/talking_head_1.mp4'
    },
    { 
      name: 'Drone', 
      desc: 'Tomas aéreas cinematográficas.',
      video: '/assets/video/work/drone_1.mp4'
    },
    { 
      name: 'Events', 
      desc: 'Cobertura y edición de eventos en vivo.',
      video: '/assets/video/work/event_1.mov'
    },
  ];

  return (
    <section id="video-work" className="px-6 py-16 md:px-16 md:py-28 bg-warm-white">
      <div className="text-center mb-16">
        <span className="text-[0.62rem] font-light tracking-[0.28em] uppercase text-accent mb-6">
          02. Video Work
        </span>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-light leading-[1.18] text-dark mt-4">
          Categorías y<br /><em className="italic">especialidades</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1100px] mx-auto">
        {categories.map((cat, index) => (
          <div 
            key={index} 
            className="group relative overflow-hidden bg-cream p-6 md:p-10 border border-[rgba(160,140,120,0.15)] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(20,17,14,0.08)]"
          >
            <span className="font-serif text-[2rem] italic font-light text-accent block mb-4">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="font-serif text-[1.8rem] font-normal text-dark mb-4">
              {cat.name}
            </h3>
            <p className="text-[0.88rem] font-light leading-[1.8] text-mid mb-8">
              {cat.desc}
            </p>
            <div className="relative aspect-video bg-dark overflow-hidden">
              <video 
                controls
                className="w-full h-full object-cover"
              >
                <source src={cat.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoWorkSection;
