import { director1, director2 } from "../../../public/assets/images";
import DirectorCard from "./DirectorCard";

const Directors = () => {
  return (
    <div className="px-16 max-lg:px-12 max-md:px-8 pt-12">
      <div className="mb-16 max-md:mb-8">
        <p className="text-boulder text-[36px] max-md:text-[18px] font-medium">
          Board of Directors
        </p>
        <p className="text-catalineBlue text-[48px] max-md:text-[24px] font-bold mb-4">
          Meet our directors
        </p>
        <div className="flex gap-3 max-sm:overflow-x-auto">
          {Array.from({ length: 4 }).map((item, index) => (
            <DirectorCard
              imageUrl={director1}
              name="Ife Oyedele"
              role="Director"
              key={index}
            />
          ))}
        </div>
      </div>
      <div>
        <p className="text-boulder text-[36px] max-md:text-[18px] font-medium">
          Management
        </p>
        <p className="text-catalineBlue text-[48px] max-md:text-[24px] font-bold mb-4">
          Meet our Team
        </p>
        <div className="flex gap-3 max-sm:overflow-x-auto">
          {Array.from({ length: 4 }).map((item, index) => (
            <DirectorCard
              imageUrl={director2}
              name="Ebere Nwosu"
              role="MD/Chief Executive Officer"
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Directors;
