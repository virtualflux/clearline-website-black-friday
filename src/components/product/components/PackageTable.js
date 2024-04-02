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
      elite: "N341,000",
      
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
      elite: ""
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
    {
      id: 13,
      title: "Packed Cell Volume (PCV)",
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
      id: 14,
      title: "Platelet count",
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
      id: 15,
      title: "Red Blood Cell/ Reticuloucytecount",
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
      id: 16,
      title: "White Blood Cell count",
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
      id: 17,
      title: "White cell count (Total and Differential)",
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
      id: 137,
      title: "Chemistry Investigation",
    },
    {
      id: 37,
      title: "2 Hours Post-prandial Blood Sugar",
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
      id: 47,
      title: "Electrolytes, Urea and Creatinine",
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
      id: 47,
      title: "Fasting Blood Sugar",
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
      id: 48,
      title: "Glucose Challenge Test",
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
      id: 49,
      title: "Lipid Profile (Fasting) (Cholesterol, HDL, LDL, Trigly ceride Profile)",
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
      id: 50,
      title: "Liver Function Test (LFT)",
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
      id: 51,
      title: "Oral Glucose Tolerance Test (OGTT)",
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
      id: 52,
      title: "Prothrombin Time (PT/INR)",
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
      id: 53,
      title: "Random Blood Sugar",
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
      id: 54,
      title: "Serum Acid Phosphate",
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
      id: 55,
      title: "Serum Albumin",
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
      id: 56,
      title: "Serum Alkaline Phosphate",
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
      id: 57,
      title: "Serum Bicarbonate",
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
      id: 58,
      title: "Serum Bilirubin (Total and Direct)",
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
      id: 59,
      title: "Serum Calcium",
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
      id: 89,
      title: "Serum Chloride",
      value: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      advantage: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      elite: (
        <GoCheckCircle className="text-green" size={30}/>
      )
    },
    {
      id: 82,
      title: "Serum Gamma Glutamyl Transferase",
      value: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      advantage: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      elite: (
        <GoCheckCircle className="text-green" size={30}/>
      )
    },
    {
      id: 83,
      title: "Serum Inorganic Phosphate",
      value: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      advantage: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      elite: (
        <GoCheckCircle className="text-green" size={30}/>
      )
    },
    {
      id: 84,
      title: "Serum Lactate Dehydrogenase",
      value: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      advantage: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      elite: (
        <GoCheckCircle className="text-green" size={30}/>
      )
    },
    {
      id: 85,
      title: "Serum Lithium",
      value: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      advantage: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      elite: (
        <GoCheckCircle className="text-green" size={30}/>
      )
    },
    {
      id: 86,
      title: "Serum Magnesium",
      value: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      advantage: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      elite: (
        <GoCheckCircle className="text-green" size={30}/>
      )
    },
    {
      id: 87,
      title: "Serum Potassium",
      value: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      advantage: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      elite: (
        <GoCheckCircle className="text-green" size={30}/>
      )
    },
    {
      id: 88,
      title: "Serum Sodium",
      value: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      advantage: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      elite: (
        <GoCheckCircle className="text-green" size={30}/>
      )
    },
    {
      id: 89,
      title: "Urine Pregnancy Test",
      value: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      advantage: (
        <GoCheckCircle className="text-green" size={30}/>
      ),
      elite: (
        <GoCheckCircle className="text-green" size={30}/>
      )
    },
    {
      id: 99,
      title: "MICROBIOLOGY AND PARASITOLOGY",
      value: '',
      advantage: "",
      elite: ""

    },
    {
      id: 90,
      title: "Aspirates M/C/S",
      value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
      advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
      elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 91,
        title: "Blood Culture",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 92,
        title: "Cholera Ag",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 92,
        title: "Ear Swab M/C/S",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 93,
        title: "H.Pylori",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 94,
        title: "High Vaginal Swab(HVS)M/C/S",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 95,
        title: "Leish mania Screening",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 96,
        title: "Malaria Parasite(MP)",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 97,
        title: "Mantoux/Heaf's Test",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 98,
        title: "Skin Scraping for Fungi",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 100,
        title: "Skin Snipfor Microfilaria",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 101,
        title: "SputumM/C/S,AFB",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 102,
        title: "Stool M/C/S",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 103,
        title: "Stool Occult Blood",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 104,
        title: "Throat SwabM/C/S",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 105,
        title: "Toxoplasma Screening",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 106,
        title: "Trypanosomes Screening",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 107,
        title: "Urethral SwabM/C/S",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 108,
        title: "UrineM/C/S",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 109,
        title: "VDRL(Veneral Disease Research Laboratory)Test",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 110,
        title: "Wound  Swab M/C/S",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 111,
        title: "ADVANCED LABORATORY INVESTIGATIONS / PATHOLOGY",
        value: "",
        advantage: "",
        elite: ""
      },
      {
        id: 112,
        title: "Alpha-1Antitrypsin",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 113,
        title: "HBA1C",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 114,
        title: "24HourCreatinineClearance",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 115,
        title: "BleedingTime",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 116,
        title: "Blood urea Nitrogen",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 117,
        title: "Chlamydia Screening",
        value: (
          <RxCrossCircled className="text-red-500" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 118,
        title: "Clotting Time",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 119,
        title: "Coomb'sTest(Direct)",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 120,
        title: "Coomb's Test (Indirect)",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 121,
        title: "Creatinine phosphokinase",
        value: (
          <RxCrossCircled className="text-red-500" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 122,
        title: "CSFM/C/S(CSFAnalysis)",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 123,
        title: "D-Dimer",
        value: (
          <RxCrossCircled className="text-red-500" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 124,
        title: "G-6PD Screening",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 125,
        title: "Hepatitis B Screening",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 126,
        title: "Hepatitis B Surface Antigen (HBSAg)",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 127,
        title: "Hepatitis C Screening",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 128,
        title: "HIV Confirmatory Test",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 129,
        title: "HIV Screening",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 130,
        title: "Osmotic Fragility Test",
        value: (
          <RxCrossCircled className="text-red-500" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 131,
        title: "Pap Smear and Cytology",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 132,
        title: "Prostate Specific Antigen",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 133,
        title: "Semen M/C/S",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 134,
        title: "Seminal- Fluid Analysis (SFA)",
        value: (
          <RxCrossCircled className="text-red-500" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 135,
        title: "Serum Creatinine Phosphokinase",
        value: (
          <RxCrossCircled className="text-red-500" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 136,
        title: "Serum Iron",
        value: (
          <RxCrossCircled className="text-red-500" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 137,
        title: "Serum Uric Acid",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 138,
        title: "Sputum Acid Fast Bacilli(AFB)Test",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id: 139,
        title: "Thyroid Function Tests",
        value: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        advantage: (
          <GoCheckCircle className="text-green" size={30}/>
        ),
        elite: (
          <GoCheckCircle className="text-green" size={30}/>
        )
      },
      {
        id:140,
        title:"RADIOLOGY INVESTIGATIONS (XRAY AND ULTRASOUND) BASICDIAGNOSTICIMAGING",
        value:"",
        advantage:"",
        elite:""
      },
      {
          id: 141,
          title: "Abdominal X-Rays",
          value: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          advantage: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          elite: (
            <GoCheckCircle className="text-green" size={30}/>
          )
        },
        {
          id: 142,
          title: "Cervical Spine X-rays",
          value: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          advantage: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          elite: (
            <GoCheckCircle className="text-green" size={30}/>
          )
        },
        {
          id: 143,
          title: "Chest X-Rays",
          value: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          advantage: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          elite: (
            <GoCheckCircle className="text-green" size={30}/>
          )
        },
        {
          id: 144,
          title: "Limbs(Hand,Forearm,Upperarm,Thighand Leg)X-rays",
          value: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          advantage: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          elite: (
            <GoCheckCircle className="text-green" size={30}/>
          )
        },
        {
          id: 145,
          title: "Lumbosacral X-Rays",
          value: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          advantage: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          elite: (
            <GoCheckCircle className="text-green" size={30}/>
          )
        },
        {
          id: 146,
          title: "Mandibles/Temporomandibular Joint X-Rays",
          value: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          advantage: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          elite: (
            <GoCheckCircle className="text-green" size={30}/>
          )
        },
        {
          id: 147,
          title: "Lumbosacral X-Rays",
          value: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          advantage: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          elite: (
            <GoCheckCircle className="text-green" size={30}/>
          )
        },
        {
          id: 148,
          title: "Mastoid X-rays",
          value: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          advantage: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          elite: (
            <GoCheckCircle className="text-green" size={30}/>
          )
        },
        {
          id: 149,
          title: "Neck X-rays",
          value: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          advantage: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          elite: (
            <GoCheckCircle className="text-green" size={30}/>
          )
        },
        {
          id: 150,
          title: "Pelvic X-rays",
          value: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          advantage: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          elite: (
            <GoCheckCircle className="text-green" size={30}/>
          )
        },
        {
          id: 151,
          title: "Sinus X-rays",
          value: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          advantage: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          elite: (
            <GoCheckCircle className="text-green" size={30}/>
          )
        },
        {
          id: 152,
          title: "Skull X-rays",
          value: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          advantage: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          elite: (
            <GoCheckCircle className="text-green" size={30}/>
          )
        },
        {
          id: 153,
          title: "ThoracicInlet X-rays",
          value: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          advantage: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          elite: (
            <GoCheckCircle className="text-green" size={30}/>
          )
        },
        {
          id: 154,
          title: "Thorac-Lumbar X-rays",
          value: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          advantage: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          elite: (
            <GoCheckCircle className="text-green" size={30}/>
          )
        },
        {
          id: 155,
          title: "X-rays of All Body Joints",
          value: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          advantage: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          elite: (
            <GoCheckCircle className="text-green" size={30}/>
          )
        },
        {
          id: 155,
          title: "Psychiatric treatment",
          value: "Up to 3 days (Out-Patient)",
          advantage: "Up to 7 days (Out-Patient) ",
          elite: (
            <GoCheckCircle className="text-green" size={30}/>
          )
        },
        {
          id: 156,
          title: "In-Patient Services",
          value: "",
          advantage: "",
          elite: ""
        },
        {
          id: 156,
          title: "In-Patient Limit",
          value: "Up to N300,000",
          advantage: "Up to N400,000",
          elite: ""
        },
        {
          id: 157,
          title: "In-Patient, General and Specialist Consultation",
          value: (
            <RxCrossCircled className="text-green" size={30}/>
          ),
          advantage: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          elite: (
            <GoCheckCircle className="text-green" size={30}/>
          )
        },
        {
          id:158,
          title:"Admission",
          value:"(MAX: 20 DAYS)",
          advantage:"(MAX:30 DAYS)",
          elite:""
        },
        {
          id: 151,
          title: "Feeding for enrollees on admission",
          value: (
            <RxCrossCircled className="text-green" size={30}/>
          ),
          advantage: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          elite: (
            <GoCheckCircle className="text-green" size={30}/>
          )
        },
        {
          id: 152,
          title: "Hospital Ward Care",
          value:"General Ward Only",
          advantage: "Semi Private Ward",
          elite: (
            <GoCheckCircle className="text-green" size={30}/>
          )
        },
        {
          id: 153,
          title: "Skilled medical and para medical services",
          value: (
            <RxCrossCircled className="text-green" size={30}/>
          ),
          advantage: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          elite: (
            <GoCheckCircle className="text-green" size={30}/>
          )
        },
        {
          id: 154,
          title: "Supply of prescribed intravenous/intra muscular,oral and topical drugs",
          value: (
            <RxCrossCircled className="text-green" size={30}/>
          ),
          advantage: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          elite: (
            <GoCheckCircle className="text-green" size={30}/>
          )
        },
        {
          id: 155,
          title: "Supply of all medical and surgical consumables",
          value: (
            <RxCrossCircled className="text-green" size={30}/>
          ),
          advantage: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          elite: (
            <GoCheckCircle className="text-green" size={30}/>
          )
        },
        {
          id: 156,
          title: "Blood grouping, cross matching, and transfusion",
          value: (
            <RxCrossCircled className="text-green" size={30}/>
          ),
          advantage: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          elite: (
            <GoCheckCircle className="text-green" size={30}/>
          )
        },
        {
          id: 157,
          title: "Accommodation for in-patientcare",
          value: (
            <RxCrossCircled className="text-green" size={30}/>
          ),
          advantage: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          elite: (
            <GoCheckCircle className="text-green" size={30}/>
          )
        },
        {
          id: 158,
          title: "Prescribed Medications, Supply OF Drugs & Consumables (Routine Drugs Within Out-Patient limit) Generic",
          value: (
            <RxCrossCircled className="text-green" size={30}/>
          ),
          advantage: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          elite: (
            <GoCheckCircle className="text-green" size={30}/>
          )
        },
        {
          id: 159,
          title: "Laboratory Investigations / Diagnostic Tests",
          value: (
            <RxCrossCircled className="text-green" size={30}/>
          ),
          advantage: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          elite: (
            <GoCheckCircle className="text-green" size={30}/>
          )
        },
        {
          id: 160,
          title: "Radiology Investigations (X-RAY and Ultra Sound)",
          value: (
            <RxCrossCircled className="text-green" size={30}/>
          ),
          advantage: (
            <GoCheckCircle className="text-green" size={30}/>
          ),
          elite: (
            <GoCheckCircle className="text-green" size={30}/>
          )
        },
        {
          id: 161,
          title: "Advanced Complex Investigations",
          value: "",
          advantage: "",
          elite: ""
        },
        {
          id: 162,
          title: "Advanced Diagnostic Imaging CT scan ",
          value: "Once per annum",
          advantage: "Once Per annum",
          elite: ""
        },
        {
          id: 166,
          title: "Physiotherapy services",
          value: "",
          advantage: "",
          elite: ""
        },
        {
          id: 163,
          title: "Physiotherapy (up to approved limits)",
          value: "3 sessions",
          advantage: "5 sessions",
          elite: ""
        },
        {
          id: 167,
          title: "Accidents and Emergencies",
          value: "",
          advantage: "",
          elite: ""
        },
        {
          id: 165,
          title: "Evacuation from Hospital to Hospital (By Road)",
          value:(
            <RxCrossCircled className="text-green" size={30}/>
          ) ,
          advantage:(
            <RxCrossCircled className="text-green" size={30}/>
          ) ,
          elite: (
            <RxCrossCircled className="text-green" size={30}/>
          )
        },
        {
          id: 167,
          title: "Surgeries (Minor-Major surgeries)- Included in In-Patient Limit",
          value: "",
          advantage: "",
          elite: ""
        },
        {
          id: 168,
          title: "Surgeries included in In-Patient Limit, Minor, Intermediate and Major Surgeries",
          value: "Up to annual surgery limit of N200,000",
          advantage: "Up to annual surgery limit of N250,000",
          elite: ""
        },
        {
          id: 169,
          title: "OTHER SERVICES",
          value: "",
          advantage: "",
          elite: ""
        },
        {
          id: 170,
          title: "HIV/AIDS Care & Treatment at Designated Centers",
          value: "",
          advantage: "",
          elite: ""
        },
        {
          id: 171,
          title: "Specialist Consultation",
          value:(
            <RxCrossCircled className="text-green" size={30}/>
          ) ,
          advantage: (
            <RxCrossCircled className="text-green" size={30}/>
          ),
          elite: (
            <RxCrossCircled className="text-green" size={30}/>
          )
        },
        {
          id: 172,
          title: "Specialist Drug therapy",
          value:(
            <RxCrossCircled className="text-green" size={30}/>
          ) ,
          advantage: (
            <RxCrossCircled className="text-green" size={30}/>
          ),
          elite: (
            <RxCrossCircled className="text-green" size={30}/>
          )
        },
        {
          id: 173,
          title: "Counselling Sessions",
          value:(
            <RxCrossCircled className="text-green" size={30}/>
          ) ,
          advantage: (
            <RxCrossCircled className="text-green" size={30}/>
          ),
          elite: (
            <RxCrossCircled className="text-green" size={30}/>
          )
        },
        {
          id: 174,
          title: "Annual Health Checks for Principal at CIL Centers Only",
          value: "",
          advantage: "",
          elite: ""
        },
        {
          id: 175,
          title: "BMI Check",
          value:(
            <RxCrossCircled className="text-green" size={30}/>
          ) ,
          advantage: (
            <RxCrossCircled className="text-green" size={30}/>
          ),
          elite: (
            <RxCrossCircled className="text-green" size={30}/>
          )
        },{
          id: 176,
          title: "General Physical Examination",
          value:(
            <RxCrossCircled className="text-green" size={30}/>
          ) ,
          advantage: (
            <RxCrossCircled className="text-green" size={30}/>
          ),
          elite: (
            <RxCrossCircled className="text-green" size={30}/>
          )
        },{
          id: 177,
          title: "Blood Pressure Check (Hypertension Screening)",
          value:(
            <RxCrossCircled className="text-green" size={30}/>
          ) ,
          advantage: (
            <RxCrossCircled className="text-green" size={30}/>
          ),
          elite: (
            <RxCrossCircled className="text-green" size={30}/>
          )
        },{
          id: 178,
          title: "Blood Sugar Check (Diabetes Screening)",
          value:(
            <RxCrossCircled className="text-green" size={30}/>
          ) ,
          advantage: (
            <RxCrossCircled className="text-green" size={30}/>
          ),
          elite: (
            <RxCrossCircled className="text-green" size={30}/>
          )
        },{
          id: 179,
          title: "Urinalysis",
          value:(
            <RxCrossCircled className="text-green" size={30}/>
          ) ,
          advantage: (
            <RxCrossCircled className="text-green" size={30}/>
          ),
          elite: (
            <RxCrossCircled className="text-green" size={30}/>
          )
        },
        {
          id: 180,
          title: "Optical Care",
          value: "",
          advantage: "",
          elite: ""
        },
        {
          id: 181,
          title: "Global Optical limit",
          value: "N10,000",
          advantage: "N15,000",
          elite: ""
        },
        {
          id: 182,
          title: "Foreign body removal",
          value:(
            <RxCrossCircled className="text-green" size={30}/>
          ) ,
          advantage: (
            <RxCrossCircled className="text-green" size={30}/>
          ),
          elite: (
            <RxCrossCircled className="text-green" size={30}/>
          )
        },{
          id: 183,
          title: "Entropion and Ectropion Repairs",
          value:(
            <RxCrossCircled className="text-green" size={30}/>
          ) ,
          advantage: (
            <RxCrossCircled className="text-green" size={30}/>
          ),
          elite: (
            <RxCrossCircled className="text-green" size={30}/>
          )
        },{
          id: 184,
          title: "Chalazion Incision",
          value:(
            <RxCrossCircled className="text-green" size={30}/>
          ) ,
          advantage: (
            <RxCrossCircled className="text-green" size={30}/>
          ),
          elite: (
            <RxCrossCircled className="text-green" size={30}/>
          )
        },{
          id: 185,
          title: "Syringing and Probing",
          value:(
            <RxCrossCircled className="text-green" size={30}/>
          ) ,
          advantage: (
            <RxCrossCircled className="text-green" size={30}/>
          ),
          elite: (
            <RxCrossCircled className="text-green" size={30}/>
          )
        },{
          id: 186,
          title: "Eye Examination, Refraction",
          value:(
            <RxCrossCircled className="text-green" size={30}/>
          ) ,
          advantage: (
            <RxCrossCircled className="text-green" size={30}/>
          ),
          elite: (
            <RxCrossCircled className="text-green" size={30}/>
          )
        },{
          id: 187,
          title: "Conditions-Allergies, Conjunctivities, Pterygium",
          value:(
            <RxCrossCircled className="text-green" size={30}/>
          ) ,
          advantage: (
            <RxCrossCircled className="text-green" size={30}/>
          ),
          elite: (
            <RxCrossCircled className="text-green" size={30}/>
          )
        },{
          id: 188,
          title: "Excision",
          value:(
            <RxCrossCircled className="text-green" size={30}/>
          ) ,
          advantage: (
            <RxCrossCircled className="text-green" size={30}/>
          ),
          elite: (
            <RxCrossCircled className="text-green" size={30}/>
          )
        },{
          id: 189,
          title: "Eye Surgeries (Up to annual surgery limit)",
          value:(
            <RxCrossCircled className="text-green" size={30}/>
          ) ,
          advantage: (
            <RxCrossCircled className="text-green" size={30}/>
          ),
          elite: (
            <RxCrossCircled className="text-green" size={30}/>
          )
        },
        {
          id:190,
          title:"Dental Services"
        },
        ,{
          id: 191,
          title: "Dental Care (Block Limit) - Included in Out-Patient Limit",
          value:"N10,000" ,
          advantage:"N20,00",
          elite: ""
        },{
          id: 192,
          title: "Primary Dental Care-Relief of Pain,Fillings,Simple Extraction,Preventive Care,(Scaling and Polishing-Once A Year)",
          value:(
            <RxCrossCircled className="text-green" size={30}/>
          ) ,
          advantage: (
            <RxCrossCircled className="text-green" size={30}/>
          ),
          elite: (
            <RxCrossCircled className="text-green" size={30}/>
          )
        },{
          id: 193,
          title: "Examination of Dentition",
          value:(
            <RxCrossCircled className="text-green" size={30}/>
          ) ,
          advantage: (
            <RxCrossCircled className="text-green" size={30}/>
          ),
          elite: (
            <RxCrossCircled className="text-green" size={30}/>
          )
        },
        {
          id: 194,
          title: "X-Rays",
          value:(
            <RxCrossCircled className="text-green" size={30}/>
          ) ,
          advantage: (
            <RxCrossCircled className="text-green" size={30}/>
          ),
          elite: (
            <RxCrossCircled className="text-green" size={30}/>
          )
        },
        {
          id: 194,
          title: "Peri-Apical",
          value:(
            <RxCrossCircled className="text-green" size={30}/>
          ) ,
          advantage: (
            <RxCrossCircled className="text-green" size={30}/>
          ),
          elite: (
            <RxCrossCircled className="text-green" size={30}/>
          )
        },
        {
          id: 195,
          title: "BiteWings",
          value:(
            <RxCrossCircled className="text-green" size={30}/>
          ) ,
          advantage: (
            <RxCrossCircled className="text-green" size={30}/>
          ),
          elite: (
            <RxCrossCircled className="text-green" size={30}/>
          )
        },
        {
          id: 196,
          title: "Simple Extraction",
          value:(
            <RxCrossCircled className="text-green" size={30}/>
          ) ,
          advantage: (
            <RxCrossCircled className="text-green" size={30}/>
          ),
          elite: (
            <RxCrossCircled className="text-green" size={30}/>
          )
        },
        {
          id: 197,
          title: "Amalgam Filling",
          value:(
            <RxCrossCircled className="text-green" size={30}/>
          ) ,
          advantage: (
            <RxCrossCircled className="text-green" size={30}/>
          ),
          elite: (
            <RxCrossCircled className="text-green" size={30}/>
          )
        },
        {
          id: 198,
          title: "Composite Filling/GIC Filling",
          value:(
            <RxCrossCircled className="text-green" size={30}/>
          ) ,
          advantage: (
            <RxCrossCircled className="text-green" size={30}/>
          ),
          elite: (
            <RxCrossCircled className="text-green" size={30}/>
          )
        },
        {
          id: 199,
          title: "ENT CARE (EAR,NOSE AND THROAT)-Included in Out-Patient Limit",
          value:"Up to annual surgery limit" ,
          advantage:"Up to annual surgery limit",
          elite: (
            <RxCrossCircled className="text-green" size={30}/>
          )
        },
        {
          id: 200,
          title: "Primary Ent Care-Including Consultation,Treatment of Primary Infection and Foreign Bodies",
          value:(
            <RxCrossCircled className="text-green" size={30}/>
          ) ,
          advantage: (
            <RxCrossCircled className="text-green" size={30}/>
          ),
          elite: (
            <RxCrossCircled className="text-green" size={30}/>
          )
        },
        {
          id: 201,
          title: "ENT Surgeries",
          value:"Up to annual surgery limit" ,
          advantage: "Up to annual surgery limit",
          elite: (
            <RxCrossCircled className="text-green" size={30}/>
          )
        },
        {
          id: 202,
          title: "TELEMEDICINE- APP - CHAT WITH A DOCTOR ONLINE 24/7",
          
        },
  ];

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full">
        <thead className="border border-collapse">
          <tr className="text-[20px] max-md:text-[12px]">
            <th className="text-left border border-collapse" style={{'width':'30%'}}>Package</th>
            <th style={{'width':'20%'}} className="border border-collapse">
              <p className="bg-catalineBlue text-white rounded-md px-3 max-md:py-1 py-2">
                Clear Value
              </p>
            </th>
            <th style={{'width':'20%'}} className="border border-collapse">
              <p className="bg-catalineBlue text-white rounded-md px-3 max-md:py-1 py-2">
                Clear Advantage
              </p>
            </th>
            <th style={{'width':'20%'}} className="border border-collapse">
              <p className="bg-catalineBlue text-white rounded-md px-3 max-md:py-1 py-2">
                Clear Elite
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableArray.map((clear, idx) => (
            <tr key={idx} className="h-[60px] text-[20px] max-md:text-[12px]">
              <td className="border border-collapse" >{clear.title}</td>
              <td className="pl-4 border border-collapse" >{clear.value}</td>
              <td className="pl-4 border border-collapse" >{clear.advantage}</td>
              <td className="pl-4 border border-collapse" >{clear.elite}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="border border-collapse">
            <td>EXCLUSIONS: (UNLESS OTHERWISE SPECIFICALLY STATED, THE FOLLOWING ARE EXCLUDED FROM THE BENEFIT PACKAGE)</td>
          </tr>
        </tfoot>
      </table>
      <div className="flex flex-col gap-3 mt-5">
        <div className="flex flex-col">
          <h3 className="font-bold mb-2">MORATORIUM PERIOD</h3>
            <div className="flex flex-col">
              <h4 className="font-semibold text-lg">Accessible from quarter 1</h4>
              <ul className="list-inside list-disc indent-6">
                  <li>Admissions And Accommodation</li>
                  <li>Specialist Consultation</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h4 className="font-semibold text-lg">Accessible from quarter 2</h4>
              <ul className="list-inside list-disc indent-6">
                  <li>Primary Dental Care</li>
                  <li>Physiotherapy Care</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h4 className="font-semibold text-lg">Accessible from quarter 3</h4>
              <ul className="list-inside list-disc indent-6">
                  <li>Eye Care</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h4 className="font-semibold text-lg">Accessible from quarter 5</h4>
              <ul className="list-inside list-disc indent-6">
                  <li>Sugeries</li>
              </ul>
            </div>

            <div className="flex flex-col mt-5">
              <h3 className="font-semibold text-lg uppercase">Policy Conditions</h3>
              <ul className="list-disc list-inside font-semibold">
                <li >The proposal is valid for 30 days which is effective from the date proposal is sent to the customer </li>
                <li>Waiting period of 2 weeks (14 days)</li>
                <li>The age limit on the plan is 60 years </li>
                <li>Maximum family size of 6 (principal, spouse and max . of 4 children) </li>
                <li>Discounts is granted based on family size a discount for family of 6 six and we also provide open networks of hospitals</li>
                <li>All benefits are subject to their respective sectional limits which are described as: Inpatient Limit and Outpatient Limit However, within the respective sectional limit, there are specific benefit limits as well. Consequently, in the event that any specific benefit limit under the sectional limit is exhausted, the remaining limit in that section will only cover other benefits within the section apart from the one that the specific benefit limit has been exhausted.</li>
                <li>
                The following benefits will not be covered or provided in the first year of the commencement of the scheme:  Surgeries. This period otherwise known as the waiting period shall commence on the date of entry to the date of renewal. On renewal, this benefit will be accessible provided the enrollee has been enrolled for one year with the HMO.
                </li>
                <li>
                The following benefits will not be covered or provided in the first 3 months of the commencement of the scheme: Optical Care, Dental Care, and Chronic Disease Medication.
                </li>
              </ul>
            </div>
            <div className="flex flex-col mt-5">
              <h3 className="font-semibold mb-2">Exclusions</h3>
              <ul className="list-inside list-disc font-semibold">
                <li>Cosmetic surgery or treatment</li>
                <li>Auto immune diseases</li>
                <li>Epidemic and Pandemic</li>
                <li>Domestic Violence</li>
                <li>Civil Disobedience</li>
                <li>Teeth whitening and Dental Prothesis</li>
                <li>Alternative /Un-orthodox medicine</li>
                <li>Domiciliary/Hospice care</li>
                <li>Self inflicted injuries</li>
                <li>Congenital abnormalities</li>
                <li>Orthodontics</li>
                <li>Infectious and contagious diseases in an epidemic</li>
                <li>Second opinion abroad/Refund of treatment abroad</li>
                <li>Services primarily for weight reduction or treatment of obesity</li>
                <li>Advanced and complex investigations (e.g., Marrow biopsy, skeletal survey)</li>
                <li>Prosthetic devices such as cardiac pacemaker, orthopaedic implants.</li>
                <li>Complex major surgeries (e.g., Heart, Brain and Great blood vessels)</li>
                <li>Professional Sports and wilful exposure to needless danger</li>
                <li>All procedures, management and investigations not written/stated and covered by the plan</li>
                <li>All types of dental or orthodontic cosmetic procedures including cost of consultation, examination, medication, procedures, follow-up visits</li>
                <li>Teeth whitening, Braces, Veneers, Aligners, Crowns, Tooth replacement,Cosmetic dental surgical and non-surgical procedures</li>
                <li>Any other treatment, service, procedure, or investigation not listed in the schedule of covered medical services</li>
              </ul>
            </div>
        </div>

      </div>
    </div>
  );
};

export default PackageTable;
