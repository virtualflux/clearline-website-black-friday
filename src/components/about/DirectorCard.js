import Image from "next/image";

const DirectorCard = ({ imageUrl, name, role }) => {
  return (
   
      <div className="flex flex-col gap-1.5">
        <div className="w-full h-full rounded-xl overflow-clip">
          <Image
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-[16px] max-md:text-[14px] font-semibold">
          {name}
        </p>
        <p className="uppercase text-[12px] max-md:text-[12px] text-catalineBlue mb-3">
          {role}
        </p>
      </div>
  );
};

export default DirectorCard;
