import '../../styles/hero-section/hero-section.css';

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="group relative block apple-glass flex flex-col items-center justify-center mt-20 ">
        <h1 className="text-center font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-in-expand">
          Antonio Laudani
        </h1>

        <h3 className="mt-2 text-center uppercase text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-in-expand tracking-in-expand-delay">
          Front End Developer
        </h3>
      </div>
    </div>
  );
};

export default Hero;