import { Parallax } from "react-parallax";

const PageBanner = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="background cover"
      strength={-200}
    >
      <div className="hero h-[400px] lg:h-[600px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl lg:text-5xl font-bold uppercase">
              {title}
            </h1>
            <p className="mb-5 text-lg lg:text-2xl uppercase">
              Would you like to try a dish?
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default PageBanner;
