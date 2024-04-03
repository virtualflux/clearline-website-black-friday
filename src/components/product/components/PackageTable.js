import Image from "next/image";
// import { GreenTickCircle } from "../../../../public/assets/svgs";
import { GoCheckCircle } from "react-icons/go"
import {RxCrossCircled} from "react-icons/rx"
const PackageTable = () => {
  const tableArray = [
    {
      id: 1,
      // premium: "Premium",
      value: "N50,000",
      advantage: "N120,000",
      elite: "N341,087",
      
    },
    {
      id: 2,
      title: "Health plan / Service Description",
      value: "C - D Providers",
      advantage: "B - D providers",
      elite: ""
    },
    {
      id: 34,
      title: "Out-patient limit",
      value: "UPTO N150,000",
      advantage: "UPTO N250,000",
      elite: "UPTO N500,000"
    },
    {
      id: 345,
      title: "Out-patient care, General and specialist consultation",
      value: "",
      advantage: "",
      elite: ""
    },
    {
      id: 3,
      title: "Cordiologist",
      value: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      advantage: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      elite: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      
    },
    {
      id: 4,
      title: "Cardiothoracic surgeon",
      value: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      advantage: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      elite: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      
    },
    {
      id: 5,
      title: "Dermatologist",
      value: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      advantage: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      elite: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      
    },
    {
      id: 6,
      title: "Dieticician/Nutritionist",
      value: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      advantage: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      elite: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      
    },
    {
      id: 7,
      title: "Endocrinologist",
      value: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      advantage: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      elite: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      
    },
    {
      id: 8,
      title: "ENT Surgeon",
      value: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      advantage: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      elite: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      
    },
    {
      id: 9,
      title: "FAMILY Physician",
      value: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      advantage: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      elite: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      
    },
    {
      id: 10,
      title: "Gastroenterologist",
      value: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      advantage: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      elite: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      
    },
    {
      id: 11,
      title: "General surgeon",
      value: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      advantage: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      elite: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      
    },
    {
      id: 12,
      title: "Gynaecologist",
      value: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      advantage: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      elite: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      
    },
    {
      id: 13,
      title: "Hematologist",
      value: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      advantage: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      elite: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      
    },
    {
      id: 13,
      title: "Neonatologist",
      value: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      advantage: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      elite: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      
    },
    
  ];

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full">
        <thead className="">
          <tr className="text-[20px] max-md:text-[12px]">
            <th className="text-left w-[30%]">Package</th>
            <th >
              <p className="bg-catalineBlue text-white rounded-md px-3 max-md:py-1 py-2">
                Clear Value
              </p>
            </th>
            <th>
              <p className="bg-catalineBlue text-white rounded-md px-3 max-md:py-1 py-2">
                Clear Advantage
              </p>
            </th>
            <th>
              <p className="bg-catalineBlue text-white rounded-md px-3 max-md:py-1 py-2">
                Clear Elite
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableArray.map((clear, idx) => (
            <tr key={idx} className="h-[60px] text-[20px] max-md:text-[12px]">
              <td >{clear.title}</td>
              <td className="pl-4" >{clear.value}</td>
              <td className="pl-4" >{clear.advantage}</td>
              <td className="pl-4" >{clear.elite}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default PackageTable;
