import { useState, useRef } from 'react';

const About = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section id="about" className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh] bg-dark overflow-hidden">
      {/* Columna Izquierda: iPhone Mockup con Video e Interfaz de Reel */}
      <div className="relative flex items-center justify-center py-20 lg:py-0 bg-[#080808]">
        <div className="relative w-[300px] md:w-[360px] aspect-[9/18.5] z-10">
          
          {/* Imagen del iPhone Mockup (Capa base) */}
          <img 
            src="/assets/iphone_mockup.png" 
            alt="iPhone Mockup" 
            className="absolute inset-0 w-full h-full object-contain z-10"
          />
          
          {/* Contenedor del Video (Capa superior, tapando la pantalla naranja) */}
          <div className="absolute top-[2.2%] left-[6.5%] right-[6.5%] bottom-[2.2%] overflow-hidden rounded-[2.5rem] md:rounded-[3.2rem] bg-black z-20 shadow-inner">
            
            {/* Video de fondo */}
            <video
              ref={videoRef}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover scale-[1.01]"
            >
              <source src="/herovideo_melisa.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Interfaz estilo Instagram Reel Overlays */}
            <div className="absolute inset-0 z-30 flex flex-col justify-between p-4 text-white pointer-events-none">
              {/* Top Icons */}
              <div className="flex justify-between items-start mt-6 px-1">
                <button 
                  onClick={toggleMute}
                  className="bg-black/30 backdrop-blur-md rounded-full p-1.5 border border-white/10 pointer-events-auto hover:bg-black/50 transition-colors"
                >
                  {isMuted ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                  )}
                </button>
                <div className="bg-black/30 backdrop-blur-md rounded-lg p-1.5 border border-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </div>
              </div>

              {/* Sidebar Interaction Icons */}
              <div className="flex flex-col items-end gap-6 mb-12 mr-1">
                <div className="flex flex-col items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                  <span className="text-[10px] font-semibold drop-shadow-lg">82.4k</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-14c.9 0 1.8.2 2.6.6L21 3l-1.4 5.5L21 11.5z"></path></svg>
                  <span className="text-[10px] font-semibold drop-shadow-lg">1.2k</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  <span className="text-[10px] font-semibold drop-shadow-lg tracking-wider">Share</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Glow efecto detrás del iPhone */}
        <div className="absolute w-[400px] h-[400px] bg-accent/10 blur-[120px] rounded-full z-0" />
      </div>

      {/* Columna Derecha: Texto descriptivo */}
      <div className="flex flex-col justify-center px-6 py-14 lg:px-24 lg:py-24 text-white bg-[#111] relative z-10">
        <span className="text-[0.62rem] font-light tracking-[0.28em] uppercase text-accent mb-6">
          Sobre Mí
        </span>
        <h2 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] font-light leading-[1.18] text-white mb-8">
          Melisa <em className="italic text-accent">Quiroga</em>
        </h2>
        
        <div className="space-y-6">
          <p className="text-[1.05rem] font-light leading-[1.8] text-[rgba(255,255,255,0.75)] max-w-[45ch]">
            Soy editora de video y creadora de contenido apasionada por contar historias visuales que conecten. Mi enfoque combina técnica cinematográfica con un ritmo dinámico adaptado a las tendencias actuales.
          </p>
          <p className="text-[1.05rem] font-light leading-[1.8] text-[rgba(255,255,255,0.75)] max-w-[45ch]">
            Desde la captura aérea con drones hasta la edición minuciosa de reels, busco siempre la excelencia visual y narrativa en cada proyecto en el que participo.
          </p>
        </div>

        <div className="mt-14 flex items-center gap-5">
          <div className="h-px w-16 bg-accent/50" />
          <span className="text-[0.7rem] font-light tracking-[0.35em] uppercase text-accent/80">
            Argentina & Worldwide
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
