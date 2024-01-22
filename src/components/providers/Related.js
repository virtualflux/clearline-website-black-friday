import RelatedCard from "./RelatedCard";

const RelatedHealthCare = ({ className, result }) => {
  return (
    <div className={`px-16 max-lg:px-12 max-md:px-8 ${className}`}>
      <p className="text-[32px] max-lg:text-[24px] max-md:text-[16px] font-semibold mb-2">
        Related Healthcare Centers
      </p>
      {result?.length ? (
        <div className="flex gap-3 flex-wrap">
          {result?.map((item, index) => (
            <RelatedCard item={item} key={index} />
          ))}
        </div>
      ) : (
        <div className="flex gap-3 flex-wrap">
          {[
            {
              providerName: "New Era Hospital Ltd Umuahia",
              address:
                "90b, Oji River Street off Uwalaka/Niger Road, Umuahia, Abia",
            },
            {
              providerName: "Obioma Hospital",
              address: "21 School Road,Umuahia",
            },
            {
              providerName: "Uche Medicare Clinic",
              address: "93,Healthcare / Aba Road, Umuahia,",
            },
          ]?.map((item, index) => (
            <RelatedCard item={item} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RelatedHealthCare;
