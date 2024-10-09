import { GoCheckCircle } from "react-icons/go";

const KiakiaPremium = () => {
  const tableArray = [
    {
      id: 1,
      // premium: "Premium",
      value: "N5,000",
    },
    {
      id: 2,
      title: "Teleconsultation 24/7 Medical Consult / Chat with Doctors Online",
      value: <GoCheckCircle className="text-green" size={30} />,
    },
    {
      id: 34,
      title: "Access to Drugs prescription",
      value: <GoCheckCircle className="text-green" size={30} />,
    },
    {
      id: 345,
      title: "Access to diagnostics laboratory service, medical investigation prescription and reviews",
      value: <GoCheckCircle className="text-green" size={30} />,
    },
    {
      id: 3,
      title: "Speak to doctors within 20 mins",
      value: <GoCheckCircle className="text-green" size={30} />,
    },
    {
      id: 4,
      title: "Get prescription for Drugs",
      value: <GoCheckCircle className="text-green" size={30} />,
    },
    {
      id: 5,
      title: "Reduce spread and exposure to infection",
      value: <GoCheckCircle className="text-green" size={30} />,
    },
    {
      id: 6,
      title: "Admission and Feeding Early diagnosis and treatment",
      value: <GoCheckCircle className="text-green" size={30} />,
    },
    {
      id: 7,
      title: "Reduce cost and time to get healthcare",
      value: <GoCheckCircle className="text-green" size={30} />,
    },
    {
      id: 8,
      title: "Enjoy regular follow up and support",
      value: <GoCheckCircle className="text-green" size={30} />,
    },
  ];

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-[20px] max-md:text-[12px]">
            <th className="text-left w-[30%]">Package</th>
            <th className="w-[30%]">
              <p className="bg-catalineBlue text-white rounded-md px-2 max-md:py-1 py-2">
                Premium
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableArray.map((premium, idx) => (
            <tr key={idx} className="h-[60px] text-[20px] max-md:text-[12px]">
              <td>{premium.title}</td>
              <td className="flex justify-center items-center">{premium.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KiakiaPremium;
