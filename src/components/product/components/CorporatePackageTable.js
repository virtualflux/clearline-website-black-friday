import Image from "next/image";
import { GreenTickCircle } from "../../../../public/assets/svgs";

const PackageTable = () => {
  const tableArray = [
    {
      id: 1,
      premium: "Out-Patient limit",
      bronze: " UP TO N162,000",
      silver: "UP TO N219,000",
      gold: "UP TO N210,000",
      goldplus: "UP TO N426,000",
      platinum: "UP TO N564,000",
      platinumPlus: "UP TO N840,000",
      platinumEvercare: "UP TO N1,200,000",
    },
    {
      id: 2,
      premium: "Cordiologist",
      bronze: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      silver: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      gold: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      goldplus: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      platinum: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      platinumPlus: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      platinumEvercare: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
    },
    {
      id: 3,
      premium: "Cardiothoracic surgeon",
      bronze: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      silver: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      gold: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      goldplus: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      platinum: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      platinumPlus: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      platinumEvercare: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
    },
    {
      id: 4,
      premium: "Dermatologist",
      bronze: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      silver: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      gold: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      goldplus: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      platinum: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      platinumPlus: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      platinumEvercare: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
    },
    {
      id: 5,
      premium: "Dieticician/Nutritionist",
      bronze: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      silver: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      gold: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      goldplus: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      platinum: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      platinumPlus: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      platinumEvercare: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
    },
    {
      id: 5,
      premium: "Endocrinologist",
      bronze: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      silver: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      gold: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      goldplus: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      platinum: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      platinumPlus: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      platinumEvercare: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
    },
    {
      id: 6,
      premium: "ENT Surgeon",
      bronze: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      silver: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      gold: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      goldplus: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      platinum: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      platinumPlus: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      platinumEvercare: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
    },
    {
      id: 7,
      premium: "FAMILY Physician",
      bronze: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      silver: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      gold: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      goldplus: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      platinum: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      platinumPlus: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      platinumEvercare: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
    },
    {
      id: 8,
      premium: "Gastroenterologist",
      bronze: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      silver: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      gold: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      goldplus: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      platinum: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      platinumPlus: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      platinumEvercare: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
    },
    {
      id: 9,
      premium: "General surgeon",
      bronze: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      silver: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      gold: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      goldplus: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      platinum: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      platinumPlus: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
      platinumEvercare: (
        <Image src={GreenTickCircle} alt="tick" className="max-md:w-[25px]" />
      ),
    },
  ];

  return (
    <div className="w-full max-md:overflow-x-scroll">
      <table className="w-full">
        <thead>
          <tr className="text-[20px] max-md:text-[12px]">
            <th className="text-left">Health plan/premium</th>
            <th>
              <p className="bg-catalineBlue text-white rounded-md px-3 max-md:py-1 py-2">
                Bronze
              </p>
            </th>
            <th>
              <p className="bg-catalineBlue text-white rounded-md px-3 max-md:py-1 py-2">
                Silver
              </p>
            </th>
            <th>
              <p className="bg-catalineBlue text-white rounded-md px-3 max-md:py-1 py-2">
                Gold
              </p>
            </th>
            <th>
              <p className="whitespace-nowrap bg-catalineBlue text-white rounded-md px-3 max-md:py-1 py-2">
                Gold plus
              </p>
            </th>
            <th>
              <p className="bg-catalineBlue text-white rounded-md px-3 max-md:py-1 py-2">
                Platinum
              </p>
            </th>
            <th>
              <p className="whitespace-nowrap bg-catalineBlue text-white rounded-md px-3 max-md:py-1 py-2">
                Platinum plus
              </p>
            </th>
            <th>
              <p className="whitespace-nowrap bg-catalineBlue text-white rounded-md px-3 max-md:py-1 py-2">
                Platinum evercare
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableArray.map((row, idx) => (
            <tr key={idx} className="h-[60px] text-[20px] max-md:text-[12px]">
              <td>{row.premium}</td>
              <td className="pl-4">{row.bronze}</td>
              <td className="pl-4">{row.silver}</td>
              <td className="pl-4">{row.gold}</td>
              <td className="pl-4">{row.goldplus}</td>
              <td className="pl-4">{row.platinum}</td>
              <td className="pl-4">{row.platinumPlus}</td>
              <td className="pl-4">{row.platinumEvercare}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PackageTable;
