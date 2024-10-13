import logo from "../assets/logo.svg";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="w-full sm:w-3/4 flex flex-col items-center justify-center py-10 sm:py-0">
        <div className="text-blue">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base font-josefin">
              A Home of creative Tech
            </p>
          </div>
          <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed font-josefin">
            YHE CUT MEDIA
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base font-josefin">
              ORDER NOW
            </p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full sm:w-full">
        <img
          alt="logo"
          src={logo}
          className="w-3/4 sm:w-1/2 lg:w-1/3 p-4 sm:p-0"
        />
      </div>
    </div>
  );
};

export default Hero;
