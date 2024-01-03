import {
  AhmedYakasai,
  EbereNwosu,
  director1,
  director2,
} from "../../../public/assets/images";
import DirectorCard from "./DirectorCard";

const Directors = () => {
  return (
    <div className="px-16 max-lg:px-12 max-md:px-8 pt-12">
      <div className="mb-16 max-md:mb-8">
        <p className="text-boulder text-[36px] max-md:text-[18px] font-medium">
          Board of Directors
        </p>
        <p className="text-catalineBlue text-[48px] max-md:text-[24px] font-bold mb-4">
          Meet our Directors
        </p>
        <div className="w-full overflow-x-hidden">
          <div className="flex gap-3 overflow-x-auto animate">
            {[
              {
                imageUrl: director1,
                name: "Pastor Ituah Ighadalo",
                role: "Director",
              },
              {
                imageUrl: director2,
                name: "Ife Oyedele II",
                role: "MD/Chief Executive Officer",
              },
              {
                imageUrl: EbereNwosu,
                name: "Ebere Nwosu",
                role: "Director",
              },
              {
                imageUrl: AhmedYakasai,
                name: "Pharm, Ahmed I Yakasai",
                role: "Director",
              },
              {
                imageUrl: director1,
                name: "Pastor Ituah Ighadalo",
                role: "Director",
              },
              {
                imageUrl: director2,
                name: "Ife Oyedele II",
                role: "MD/Chief Executive Officer",
              },
              {
                imageUrl: EbereNwosu,
                name: "Ebere Nwosu",
                role: "Director",
              },
              {
                imageUrl: AhmedYakasai,
                name: "Pharm, Ahmed I Yakasai",
                role: "Director",
              },
            ].map(({ imageUrl, name, role }, index) => (
              <DirectorCard
                imageUrl={imageUrl}
                name={name}
                role={role}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <p className="text-boulder text-[36px] max-md:text-[18px] font-medium">
          Management
        </p>
        <p className="text-catalineBlue text-[48px] max-md:text-[24px] font-bold mb-4">
          Meet our Team
        </p>
        <div className="w-full overflow-x-hidden">
          <div className="flex gap-3 overflow-x-auto animate">
            {[
              {
                imageUrl: director1,
                name: "Pastor Ituah Ighadalo",
                role: "Director",
              },
              {
                imageUrl: director2,
                name: "Ife Oyedele II",
                role: "MD/Chief Executive Officer",
              },
              {
                imageUrl: EbereNwosu,
                name: "Ebere Nwosu",
                role: "Director",
              },
              {
                imageUrl: AhmedYakasai,
                name: "Pharm, Ahmed I Yakasai",
                role: "Director",
              },
              {
                imageUrl: director1,
                name: "Pastor Ituah Ighadalo",
                role: "Director",
              },
              {
                imageUrl: director2,
                name: "Ife Oyedele II",
                role: "MD/Chief Executive Officer",
              },
              {
                imageUrl: EbereNwosu,
                name: "Ebere Nwosu",
                role: "Director",
              },
              {
                imageUrl: AhmedYakasai,
                name: "Pharm, Ahmed I Yakasai",
                role: "Director",
              },
            ].map(({ imageUrl, name, role }, index) => (
              <DirectorCard
                imageUrl={imageUrl}
                name={name}
                role={role}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directors;
