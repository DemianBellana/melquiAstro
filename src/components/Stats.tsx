const Stats = () => {
  const stats = [
    { number: '5+', label: 'Years in business' },
    { number: '200+', label: 'Weddings captured' },
    { number: '∞', label: 'Memories preserved' },
  ];

  return (
    <section className="bg-dark px-6 py-14 md:px-16 md:py-20 grid grid-cols-1 md:grid-cols-3 text-center gap-10">
      {stats.map((stat, index) => (
        <div key={index}>
          <div className="font-serif text-[4rem] font-light text-white leading-none">
            {stat.number}
          </div>
          <p className="text-[0.68rem] font-extralight tracking-[0.22em] uppercase text-[rgba(255,255,255,0.45)] mt-3">
            {stat.label}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
