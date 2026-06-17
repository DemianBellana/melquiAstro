const PhotographySection = () => {
  const photos = [
    {
      url: '/assets/photo/sports_1.avif',
      category: 'Sports',
      className: 'md:col-span-2 aspect-[16/10]'
    },
    {
      url: '/assets/photo/portraits_1.avif',
      category: 'Portraits',
      className: 'aspect-[3/4]'
    },
    {
      url: '/assets/photo/travel_1.avif',
      category: 'Travel',
      className: 'aspect-[3/4]'
    },
    {
      url: '/assets/photo/events_1.avif',
      category: 'Events',
      className: 'aspect-[3/4]'
    },
    {
      url: '/assets/photo/travel_1.avif', // Reutilizando para completar el grid
      category: 'Lifestyle',
      className: 'md:col-span-2 aspect-[16/10]'
    }
  ];

  return (
    <section id="photography" className="px-6 py-16 md:px-16 md:py-28 bg-cream">
      <div className="text-center mb-16">
        <span className="text-[0.62rem] font-light tracking-[0.28em] uppercase text-accent mb-6">
          03. Photography
        </span>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-light leading-[1.18] text-dark mt-4">
          Capturando la esencia<br /><em className="italic">en cada disparo</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[1200px] mx-auto">
        {photos.map((photo, index) => (
          <div key={index} className={`relative overflow-hidden group ${photo.className}`}>
            <img 
              src={photo.url} 
              alt={photo.category} 
              className="w-full h-full object-cover block transition-transform duration-700 ease-in-out brightness-[0.95] group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="font-serif text-white text-xl italic tracking-widest">
                {photo.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotographySection;
