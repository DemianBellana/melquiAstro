const Gallery = () => {
  const photos = [
    {
      url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1200&auto=format&fit=crop&q=80',
      caption: 'Golden hour ceremony',
      className: 'md:col-span-2 aspect-[16/10]'
    },
    {
      url: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&auto=format&fit=crop&q=80',
      caption: 'Bridal portrait',
      className: 'aspect-[3/4]'
    },
    {
      url: 'https://images.unsplash.com/photo-1464061884326-64f6d5e13e4a?w=800&auto=format&fit=crop&q=80',
      caption: 'Nova Scotia elopement',
      className: 'aspect-[3/4]'
    },
    {
      url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&auto=format&fit=crop&q=80',
      caption: 'Candid reception',
      className: 'aspect-[3/4]'
    },
    {
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&auto=format&fit=crop&q=80',
      caption: 'First dance',
      className: 'md:col-span-2 aspect-[16/10]'
    }
  ];

  return (
    <section className="px-6 py-14 md:px-16 md:py-24 bg-warm-white" id="portfolio">
      <div className="text-center mb-14">
        <span className="text-[0.62rem] font-light tracking-[0.28em] uppercase text-accent mb-6">
          Portfolio
        </span>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-light leading-[1.18] text-dark mt-4">
          Love stories<br /><em className="italic">in every frame</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
        {photos.map((photo, index) => (
          <div key={index} className={`relative overflow-hidden cursor-pointer group ${photo.className}`}>
            <img 
              src={photo.url} 
              alt={photo.caption} 
              loading="lazy"
              className="w-full h-full object-cover block transition-transform duration-700 ease-in-out brightness-[0.97] saturate-[0.92] group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-[rgba(20,17,14,0)] flex items-end p-6 transition-colors duration-300 group-hover:bg-[rgba(20,17,14,0.28)]">
              <span className="font-serif text-[1rem] italic font-light text-[rgba(255,255,255,0)] transition-colors duration-300 group-hover:text-[rgba(255,255,255,0.9)]">
                {photo.caption}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a 
          href="#" 
          className="inline-flex items-center gap-2 text-[0.68rem] font-light tracking-[0.18em] uppercase text-dark no-underline border-b border-accent pb-1 transition-all duration-200 hover:text-accent group"
        >
          View Full Gallery
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>
  );
};

export default Gallery;
