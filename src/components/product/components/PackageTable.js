import Image from "next/image";
// import { GreenTickCircle } from "../../../../public/assets/svgs";
import { GoCheckCircle } from "react-icons/go"
import {RxCrossCircled} from "react-icons/rx"
const PackageTable = () => {
  const tableArray = [
    {
      id: 1,
      kiakia: "₦5,000",
      value: "₦50,000",
      advantage: "₦120,000",
      elite: "₦341,087",
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
      value: "UP TO N150,000",
      advantage: "UP TO N250,000",
      elite: "UP TO N500,000"
    },
    {
      id: 345,
      title: "Out-patient care, General and specialist consultation",
      value: "",
      advantage: "",
      elite: ""
    },
    {
      id: 2,
      title: "Teleconsultation 24/7 Medical Consult / Chat with Doctors Online",
      kiakia: (<GoCheckCircle className="text-green" size={30} />),
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
      id: 34,
      title: "Access to Drugs prescription",
      kiakia:(<GoCheckCircle className="text-green" size={30} />),
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
      id: 345,
      title: "Access to diagnostics laboratory service, medical investigation prescription and reviews",
      kiakia: (<GoCheckCircle className="text-green" size={30} />),
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
      id: 3,
      title: "Speak to doctors within 20 mins",
      kiakia:(<GoCheckCircle className="text-green" size={30} />),
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
      title: "Get prescription for Drugs",
      kiakia: (<GoCheckCircle className="text-green" size={30} />),
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
      title: "Reduce spread and exposure to infection",
      kiakia: (<GoCheckCircle className="text-green" size={30} />),
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
      title: "Admission and Feeding Early diagnosis and treatment",
      kiakia: (<GoCheckCircle className="text-green" size={30} />),
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
      title: "Reduce cost and time to get healthcare",
      kiakia: (<GoCheckCircle className="text-green" size={30} />),
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
      title: "Enjoy regular follow up and support",
      kiakia: (<GoCheckCircle className="text-green" size={30} />),
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
      id: 3,
      title: "General and Specialist Consultations",
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
      title: "Prescribed Medications, Supply of Drugs & Consumables",
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
      title: "Surgeries (Minor and Major)",
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
      title: "Admission and Feeding",
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
      title: "Maternal Care (Antenatal and Delivery)",
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
      title: "Neonatal Care (Immunizations, Circumcision, Piercing, NICU, Phototherapy, Incubator care)",
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
      title: "Ear, Nose and Throat (ENT) Services",
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
      title: "Psychiatric Treatment",
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
      title: "Intensive Care Unit (ICU)",
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
      title: "Advanced and Complex Investigations (CT Scan, MRI Scan)",
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
      title: "Laboratory Investigations",
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
      title: "Radiological Investigations",
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
            <th className="w-[17%]">
              <p className="bg-catalineBlue text-white rounded-md px-3 max-md:py-1 py-2">
               Kia Kia 
              </p>
            </th>
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
              <td className="pl-4" >{clear.kiakia}</td>
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
