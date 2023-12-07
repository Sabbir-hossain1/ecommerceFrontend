import HeroMenu from "./HeroMenu";
import Slider from "./Slider";

const Hero = () => {
  return (
    <div className="px-10 w-full flex h-[400px] ">
      <div className="hidden lg:block w-1/6 h-full shadow-xl">
        <HeroMenu />
      </div>

      <div className="w-full lg:w-5/6 h-full bg-[#ffdadf]">
        <Slider />
      </div>
    </div>
  );
};

export default Hero;
