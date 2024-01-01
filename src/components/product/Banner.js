const Banner = () => {
  return (
    <div className="h-[600px] max-md:h-[400px] bg-productBanner bg-no-repeat bg-cover bg-center px-16 max-lg:px-12 max-md:px-8">
      <div className="h-full flex flex-col justify-center text-white">
        <p className="text-[64px] max-lg:text-[50px] max-md:text-[32px] font-bold">
          Our Plans
        </p>
        <p className="text-[32px] max-lg:text-[24px] max-md:text-[16px]">
          We have the best plans for you
        </p>
      </div>
    </div>
  );
};

export default Banner;
