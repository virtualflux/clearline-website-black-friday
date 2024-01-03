import Image from "next/image";

const DirectorCard = ({ imageUrl, name, role }) => {
  return (
    <div className="rounded-lg border border-pigeonPost p-1">
      <div>
        <div className="w-[290px] h-[290px] max-md:w-[128px] max-md:h-[128px]">
          <Image
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-[16px] max-md:text-[12px] font-semibold my-1">
          {name}
        </p>
        <p className="text-[16px] max-md:text-[12px] text-catalineBlue mb-3">
          {role}
        </p>
      </div>
    </div>
  );
};

export default DirectorCard;
