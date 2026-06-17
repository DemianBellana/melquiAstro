const Testimonials = () => {
  const reviews = [
    {
      text: '"Saffron is an incredible photographer!! Having her take our wedding photos was the best decision we could\'ve made. Not only are her photos flawless, but she\'s fun and down-to-earth. I would recommend her to anyone!"',
      author: 'Amanda & James · Married 2024'
    },
    {
      text: '"We couldn\'t be happier with our wedding photos. She captured every moment beautifully — not just us, but the joy and emotion of our guests. Saffron went above and beyond to make sure every special moment was preserved."',
      author: 'Claire & Thomas · Married 2023'
    },
    {
      text: '"I am so glad we chose Saffron! She exceeded our already-high expectations. Her thoughtfulness, creativity, and passion are evident in the way she works. If I could do it all over again, I wouldn\'t change a thing!"',
      author: 'Sophie & Marc · Married 2024'
    },
    {
      text: '"Choosing a photographer is stressful — it\'s a big expense and you want to get it right! Choose Saffron. She will not disappoint. She brought our vision to life in ways we never expected."',
      author: 'Brooke & Daniel · Married 2023'
    }
  ];

  return (
    <section className="px-6 py-16 md:px-16 md:py-28 bg-warm-white text-center">
      <span className="text-[0.62rem] font-light tracking-[0.28em] uppercase text-accent mb-6">
        Kind Words
      </span>
      <h2 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-light leading-[1.18] text-dark mt-4">
        <em className="italic">What couples say</em>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1000px] mx-auto mt-14">
        {reviews.map((review, index) => (
          <div key={index} className="bg-cream p-11 text-left border-l-2 border-accent">
            <p className="font-serif text-[1.05rem] italic font-light leading-[1.75] text-mid mb-6">
              {review.text}
            </p>
            <span className="text-[0.68rem] font-light tracking-[0.2em] uppercase text-accent">
              — {review.author}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
