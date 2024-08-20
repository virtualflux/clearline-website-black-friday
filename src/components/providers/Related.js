import RelatedCard from "./RelatedCard";

const RelatedHealthCare = ({ className, result }) => {
  return (
    <div className="flex gap-3 flex-wrap justify-center">
      {result?.map((item, index) => (
        item?.providername && (
          <RelatedCard item={item} key={index} />
        )
      ))}
    </div>
  );
};

export default RelatedHealthCare;
