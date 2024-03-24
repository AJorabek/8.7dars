const Hero = () => {
  return (
    <section className="container">
      <div className="flex flex-wrap justify-center">
        <img
          src="/furniture_hero.png"
          alt="hero img"
          className="hero_img"
        />
        <div className="hero_content flex flex-col gap-10 items-start">
          <h1 className="font-bold hero-title text-white">
            We Help You Make Modern Furniture
          </h1>
          <p className="hero_desc">
            All of our furniture uses the best materials and choices for our
            customers.All of our furniture uses the best materials
          </p>
          <button className="btn1">Explore More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
