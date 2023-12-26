const Banner = () => {
  return (
    <div className="h-[600px] max-md:h-[350px] bg-quotebanner bg-no-repeat bg-cover bg-center px-16 max-lg:px-12 max-md:px-8">
      <div className="h-full flex flex-col justify-center items-center text-white">
        <div className="w-4/5 max-md:w-full flex flex-col items-center">
          <p className="text-[64px] max-lg:text-[50px] max-md:text-[32px] font-bold">
            Request a Quote
          </p>
          <p className="text-[32px] max-lg:text-[24px] max-md:text-[16px] text-center">
            Request a tailored quote today and embark on a journey towards
            enhanced employee well-being with ClearLine HMO.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
