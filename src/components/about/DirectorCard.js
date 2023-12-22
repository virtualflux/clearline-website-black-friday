import Image from "next/image";

const DirectorCard = ({ imageUrl, name, role }) => {
  return (
    <div className="rounded-lg border border-pigeonPost p-1">
      <div className="max-sm:w-[150px]">
        <Image
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
        <p className="text-[16px] max-md:text-[12px] font-semibold">{name}</p>
        <p className="text-[16px] max-md:text-[12px] text-catalineBlue">
          {role}
        </p>
      </div>
    </div>
  );
};

export default DirectorCard;
