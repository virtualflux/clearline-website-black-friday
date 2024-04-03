const Banner = () => {
  return (
    <div className="h-[540px] max-lg:h-[420px] max-sm:h-[300px] bg-providerBanner max-md:bg-providerMobileBanner bg-no-repeat bg-cover bg-center px-16 max-lg:px-12 max-md:px-8 flex items-center">
      <div>
        <p className="text-[64px] max-lg:text-[48px] max-md:text-[32px] font-bold text-white">
          Find Hospitals Close to You
        </p>
        <p className="text-[36px] max-lg:text-[24px] max-md:text-[16px] text-[#F4F4F4]">
          Find a partner Hospital near you
        </p>
      </div>
    </div>
  );
};

export default Banner;


export const JoinBanner = () => {
  return (
    <div className="h-[540px] max-lg:h-[420px] max-sm:h-[300px] bg-networkBanner bg-no-repeat bg-cover bg-center px-16 max-lg:px-12 max-md:px-8 flex items-center">
      <div>
        <p className="text-[64px] max-lg:text-[48px] max-md:text-[32px] font-bold text-white">
          Become One of Our Providers
        </p>
        <p className="text-[28px] max-lg:text-[24px] max-md:text-[16px] text-[#F4F4F4] w-full md:w-2/3"> 
          We work with top-quality healthcare providers around the world. Do you think your facility can offer excellent care to our members?
        </p>
      </div>
    </div>
  );
};

