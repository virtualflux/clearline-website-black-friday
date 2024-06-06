import RelatedCard from "./RelatedCard";

const RelatedHealthCare = ({ className, result }) => {
  return (
    <div className={``}>
     
      {result?.length ? (
        <div className="flex gap-3 flex-wrap justify-center">
          {result?.map((item, index) => (
            <RelatedCard item={item} key={index} />
          ))}
        </div>
      ) : (
        <div className="flex gap-3 flex-wrap max-md:justify-center">
          <h3> No related provider for the selected plan</h3>
        </div>
      )}
    </div>
  );
};

export default RelatedHealthCare;
