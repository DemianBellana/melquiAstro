const Services = () => {
  const offerings = [
    {
      icon: 'I',
      title: 'Weddings',
      desc: 'Full-day wedding coverage from getting ready to the last dance. My packages include a complimentary engagement session to capture your story before the big day.',
      price: '6 – 10 hours · from $3,200'
    },
    {
      icon: 'II',
      title: 'Elopements',
      desc: 'Intimate coverage for couples who want something raw and just-you. Whether secluded ceremony or small gathering — I\'m there for the essence of your day.',
      price: '1.5 – 4 hours · from $1,200'
    },
    {
      icon: 'III',
      title: 'Sessions',
      desc: 'Life\'s short and moments fly by. Couples, families, engagements — 25 professionally retouched digital images delivered via online gallery.',
      price: '1 – 2 hours · from $650'
    }
  ];

  return (
    <section className="px-6 py-16 md:px-16 md:py-28 bg-cream" id="services">
      <div className="text-center mb-16">
        <span className="text-[0.62rem] font-light tracking-[0.28em] uppercase text-accent mb-6">
          Offerings
        </span>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-light leading-[1.18] text-dark mt-4">
          How we can<br /><em className="italic">work together</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1100px] mx-auto">
        {offerings.map((service, index) => (
          <div 
            key={index} 
            className="bg-warm-white p-10 md:p-12 text-center border border-[rgba(160,140,120,0.15)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(20,17,14,0.08)]"
          >
            <div className="font-serif text-[2.8rem] italic font-light text-accent mb-6">
              {service.icon}
            </div>
            <h3 className="font-serif text-[1.4rem] font-normal text-dark mb-4">
              {service.title}
            </h3>
            <p className="text-[0.82rem] font-light leading-[1.8] text-mid mb-7">
              {service.desc}
            </p>
            <p className="text-[0.7rem] font-light tracking-[0.16em] uppercase text-accent">
              {service.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
