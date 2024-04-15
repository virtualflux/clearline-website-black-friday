import React from 'react';
import { ChidinmaChigbo, FolasadeDosunmu, NnekaAnozie, OlubukolaOlaoye, Olubunmi, PraiseDike } from '../../../public/assets/images';
import Image from "next/image";
import Link from 'next/link';
function  Management  () {
  return (
    <div className="px-16 max-lg:px-12 max-md:px-8 pt-12">
      <div className="mb-12 max-md:mb-6">
        <div className="flex flex-col gap-1 items-center mb-10">
        <p className="text-catalineBlue text-[48px] max-md:text-[30px] font-bold">
          Management Team
        </p>
        <p className=" text-[24px] max-md:text-[20px] text-center">
        Meet our dynamic and ingenious Management team, with over 100 years of joint experience in health management, medical and financial services.
        </p>
        </div>
        <div className="w-full overflow-x-hidden">
          <div className=" grid grid-cols-[repeat(auto-fit,_minmax(290px,_320px))] justify-center gap-2 md:gap-4 auto-rows-auto">
            {[
              {
                imageUrl: OlubukolaOlaoye,
                name: "Olaoye Olubukola",
                role: "National Head, Sales & Marketing",
                link:"https://www.linkedin.com/in/olaoye-olubukola-4a8439117"
              },
              {
                imageUrl: NnekaAnozie,
                name: "Nneka Anozie",
                role: "Financial Controller",
                link:"https://www.linkedin.com/in/nneka-agunye-fca-218a92298/"
              },
              {
                imageUrl: ChidinmaChigbo,
                name: "Chidinma Chigbo",
                role: "Head, Business Development & Strategy",
                link:"https://www.linkedin.com/in/chidinmachigbo"
              },
              {
                imageUrl: Olubunmi,
                name: "Olubunmi Okubadejo-Gaji",
                role: "Head, Channel Optimization",
                link:"https://www.linkedin.com/in/oluwabunmi-okubadejo-gaji-cphrn-mnim-461194142/"
              },
              {
                imageUrl: FolasadeDosunmu,
                name: "Folashade Dosunmu",
                role: "Head, Human Resource & Admin",
                link:"https://www.linkedin.com/in/folasade-dosunmu-fcipm-mcia-hrpl-a1567018/"
              },
              {
                imageUrl: PraiseDike,
                name: "Praise Dike",
                role: "Head, Legal/ Company Secretary",
                link:"https://www.linkedin.com/in/praise-dike-1024b7150"
              },
              
            ].map(({ imageUrl, name, role,link }, index) => (
              <ManagementCard
                imageUrl={imageUrl}
                name={name}
                role={role}
                key={index}
                link={link}
              />
            ))}
          </div>
        </div>
      </div>
      </div>
  )
}

export default Management



const ManagementCard = ({ imageUrl, name, role,link }) => {
  return (
   
      <Link className="group flex flex-col gap-1.5" href={link} target='_blank'>
        <div className="w-full max-h-[320px] rounded-xl overflow-clip">
          <Image
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <p className="text-[16px] max-md:text-[14px] font-semibold text-center group-hover:underline underline-offset-2">
          {name}
        </p>
        <p className="uppercase text-[12px] max-md:text-[12px] text-catalineBlue mb-3 text-center group-hover:underline underline-offset-2" >
          {role}
        </p>
      </Link>
  );
};