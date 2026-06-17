const Intro = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
      <div 
        className="bg-center bg-cover min-h-[45vw] lg:min-h-full"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1000&auto=format&fit=crop&q=80')` }}
      />
      <div className="flex flex-col justify-center px-6 py-14 lg:px-20 lg:py-24 bg-cream">
        <span className="text-[0.62rem] font-light tracking-[0.28em] uppercase text-accent mb-6">
          The Philosophy
        </span>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-light leading-[1.18] text-dark mb-6">
          Real moments,<br /><em className="italic">unscripted love</em>
        </h2>
        <p className="text-[0.88rem] font-light leading-[1.85] text-mid max-w-[42ch] mb-9">
          I live for the moments that can't be planned — the laughs that come out of nowhere, the quiet glances, the little tiny things that make your story yours. Every wedding I photograph leaves a piece of my heart behind.
        </p>
        <p className="text-[0.88rem] font-light leading-[1.85] text-mid max-w-[42ch] mb-9">
          Your wedding photos should do more than look beautiful — they should tell the true story of your day. I approach your wedding as though I'm one of your guests, documenting naturally, candidly, and full of emotion.
        </p>
        <a 
          href="#about" 
          className="inline-flex items-center gap-2 text-[0.68rem] font-light tracking-[0.18em] uppercase text-dark no-underline border-b border-accent pb-1 transition-all duration-200 hover:text-accent group"
        >
          Meet Saffron
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>
  );
};

export default Intro;
