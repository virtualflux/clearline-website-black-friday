import RelatedCard from "./RelatedCard";

const RelatedHealthCare = ({ className, result }) => {
  console.log(result);
  return (
    <div className={`px-16 max-lg:px-12 max-md:px-8 ${className}`}>
      <p className="text-[32px] max-lg:text-[24px] max-md:text-[16px] font-semibold mb-2">
        Related Healthcare Centers
      </p>
      <div className="flex gap-3 overflow-x-auto">
        {result?.map((item, index) => (
          <RelatedCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default RelatedHealthCare;
