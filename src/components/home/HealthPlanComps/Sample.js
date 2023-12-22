import Card from "./Card";

const Sample = ({ arr }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {arr?.map(({ list, title, superb }, idx) => (
        <Card key={idx} title={title} list={list} superb={superb} />
      ))}
    </div>
  );
};

export default Sample;
