import RelatedCard from "./RelatedCard";

const RelatedHealthCare = ({ className, result }) => {
  return (
    <div className={`px-16 max-lg:px-12 max-md:px-8 ${className}`}>
      <p className="text-[32px] max-lg:text-[24px] max-md:text-[16px] font-semibold mb-2">
        Related Healthcare Centers
      </p>
      {result?.length ? (
        <div className="flex gap-3 overflow-x-auto">
          {result?.map((item, index) => (
            <RelatedCard item={item} key={index} />
          ))}
        </div>
      ) : (
        <div>
          <p className="text-[20px] max-md:text-[12px]">
            Search to get related healtcare centers
          </p>
        </div>
      )}
    </div>
  );
};

export default RelatedHealthCare;
