import Corporate from "@/components/product/PackageComponents/Corporate";
import {
  ResAlcohol,
  ResChildhood,
  ResCovid,
  ResHandWashing,
  ResHepatitis,
  ResImmune,
  ResSuperFood,
  ResWorkplace,
  hypertension,
} from "../../public/assets/images";
import Retail from "@/components/product/PackageComponents/Retail";
import Business from "@/components/product/PackageComponents/Sme";

export const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  { title: "About us", path: "/about" },
  { title: "Products", path: "/products" },
  { title: "Resources", path: "/resources" },
  { title: "Our providers", path: "/providers" },
];

export const healthData = [
  {
    title: "Retails",
    arr: [
      {
        title: "Silver",
        list: [
          "Cardiologist",
          "Cardiothoracic surgeon",
          "Dermatologist",
          "Dieticician/Nutritionist",
          "Endocrinologist",
          "ENT Surgeon",
          "FAMILY Physician",
          "Gastroenterologist",
        ],
      },
      {
        title: "Gold",
        list: [
          "Specialist consultation",
          "Dental care",
          "Investigation",
          "Surgeries",
          "⁠Medication",
          "Health screening",
          "Optical care",
          "Antenatal & Delivery",
        ],
        superb: true,
      },
      {
        title: "Bronze",
        list: [
          "Cardiologist",
          "Cardiothoracic surgeon",
          "Dermatologist",
          "Dieticician/Nutritionist",
          "Endocrinologist",
          "ENT Surgeon",
          "FAMILY Physician",
          "Gastroenterologist",
        ],
      },
    ],
  },
  {
    title: "Corporate",
    arr: [
      {
        title: "Family Silver",
        list: [
          "Cardiologist",
          "Cardiothoracic surgeon",
          "Dermatologist",
          "Dieticician/Nutritionist",
          "Endocrinologist",
          "ENT Surgeon",
          "FAMILY Physician",
          "Gastroenterologist",
        ],
      },
      {
        title: "Family Gold",
        list: [
          "Cardiologist",
          "Cardiothoracic surgeon",
          "Dermatologist",
          "Dieticician/Nutritionist",
          "Endocrinologist",
          "ENT Surgeon",
          "FAMILY Physician",
          "Gastroenterologist",
        ],
        superb: true,
      },
      {
        title: "Family Bronze",
        list: [
          "Cardiologist",
          "Cardiothoracic surgeon",
          "Dermatologist",
          "Dieticician/Nutritionist",
          "Endocrinologist",
          "ENT Surgeon",
          "FAMILY Physician",
          "Gastroenterologist",
        ],
      },
    ],
  },
  {
    title: "SME",
    arr: [
      {
        title: "Business Silver",
        list: [
          "Cardiologist",
          "Cardiothoracic surgeon",
          "Dermatologist",
          "Dieticician/Nutritionist",
          "Endocrinologist",
          "ENT Surgeon",
          "FAMILY Physician",
          "Gastroenterologist",
        ],
      },
      {
        title: "Business Gold",
        list: [
          "Cardiologist",
          "Cardiothoracic surgeon",
          "Dermatologist",
          "Dieticician/Nutritionist",
          "Endocrinologist",
          "ENT Surgeon",
          "FAMILY Physician",
          "Gastroenterologist",
        ],
        superb: true,
      },
      {
        title: "Business Bronze",
        list: [
          "Cardiologist",
          "Cardiothoracic surgeon",
          "Dermatologist",
          "Dieticician/Nutritionist",
          "Endocrinologist",
          "ENT Surgeon",
          "FAMILY Physician",
          "Gastroenterologist",
        ],
      },
    ],
  },
];
export const titleList=[
  { title: "-Select title-", value: "" },
  { title: "Mr", value: "mr" },
  { title: "Mrs", value: "mrs" },
  { title: "Ms", value: "ms" },
]
export const genderList=[
  { title: "-Select gender-", value: "" },
  { title: "Male", value: "male" },
  { title: "Female", value: "female" },
]
export const planList=[
  { title: "Choose plan", value: "" },
  { title: "Clear Value", value: "PLN_cnmgl4thoy5cgkq" },
  { title: "Clear Advantage", value: "PLN_y3tzlomkoceq311" },
  { title: "Clear Elite", value: "PLN_2tn2zm5e04dgl9j" }
]
export const packagePlans=[
    { title: "retail", component: <Retail /> },
    { title: "corporate", component: <Corporate /> },
    { title: "sme", component: <Business /> },
]
export const stateList=[
  {
    title:"-Select state-" ,
    value: "",
    id:""
  },
  {
    title: "Abia",
    value: "abia",
    id:3
  },
  {
    title: "Adamawa",
    value: "adamawa",
    id:4
  },
  {
    title: "Akwa Ibom",
    value: "akwa_ibom",
    id:5
  },
  {
    title: "Anambra",
    value: "anambra",
    id:6
  },
  {
    title: "Bauchi",
    value: "bauchi",
    id:7
  },
  {
    title: "Bayelsa",
    value: "bayelsa",
    id:8
  },
  {
    title: "Benue",
    value: "benue",
    id:9
  },
  {
    title: "Borno",
    value: "borno",
    id:10
  },
  {
    title: "Cross River",
    value: "cross_river",
    id:11
  },
  {
    title: "Delta",
    value: "delta",
    id:12
  },
  {
    title: "Ebonyi",
    value: "ebonyi",
    id:13
  },
  {
    title: "Edo",
    value: "edo",
    id:14
  },
  {
    title: "Ekiti",
    value: "ekiti",
    id:15
  },
  {
    title: "Enugu",
    value: "enugu",
    id:16
  },
  {
    title: "Gombe",
    value: "gombe",
    id:17
  },
  {
    title: "Imo",
    value: "imo",
    id:18
  },
  {
    title: "Jigawa",
    value: "jigawa",
    id:19
  },
  {
    title: "Kaduna",
    value: "kaduna",
    id:20
  },
  {
    title: "Kano",
    value: "kano",
    id:21
  },
  {
    title: "Katsina",
    value: "katsina",
    id:22
  },
  {
    title: "Kebbi",
    value: "kebbi",
    id:23
  },
  {
    title: "Kogi",
    value: "kogi",
    id:24
  },
  {
    title: "Kwara",
    value: "kwara",
    id:25
  },
  {
    title: "Lagos",
    value: "lagos",
    id:26
  },
  {
    title: "Nasarawa",
    value: "nasarawa",
    id:27
  },
  {
    title: "Niger",
    value: "niger",
    id:28
  },
  {
    title: "Ogun",
    value: "ogun",
    id:29
  },
  {
    title: "Ondo",
    value: "ondo",
    id:30
  },
  {
    title: "Osun",
    value: "osun",
    id:31
  },
  {
    title: "Oyo",
    value: "oyo",
    id:32
  },
  {
    title: "Plateau",
    value: "plateau",
    id:33
  },
  {
    title: "Rivers",
    value: "rivers",
    id:34
  },
  {
    title: "Sokoto",
    value: "sokoto",
    id:35
  },
  {
    title: "Taraba",
    value: "taraba",
    id:36
  },
  {
    title: "Yobe",
    value: "yobe",
    id:37
  },
  {
    title: "Zamfara",
    value: "zamfara",
    id:38
  },
  {
    title:'Abuja',
    value:'abuja',
    id:39
  }
]
export const countryList = [
  {
    name: "Afghanistan",
    code: "AF",
    timezone: "Afghanistan Standard Time",
    utc: "UTC+04:30",
    mobileCode: "+93",
  },
  {
    name: "Åland Islands",
    code: "AX",
    timezone: "FLE Standard Time",
    utc: "UTC+02:00",
    mobileCode: "+358-18",
  },
  {
    name: "Albania",
    code: "AL",
    timezone: "Central Europe Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+355",
  },
  {
    name: "Algeria",
    code: "DZ",
    timezone: "W. Central Africa Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+213",
  },
  {
    name: "American Samoa",
    code: "AS",
    timezone: "UTC-11",
    utc: "UTC-11:00",
    mobileCode: "+1-684",
  },
  {
    name: "Andorra",
    code: "AD",
    timezone: "W. Europe Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+376",
  },
  {
    name: "Angola",
    code: "AO",
    timezone: "W. Central Africa Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+244",
  },
  {
    name: "Anguilla",
    code: "AI",
    timezone: "SA Western Standard Time",
    utc: "UTC-04:00",
    mobileCode: "+1-264",
  },
  {
    name: "Antarctica",
    code: "AQ",
    timezone: "Pacific SA Standard Time",
    utc: "UTC-03:00",
    mobileCode: "+",
  },
  {
    name: "Antigua and Barbuda",
    code: "AG",
    timezone: "SA Western Standard Time",
    utc: "UTC-04:00",
    mobileCode: "+1-268",
  },
  {
    name: "Argentina",
    code: "AR",
    timezone: "Argentina Standard Time",
    utc: "UTC-03:00",
    mobileCode: "+54",
  },
  {
    name: "Armenia",
    code: "AM",
    timezone: "Caucasus Standard Time",
    utc: "UTC+04:00",
    mobileCode: "+374",
  },
  {
    name: "Aruba",
    code: "AW",
    timezone: "SA Western Standard Time",
    utc: "UTC-04:00",
    mobileCode: "+297",
  },
  {
    name: "Australia",
    code: "AU",
    timezone: "AUS Eastern Standard Time",
    utc: "UTC+10:00",
    mobileCode: "+61",
  },
  {
    name: "Austria",
    code: "AT",
    timezone: "W. Europe Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+43",
  },
  {
    name: "Azerbaijan",
    code: "AZ",
    timezone: "Azerbaijan Standard Time",
    utc: "UTC+04:00",
    mobileCode: "+994",
  },
  {
    name: "Bahamas, The",
    code: "BS",
    timezone: "Eastern Standard Time",
    utc: "UTC-05:00",
    mobileCode: "+1-242",
  },
  {
    name: "Bahrain",
    code: "BH",
    timezone: "Arab Standard Time",
    utc: "UTC+03:00",
    mobileCode: "+973",
  },
  {
    name: "Bangladesh",
    code: "BD",
    timezone: "Bangladesh Standard Time",
    utc: "UTC+06:00",
    mobileCode: "+880",
  },
  {
    name: "Barbados",
    code: "BB",
    timezone: "SA Western Standard Time",
    utc: "UTC-04:00",
    mobileCode: "+1-246",
  },
  {
    name: "Belarus",
    code: "BY",
    timezone: "Belarus Standard Time",
    utc: "UTC+03:00",
    mobileCode: "+375",
  },
  {
    name: "Belgium",
    code: "BE",
    timezone: "Romance Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+32",
  },
  {
    name: "Belize",
    code: "BZ",
    timezone: "Central America Standard Time",
    utc: "UTC-06:00",
    mobileCode: "+501",
  },
  {
    name: "Benin",
    code: "BJ",
    timezone: "W. Central Africa Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+229",
  },
  {
    name: "Bermuda",
    code: "BM",
    timezone: "Atlantic Standard Time",
    utc: "UTC-04:00",
    mobileCode: "+1-441",
  },
  {
    name: "Bhutan",
    code: "BT",
    timezone: "Bangladesh Standard Time",
    utc: "UTC+06:00",
    mobileCode: "+975",
  },
  {
    name: "Bolivarian Republic of Venezuela",
    code: "VE",
    timezone: "Venezuela Standard Time",
    utc: "UTC-04:30",
    mobileCode: "+58",
  },
  {
    name: "Bolivia",
    code: "BO",
    timezone: "SA Western Standard Time",
    utc: "UTC-04:00",
    mobileCode: "+591",
  },
  {
    name: "Bonaire, Sint Eustatius and Saba",
    code: "BQ",
    timezone: "SA Western Standard Time",
    utc: "UTC-04:00",
    mobileCode: "+599",
  },
  {
    name: "Bosnia and Herzegovina",
    code: "BA",
    timezone: "Central European Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+387",
  },
  {
    name: "Botswana",
    code: "BW",
    timezone: "South Africa Standard Time",
    utc: "UTC+02:00",
    mobileCode: "+267",
  },
  {
    name: "Bouvet Island",
    code: "BV",
    timezone: "UTC",
    utc: "UTC",
    mobileCode: "+",
  },
  {
    name: "Brazil",
    code: "BR",
    timezone: "E. South America Standard Time",
    utc: "UTC-03:00",
    mobileCode: "+55",
  },
  {
    name: "British Indian Ocean Territory",
    code: "IO",
    timezone: "Central Asia Standard Time",
    utc: "UTC+06:00",
    mobileCode: "+246",
  },
  {
    name: "Brunei",
    code: "BN",
    timezone: "Singapore Standard Time",
    utc: "UTC+08:00",
    mobileCode: "+673",
  },
  {
    name: "Bulgaria",
    code: "BG",
    timezone: "FLE Standard Time",
    utc: "UTC+02:00",
    mobileCode: "+359",
  },
  {
    name: "Burkina Faso",
    code: "BF",
    timezone: "Greenwich Standard Time",
    utc: "UTC",
    mobileCode: "+226",
  },
  {
    name: "Burundi",
    code: "BI",
    timezone: "South Africa Standard Time",
    utc: "UTC+02:00",
    mobileCode: "+257",
  },
  {
    name: "Cabo Verde",
    code: "CV",
    timezone: "Cape Verde Standard Time",
    utc: "UTC-01:00",
    mobileCode: "+238",
  },
  {
    name: "Cambodia",
    code: "KH",
    timezone: "SE Asia Standard Time",
    utc: "UTC+07:00",
    mobileCode: "+855",
  },
  {
    name: "Cameroon",
    code: "CM",
    timezone: "W. Central Africa Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+237",
  },
  {
    name: "Canada",
    code: "CA",
    timezone: "Eastern Standard Time",
    utc: "UTC-05:00",
    mobileCode: "+1",
  },
  {
    name: "Cayman Islands",
    code: "KY",
    timezone: "SA Pacific Standard Time",
    utc: "UTC-05:00",
    mobileCode: "+1-345",
  },
  {
    name: "Central African Republic",
    code: "CF",
    timezone: "W. Central Africa Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+236",
  },
  {
    name: "Chad",
    code: "TD",
    timezone: "W. Central Africa Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+235",
  },
  {
    name: "Chile",
    code: "CL",
    timezone: "Pacific SA Standard Time",
    utc: "UTC-03:00",
    mobileCode: "+56",
  },
  {
    name: "China",
    code: "CN",
    timezone: "China Standard Time",
    utc: "UTC+08:00",
    mobileCode: "+86",
  },
  {
    name: "Christmas Island",
    code: "CX",
    timezone: "SE Asia Standard Time",
    utc: "UTC+07:00",
    mobileCode: "+61",
  },
  {
    name: "Cocos (Keeling) Islands",
    code: "CC",
    timezone: "Myanmar Standard Time",
    utc: "UTC+06:30",
    mobileCode: "+61",
  },
  {
    name: "Colombia",
    code: "CO",
    timezone: "SA Pacific Standard Time",
    utc: "UTC-05:00",
    mobileCode: "+57",
  },
  {
    name: "Comoros",
    code: "KM",
    timezone: "E. Africa Standard Time",
    utc: "UTC+03:00",
    mobileCode: "+269",
  },
  {
    name: "Congo",
    code: "CG",
    timezone: "W. Central Africa Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+242",
  },
  {
    name: "Congo (DRC)",
    code: "CD",
    timezone: "W. Central Africa Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+243",
  },
  {
    name: "Cook Islands",
    code: "CK",
    timezone: "Hawaiian Standard Time",
    utc: "UTC-10:00",
    mobileCode: "+682",
  },
  {
    name: "Costa Rica",
    code: "CR",
    timezone: "Central America Standard Time",
    utc: "UTC-06:00",
    mobileCode: "+506",
  },
  {
    name: "Côte d'Ivoire",
    code: "CI",
    timezone: "Greenwich Standard Time",
    utc: "UTC",
    mobileCode: "+225",
  },
  {
    name: "Croatia",
    code: "HR",
    timezone: "Central European Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+385",
  },
  {
    name: "Cuba",
    code: "CU",
    timezone: "Eastern Standard Time",
    utc: "UTC-05:00",
    mobileCode: "+53",
  },
  {
    name: "Curaçao",
    code: "CW",
    timezone: "SA Western Standard Time",
    utc: "UTC-04:00",
    mobileCode: "+599",
  },
  {
    name: "Cyprus",
    code: "CY",
    timezone: "E. Europe Standard Time",
    utc: "UTC+02:00",
    mobileCode: "+357",
  },
  {
    name: "Czech Republic",
    code: "CZ",
    timezone: "Central Europe Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+420",
  },
  {
    name: "Democratic Republic of Timor-Leste",
    code: "TL",
    timezone: "Tokyo Standard Time",
    utc: "UTC+09:00",
    mobileCode: "+670",
  },
  {
    name: "Denmark",
    code: "DK",
    timezone: "Romance Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+45",
  },
  {
    name: "Djibouti",
    code: "DJ",
    timezone: "E. Africa Standard Time",
    utc: "UTC+03:00",
    mobileCode: "+253",
  },
  {
    name: "Dominica",
    code: "DM",
    timezone: "SA Western Standard Time",
    utc: "UTC-04:00",
    mobileCode: "+1-767",
  },
  {
    name: "Dominican Republic",
    code: "DO",
    timezone: "SA Western Standard Time",
    utc: "UTC-04:00",
    mobileCode: "+1-809 and 1-829",
  },
  {
    name: "Ecuador",
    code: "EC",
    timezone: "SA Pacific Standard Time",
    utc: "UTC-05:00",
    mobileCode: "+593",
  },
  {
    name: "Egypt",
    code: "EG",
    timezone: "Egypt Standard Time",
    utc: "UTC+02:00",
    mobileCode: "+20",
  },
  {
    name: "El Salvador",
    code: "SV",
    timezone: "Central America Standard Time",
    utc: "UTC-06:00",
    mobileCode: "+503",
  },
  {
    name: "Equatorial Guinea",
    code: "GQ",
    timezone: "W. Central Africa Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+240",
  },
  {
    name: "Eritrea",
    code: "ER",
    timezone: "E. Africa Standard Time",
    utc: "UTC+03:00",
    mobileCode: "+291",
  },
  {
    name: "Estonia",
    code: "EE",
    timezone: "FLE Standard Time",
    utc: "UTC+02:00",
    mobileCode: "+372",
  },
  {
    name: "Ethiopia",
    code: "ET",
    timezone: "E. Africa Standard Time",
    utc: "UTC+03:00",
    mobileCode: "+251",
  },
  {
    name: "Falkland Islands (Islas Malvinas)",
    code: "FK",
    timezone: "SA Eastern Standard Time",
    utc: "UTC-03:00",
    mobileCode: "+500",
  },
  {
    name: "Faroe Islands",
    code: "FO",
    timezone: "GMT Standard Time",
    utc: "UTC",
    mobileCode: "+298",
  },
  {
    name: "Fiji Islands",
    code: "FJ",
    timezone: "Fiji Standard Time",
    utc: "UTC+12:00",
    mobileCode: "+679",
  },
  {
    name: "Finland",
    code: "FI",
    timezone: "FLE Standard Time",
    utc: "UTC+02:00",
    mobileCode: "+358",
  },
  {
    name: "France",
    code: "FR",
    timezone: "Romance Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+33",
  },
  {
    name: "French Guiana",
    code: "GF",
    timezone: "SA Eastern Standard Time",
    utc: "UTC-03:00",
    mobileCode: "+594",
  },
  {
    name: "French Polynesia",
    code: "PF",
    timezone: "Hawaiian Standard Time",
    utc: "UTC-10:00",
    mobileCode: "+689",
  },
  {
    name: "French Southern and Antarctic Lands",
    code: "TF",
    timezone: "West Asia Standard Time",
    utc: "UTC+05:00",
    mobileCode: "+",
  },
  {
    name: "Gabon",
    code: "GA",
    timezone: "W. Central Africa Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+241",
  },
  {
    name: "Gambia, The",
    code: "GM",
    timezone: "Greenwich Standard Time",
    utc: "UTC",
    mobileCode: "+220",
  },
  {
    name: "Georgia",
    code: "GE",
    timezone: "Georgian Standard Time",
    utc: "UTC+04:00",
    mobileCode: "+995",
  },
  {
    name: "Germany",
    code: "DE",
    timezone: "W. Europe Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+49",
  },
  {
    name: "Ghana",
    code: "GH",
    timezone: "Greenwich Standard Time",
    utc: "UTC",
    mobileCode: "+233",
  },
  {
    name: "Gibraltar",
    code: "GI",
    timezone: "W. Europe Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+350",
  },
  {
    name: "Greece",
    code: "GR",
    timezone: "GTB Standard Time",
    utc: "UTC+02:00",
    mobileCode: "+30",
  },
  {
    name: "Greenland",
    code: "GL",
    timezone: "Greenland Standard Time",
    utc: "UTC-03:00",
    mobileCode: "+299",
  },
  {
    name: "Grenada",
    code: "GD",
    timezone: "SA Western Standard Time",
    utc: "UTC-04:00",
    mobileCode: "+1-473",
  },
  {
    name: "Guadeloupe",
    code: "GP",
    timezone: "SA Western Standard Time",
    utc: "UTC-04:00",
    mobileCode: "+590",
  },
  {
    name: "Guam",
    code: "GU",
    timezone: "West Pacific Standard Time",
    utc: "UTC+10:00",
    mobileCode: "+1-671",
  },
  {
    name: "Guatemala",
    code: "GT",
    timezone: "Central America Standard Time",
    utc: "UTC-06:00",
    mobileCode: "+502",
  },
  {
    name: "Guernsey",
    code: "GG",
    timezone: "GMT Standard Time",
    utc: "UTC",
    mobileCode: "+44-1481",
  },
  {
    name: "Guinea",
    code: "GN",
    timezone: "Greenwich Standard Time",
    utc: "UTC",
    mobileCode: "+224",
  },
  {
    name: "Guinea-Bissau",
    code: "GW",
    timezone: "Greenwich Standard Time",
    utc: "UTC",
    mobileCode: "+245",
  },
  {
    name: "Guyana",
    code: "GY",
    timezone: "SA Western Standard Time",
    utc: "UTC-04:00",
    mobileCode: "+592",
  },
  {
    name: "Haiti",
    code: "HT",
    timezone: "Eastern Standard Time",
    utc: "UTC-05:00",
    mobileCode: "+509",
  },
  {
    name: "Heard Island and McDonald Islands",
    code: "HM",
    timezone: "Mauritius Standard Time",
    utc: "UTC+04:00",
    mobileCode: "+ ",
  },
  {
    name: "Honduras",
    code: "HN",
    timezone: "Central America Standard Time",
    utc: "UTC-06:00",
    mobileCode: "+504",
  },
  {
    name: "Hong Kong SAR",
    code: "HK",
    timezone: "China Standard Time",
    utc: "UTC+08:00",
    mobileCode: "+852",
  },
  {
    name: "Hungary",
    code: "HU",
    timezone: "Central Europe Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+36",
  },
  {
    name: "Iceland",
    code: "IS",
    timezone: "Greenwich Standard Time",
    utc: "UTC",
    mobileCode: "+354",
  },
  {
    name: "India",
    code: "IN",
    timezone: "India Standard Time",
    utc: "UTC+05:30",
    mobileCode: "+91",
  },
  {
    name: "Indonesia",
    code: "ID",
    timezone: "SE Asia Standard Time",
    utc: "UTC+07:00",
    mobileCode: "+62",
  },
  {
    name: "Iran",
    code: "IR",
    timezone: "Iran Standard Time",
    utc: "UTC+03:30",
    mobileCode: "+98",
  },
  {
    name: "Iraq",
    code: "IQ",
    timezone: "Arabic Standard Time",
    utc: "UTC+03:00",
    mobileCode: "+964",
  },
  {
    name: "Ireland",
    code: "IE",
    timezone: "GMT Standard Time",
    utc: "UTC",
    mobileCode: "+353",
  },
  {
    name: "Israel",
    code: "IL",
    timezone: "Israel Standard Time",
    utc: "UTC+02:00",
    mobileCode: "+972",
  },
  {
    name: "Italy",
    code: "IT",
    timezone: "W. Europe Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+39",
  },
  {
    name: "Jamaica",
    code: "JM",
    timezone: "SA Pacific Standard Time",
    utc: "UTC-05:00",
    mobileCode: "+1-876",
  },
  {
    name: "Jan Mayen",
    code: "SJ",
    timezone: "W. Europe Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+47",
  },
  {
    name: "Japan",
    code: "JP",
    timezone: "Tokyo Standard Time",
    utc: "UTC+09:00",
    mobileCode: "+81",
  },
  {
    name: "Jersey",
    code: "JE",
    timezone: "GMT Standard Time",
    utc: "UTC",
    mobileCode: "+44-1534",
  },
  {
    name: "Jordan",
    code: "JO",
    timezone: "Jordan Standard Time",
    utc: "UTC+02:00",
    mobileCode: "+962",
  },
  {
    name: "Kazakhstan",
    code: "KZ",
    timezone: "Central Asia Standard Time",
    utc: "UTC+06:00",
    mobileCode: "+7",
  },
  {
    name: "Kenya",
    code: "KE",
    timezone: "E. Africa Standard Time",
    utc: "UTC+03:00",
    mobileCode: "+254",
  },
  {
    name: "Kiribati",
    code: "KI",
    timezone: "UTC+12",
    utc: "UTC+12:00",
    mobileCode: "+686",
  },
  {
    name: "Korea",
    code: "KR",
    timezone: "Korea Standard Time",
    utc: "UTC+09:00",
    mobileCode: "+82",
  },
  {
    name: "Kosovo",
    code: "XK",
    timezone: "Central European Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+",
  },
  {
    name: "Kuwait",
    code: "KW",
    timezone: "Arab Standard Time",
    utc: "UTC+03:00",
    mobileCode: "+965",
  },
  {
    name: "Kyrgyzstan",
    code: "KG",
    timezone: "Central Asia Standard Time",
    utc: "UTC+06:00",
    mobileCode: "+996",
  },
  {
    name: "Laos",
    code: "LA",
    timezone: "SE Asia Standard Time",
    utc: "UTC+07:00",
    mobileCode: "+856",
  },
  {
    name: "Latvia",
    code: "LV",
    timezone: "FLE Standard Time",
    utc: "UTC+02:00",
    mobileCode: "+371",
  },
  {
    name: "Lebanon",
    code: "LB",
    timezone: "Middle East Standard Time",
    utc: "UTC+02:00",
    mobileCode: "+961",
  },
  {
    name: "Lesotho",
    code: "LS",
    timezone: "South Africa Standard Time",
    utc: "UTC+02:00",
    mobileCode: "+266",
  },
  {
    name: "Liberia",
    code: "LR",
    timezone: "Greenwich Standard Time",
    utc: "UTC",
    mobileCode: "+231",
  },
  {
    name: "Libya",
    code: "LY",
    timezone: "E. Europe Standard Time",
    utc: "UTC+02:00",
    mobileCode: "+218",
  },
  {
    name: "Liechtenstein",
    code: "LI",
    timezone: "W. Europe Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+423",
  },
  {
    name: "Lithuania",
    code: "LT",
    timezone: "FLE Standard Time",
    utc: "UTC+02:00",
    mobileCode: "+370",
  },
  {
    name: "Luxembourg",
    code: "LU",
    timezone: "W. Europe Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+352",
  },
  {
    name: "Macao SAR",
    code: "MO",
    timezone: "China Standard Time",
    utc: "UTC+08:00",
    mobileCode: "+853",
  },
  {
    name: "Macedonia, Former Yugoslav Republic of",
    code: "MK",
    timezone: "Central European Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+389",
  },
  {
    name: "Madagascar",
    code: "MG",
    timezone: "E. Africa Standard Time",
    utc: "UTC+03:00",
    mobileCode: "+261",
  },
  {
    name: "Malawi",
    code: "MW",
    timezone: "South Africa Standard Time",
    utc: "UTC+02:00",
    mobileCode: "+265",
  },
  {
    name: "Malaysia",
    code: "MY",
    timezone: "Singapore Standard Time",
    utc: "UTC+08:00",
    mobileCode: "+60",
  },
  {
    name: "Maldives",
    code: "MV",
    timezone: "West Asia Standard Time",
    utc: "UTC+05:00",
    mobileCode: "+960",
  },
  {
    name: "Mali",
    code: "ML",
    timezone: "Greenwich Standard Time",
    utc: "UTC",
    mobileCode: "+223",
  },
  {
    name: "Malta",
    code: "MT",
    timezone: "W. Europe Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+356",
  },
  {
    name: "Man, Isle of",
    code: "IM",
    timezone: "GMT Standard Time",
    utc: "UTC",
    mobileCode: "+44-1624",
  },
  {
    name: "Marshall Islands",
    code: "MH",
    timezone: "UTC+12",
    utc: "UTC+12:00",
    mobileCode: "+692",
  },
  {
    name: "Martinique",
    code: "MQ",
    timezone: "SA Western Standard Time",
    utc: "UTC-04:00",
    mobileCode: "+596",
  },
  {
    name: "Mauritania",
    code: "MR",
    timezone: "Greenwich Standard Time",
    utc: "UTC",
    mobileCode: "+222",
  },
  {
    name: "Mauritius",
    code: "MU",
    timezone: "Mauritius Standard Time",
    utc: "UTC+04:00",
    mobileCode: "+230",
  },
  {
    name: "Mayotte",
    code: "YT",
    timezone: "E. Africa Standard Time",
    utc: "UTC+03:00",
    mobileCode: "+262",
  },
  {
    name: "Mexico",
    code: "MX",
    timezone: "Central Standard Time (Mexico)",
    utc: "UTC-06:00",
    mobileCode: "+52",
  },
  {
    name: "Micronesia",
    code: "FM",
    timezone: "West Pacific Standard Time",
    utc: "UTC+10:00",
    mobileCode: "+691",
  },
  {
    name: "Moldova",
    code: "MD",
    timezone: "GTB Standard Time",
    utc: "UTC+02:00",
    mobileCode: "+373",
  },
  {
    name: "Monaco",
    code: "MC",
    timezone: "W. Europe Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+377",
  },
  {
    name: "Mongolia",
    code: "MN",
    timezone: "Ulaanbaatar Standard Time",
    utc: "UTC+08:00",
    mobileCode: "+976",
  },
  {
    name: "Montenegro",
    code: "ME",
    timezone: "Central European Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+382",
  },
  {
    name: "Montserrat",
    code: "MS",
    timezone: "SA Western Standard Time",
    utc: "UTC-04:00",
    mobileCode: "+1-664",
  },
  {
    name: "Morocco",
    code: "MA",
    timezone: "Morocco Standard Time",
    utc: "UTC",
    mobileCode: "+212",
  },
  {
    name: "Mozambique",
    code: "MZ",
    timezone: "South Africa Standard Time",
    utc: "UTC+02:00",
    mobileCode: "+258",
  },
  {
    name: "Myanmar",
    code: "MM",
    timezone: "Myanmar Standard Time",
    utc: "UTC+06:30",
    mobileCode: "+95",
  },
  {
    name: "Namibia",
    code: "NA",
    timezone: "Namibia Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+264",
  },
  {
    name: "Nauru",
    code: "NR",
    timezone: "UTC+12",
    utc: "UTC+12:00",
    mobileCode: "+674",
  },
  {
    name: "Nepal",
    code: "NP",
    timezone: "Nepal Standard Time",
    utc: "UTC+05:45",
    mobileCode: "+977",
  },
  {
    name: "Netherlands",
    code: "NL",
    timezone: "W. Europe Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+31",
  },
  {
    name: "New Caledonia",
    code: "NC",
    timezone: "Central Pacific Standard Time",
    utc: "UTC+11:00",
    mobileCode: "+687",
  },
  {
    name: "New Zealand",
    code: "NZ",
    timezone: "New Zealand Standard Time",
    utc: "UTC+12:00",
    mobileCode: "+64",
  },
  {
    name: "Nicaragua",
    code: "NI",
    timezone: "Central America Standard Time",
    utc: "UTC-06:00",
    mobileCode: "+505",
  },
  {
    name: "Niger",
    code: "NE",
    timezone: "W. Central Africa Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+227",
  },
  {
    name: "Nigeria",
    code: "NG",
    timezone: "W. Central Africa Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+234",
  },
  {
    name: "Niue",
    code: "NU",
    timezone: "UTC-11",
    utc: "UTC-11:00",
    mobileCode: "+683",
  },
  {
    name: "Norfolk Island",
    code: "NF",
    timezone: "Central Pacific Standard Time",
    utc: "UTC+11:00",
    mobileCode: "+672",
  },
  {
    name: "North Korea",
    code: "KP",
    timezone: "Korea Standard Time",
    utc: "UTC+09:00",
    mobileCode: "+850",
  },
  {
    name: "Northern Mariana Islands",
    code: "MP",
    timezone: "West Pacific Standard Time",
    utc: "UTC+10:00",
    mobileCode: "+1-670",
  },
  {
    name: "Norway",
    code: "NO",
    timezone: "W. Europe Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+47",
  },
  {
    name: "Oman",
    code: "OM",
    timezone: "Arabian Standard Time",
    utc: "UTC+04:00",
    mobileCode: "+968",
  },
  {
    name: "Pakistan",
    code: "PK",
    timezone: "Pakistan Standard Time",
    utc: "UTC+05:00",
    mobileCode: "+92",
  },
  {
    name: "Palau",
    code: "PW",
    timezone: "Tokyo Standard Time",
    utc: "UTC+09:00",
    mobileCode: "+680",
  },
  {
    name: "Palestinian Authority",
    code: "PS",
    timezone: "Egypt Standard Time",
    utc: "UTC+02:00",
    mobileCode: "+970",
  },
  {
    name: "Panama",
    code: "PA",
    timezone: "SA Pacific Standard Time",
    utc: "UTC-05:00",
    mobileCode: "+507",
  },
  {
    name: "Papua New Guinea",
    code: "PG",
    timezone: "West Pacific Standard Time",
    utc: "UTC+10:00",
    mobileCode: "+675",
  },
  {
    name: "Paraguay",
    code: "PY",
    timezone: "Paraguay Standard Time",
    utc: "UTC-04:00",
    mobileCode: "+595",
  },
  {
    name: "Peru",
    code: "PE",
    timezone: "SA Pacific Standard Time",
    utc: "UTC-05:00",
    mobileCode: "+51",
  },
  {
    name: "Philippines",
    code: "PH",
    timezone: "Singapore Standard Time",
    utc: "UTC+08:00",
    mobileCode: "+63",
  },
  {
    name: "Pitcairn Islands",
    code: "PN",
    timezone: "Pacific Standard Time",
    utc: "UTC-08:00",
    mobileCode: "+870",
  },
  {
    name: "Poland",
    code: "PL",
    timezone: "Central European Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+48",
  },
  {
    name: "Portugal",
    code: "PT",
    timezone: "GMT Standard Time",
    utc: "UTC",
    mobileCode: "+351",
  },
  {
    name: "Puerto Rico",
    code: "PR",
    timezone: "SA Western Standard Time",
    utc: "UTC-04:00",
    mobileCode: "+1-787 and 1-939",
  },
  {
    name: "Qatar",
    code: "QA",
    timezone: "Arab Standard Time",
    utc: "UTC+03:00",
    mobileCode: "+974",
  },
  {
    name: "Reunion",
    code: "RE",
    timezone: "Mauritius Standard Time",
    utc: "UTC+04:00",
    mobileCode: "+262",
  },
  {
    name: "Romania",
    code: "RO",
    timezone: "GTB Standard Time",
    utc: "UTC+02:00",
    mobileCode: "+40",
  },
  {
    name: "Russia",
    code: "RU",
    timezone: "Russian Standard Time",
    utc: "UTC+03:00",
    mobileCode: "+7",
  },
  {
    name: "Rwanda",
    code: "RW",
    timezone: "South Africa Standard Time",
    utc: "UTC+02:00",
    mobileCode: "+250",
  },
  {
    name: "Saint Barthélemy",
    code: "BL",
    timezone: "SA Western Standard Time",
    utc: "UTC-04:00",
    mobileCode: "+590",
  },
  {
    name: "Saint Helena, Ascension and Tristan da Cunha",
    code: "SH",
    timezone: "Greenwich Standard Time",
    utc: "UTC",
    mobileCode: "+290",
  },
  {
    name: "Saint Kitts and Nevis",
    code: "KN",
    timezone: "SA Western Standard Time",
    utc: "UTC-04:00",
    mobileCode: "+1-869",
  },
  {
    name: "Saint Lucia",
    code: "LC",
    timezone: "SA Western Standard Time",
    utc: "UTC-04:00",
    mobileCode: "+1-758",
  },
  {
    name: "Saint Martin (French part)",
    code: "MF",
    timezone: "SA Western Standard Time",
    utc: "UTC-04:00",
    mobileCode: "+590",
  },
  {
    name: "Saint Pierre and Miquelon",
    code: "PM",
    timezone: "Greenland Standard Time",
    utc: "UTC-03:00",
    mobileCode: "+508",
  },
  {
    name: "Saint Vincent and the Grenadines",
    code: "VC",
    timezone: "SA Western Standard Time",
    utc: "UTC-04:00",
    mobileCode: "+1-784",
  },
  {
    name: "Samoa",
    code: "WS",
    timezone: "Samoa Standard Time",
    utc: "UTC+13:00",
    mobileCode: "+685",
  },
  {
    name: "San Marino",
    code: "SM",
    timezone: "W. Europe Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+378",
  },
  {
    name: "São Tomé and Príncipe",
    code: "ST",
    timezone: "Greenwich Standard Time",
    utc: "UTC",
    mobileCode: "+239",
  },
  {
    name: "Saudi Arabia",
    code: "SA",
    timezone: "Arab Standard Time",
    utc: "UTC+03:00",
    mobileCode: "+966",
  },
  {
    name: "Senegal",
    code: "SN",
    timezone: "Greenwich Standard Time",
    utc: "UTC",
    mobileCode: "+221",
  },
  {
    name: "Serbia",
    code: "RS",
    timezone: "Central Europe Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+381",
  },
  {
    name: "Seychelles",
    code: "SC",
    timezone: "Mauritius Standard Time",
    utc: "UTC+04:00",
    mobileCode: "+248",
  },
  {
    name: "Sierra Leone",
    code: "SL",
    timezone: "Greenwich Standard Time",
    utc: "UTC",
    mobileCode: "+232",
  },
  {
    name: "Singapore",
    code: "SG",
    timezone: "Singapore Standard Time",
    utc: "UTC+08:00",
    mobileCode: "+65",
  },
  {
    name: "Sint Maarten (Dutch part)",
    code: "SX",
    timezone: "SA Western Standard Time",
    utc: "UTC-04:00",
    mobileCode: "+599",
  },
  {
    name: "Slovakia",
    code: "SK",
    timezone: "Central Europe Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+421",
  },
  {
    name: "Slovenia",
    code: "SI",
    timezone: "Central Europe Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+386",
  },
  {
    name: "Solomon Islands",
    code: "SB",
    timezone: "Central Pacific Standard Time",
    utc: "UTC+11:00",
    mobileCode: "+677",
  },
  {
    name: "Somalia",
    code: "SO",
    timezone: "E. Africa Standard Time",
    utc: "UTC+03:00",
    mobileCode: "+252",
  },
  {
    name: "South Africa",
    code: "ZA",
    timezone: "South Africa Standard Time",
    utc: "UTC+02:00",
    mobileCode: "+27",
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    code: "GS",
    timezone: "UTC-02",
    utc: "UTC-02:00",
    mobileCode: "+",
  },
  {
    name: "South Sudan",
    code: "SS",
    timezone: "E. Africa Standard Time",
    utc: "UTC+03:00",
    mobileCode: "+211",
  },
  {
    name: "Spain",
    code: "ES",
    timezone: "Romance Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+34",
  },
  {
    name: "Sri Lanka",
    code: "LK",
    timezone: "Sri Lanka Standard Time",
    utc: "UTC+05:30",
    mobileCode: "+94",
  },
  {
    name: "Sudan",
    code: "SD",
    timezone: "E. Africa Standard Time",
    utc: "UTC+03:00",
    mobileCode: "+249",
  },
  {
    name: "Suriname",
    code: "SR",
    timezone: "SA Eastern Standard Time",
    utc: "UTC-03:00",
    mobileCode: "+597",
  },
  {
    name: "Svalbard",
    code: "SJ",
    timezone: "W. Europe Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+47",
  },
  {
    name: "Swaziland",
    code: "SZ",
    timezone: "South Africa Standard Time",
    utc: "UTC+02:00",
    mobileCode: "+268",
  },
  {
    name: "Sweden",
    code: "SE",
    timezone: "W. Europe Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+46",
  },
  {
    name: "Switzerland",
    code: "CH",
    timezone: "W. Europe Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+41",
  },
  {
    name: "Syria",
    code: "SY",
    timezone: "Syria Standard Time",
    utc: "UTC+02:00",
    mobileCode: "+963",
  },
  {
    name: "Taiwan",
    code: "TW",
    timezone: "Taipei Standard Time",
    utc: "UTC+08:00",
    mobileCode: "+886",
  },
  {
    name: "Tajikistan",
    code: "TJ",
    timezone: "West Asia Standard Time",
    utc: "UTC+05:00",
    mobileCode: "+992",
  },
  {
    name: "Tanzania",
    code: "TZ",
    timezone: "E. Africa Standard Time",
    utc: "UTC+03:00",
    mobileCode: "+255",
  },
  {
    name: "Thailand",
    code: "TH",
    timezone: "SE Asia Standard Time",
    utc: "UTC+07:00",
    mobileCode: "+66",
  },
  {
    name: "Togo",
    code: "TG",
    timezone: "Greenwich Standard Time",
    utc: "UTC",
    mobileCode: "+228",
  },
  {
    name: "Tokelau",
    code: "TK",
    timezone: "Tonga Standard Time",
    utc: "UTC+13:00",
    mobileCode: "+690",
  },
  {
    name: "Tonga",
    code: "TO",
    timezone: "Tonga Standard Time",
    utc: "UTC+13:00",
    mobileCode: "+676",
  },
  {
    name: "Trinidad and Tobago",
    code: "TT",
    timezone: "SA Western Standard Time",
    utc: "UTC-04:00",
    mobileCode: "+1-868",
  },
  {
    name: "Tunisia",
    code: "TN",
    timezone: "W. Central Africa Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+216",
  },
  {
    name: "Turkey",
    code: "TR",
    timezone: "Turkey Standard Time",
    utc: "UTC+02:00",
    mobileCode: "+90",
  },
  {
    name: "Turkmenistan",
    code: "TM",
    timezone: "West Asia Standard Time",
    utc: "UTC+05:00",
    mobileCode: "+993",
  },
  {
    name: "Turks and Caicos Islands",
    code: "TC",
    timezone: "Eastern Standard Time",
    utc: "UTC-05:00",
    mobileCode: "+1-649",
  },
  {
    name: "Tuvalu",
    code: "TV",
    timezone: "UTC+12",
    utc: "UTC+12:00",
    mobileCode: "+688",
  },
  {
    name: "U.S. Minor Outlying Islands",
    code: "UM",
    timezone: "UTC-11",
    utc: "UTC-11:00",
    mobileCode: "+1",
  },
  {
    name: "Uganda",
    code: "UG",
    timezone: "E. Africa Standard Time",
    utc: "UTC+03:00",
    mobileCode: "+256",
  },
  {
    name: "Ukraine",
    code: "UA",
    timezone: "FLE Standard Time",
    utc: "UTC+02:00",
    mobileCode: "+380",
  },
  {
    name: "United Arab Emirates",
    code: "AE",
    timezone: "Arabian Standard Time",
    utc: "UTC+04:00",
    mobileCode: "+971",
  },
  {
    name: "United Kingdom",
    code: "GB",
    timezone: "GMT Standard Time",
    utc: "UTC",
    mobileCode: "+44",
  },
  {
    name: "United States",
    code: "US",
    timezone: "Pacific Standard Time",
    utc: "UTC-08:00",
    mobileCode: "+1",
  },
  {
    name: "Uruguay",
    code: "UY",
    timezone: "Montevideo Standard Time",
    utc: "UTC-03:00",
    mobileCode: "+598",
  },
  {
    name: "Uzbekistan",
    code: "UZ",
    timezone: "West Asia Standard Time",
    utc: "UTC+05:00",
    mobileCode: "+998",
  },
  {
    name: "Vanuatu",
    code: "VU",
    timezone: "Central Pacific Standard Time",
    utc: "UTC+11:00",
    mobileCode: "+678",
  },
  {
    name: "Vatican City",
    code: "VA",
    timezone: "W. Europe Standard Time",
    utc: "UTC+01:00",
    mobileCode: "+379",
  },
  {
    name: "Vietnam",
    code: "VN",
    timezone: "SE Asia Standard Time",
    utc: "UTC+07:00",
    mobileCode: "+84",
  },
  {
    name: "Virgin Islands, U.S.",
    code: "VI",
    timezone: "SA Western Standard Time",
    utc: "UTC-04:00",
    mobileCode: "+1-340",
  },
  {
    name: "Virgin Islands, British",
    code: "VG",
    timezone: "SA Western Standard Time",
    utc: "UTC-04:00",
    mobileCode: "+1-284",
  },
  {
    name: "Wallis and Futuna",
    code: "WF",
    timezone: "UTC+12",
    utc: "UTC+12:00",
    mobileCode: "+681",
  },
  {
    name: "Yemen",
    code: "YE",
    timezone: "Arab Standard Time",
    utc: "UTC+03:00",
    mobileCode: "+967",
  },
  {
    name: "Zambia",
    code: "ZM",
    timezone: "South Africa Standard Time",
    utc: "UTC+02:00",
    mobileCode: "+260",
  },
  {
    name: "Zimbabwe",
    code: "ZW",
    timezone: "South Africa Standard Time",
    utc: "UTC+02:00",
    mobileCode: "+263",
  },
];

export const resourcesData = [
  {
    title: "Hypertension",
    slug: "hypertension",
    subtitle: "Your Blood Presssure Kit: All you need to know about Hypertension",
    imageUrl: "bg-hypertension",
    img: hypertension,
    article: {
      imageUrl: "",
      didYouKnow: {
        title: "Your Blood Presssure Kit: All you need to know about Hypertension",
        list: [
          "Today, we bring you crucial information on hypertension—what you must know to keep your heart healthy and your life vibrant."
,
        ],
      },
      articleQuestion: "Understanding Hypertension",
      text1:
        "Hypertension, also known as high blood pressure, is a condition where the force of blood against the walls of your arteries is consistently too high. High blood pressure usually has no obvious symptoms, earning it the nickname “silent killer” because many people don’t realize they have it. Left unmanaged, hypertension can lead to serious health problems, including heart disease, stroke, and kidney failure.",
      text2:
        "",
      foodList: [
        {
          title: "Know Your Numbers",
          text: " Regular blood pressure checks are vital. A normal reading is typically around 120/80 mmHg. If your numbers are consistently higher, it's time to take action. Visit your nearest Clearline HMO health center for a quick and easy blood pressure check.",
        },
        {
          title: "Healthy Diet",
          text: "Embrace a diet rich in fruits, vegetables, whole grains, and lean proteins. Reduce salt intake as excessive sodium can raise your blood pressure.",
        },
        {
          title: "Exercise Regularly",
          text: "Aim for at least 30 minutes of moderate exercise most days of the week. Activities like brisk walking, dancing, or even playing football with friends can help lower your blood pressure.",
        },
        {
          title: "Maintain a Healthy Weight",
          text: "By telling them of your resolve not to drink alcohol again. Their support can get you going and also hold you accountable, so you do not turn back on your goal.",
        },
        {
          title: "Limit Alcohol and Avoid Tobacco",
          text: "Excessive alcohol and smoking can raise your blood pressure. If you drink, do so in moderation. Seek support if you need help to quit smoking — Clearline HMO is here to guide you.",
        },
        {
          title: "Manage Stress",
          text: "High stress levels can contribute to hypertension. Find relaxation techniques that work for you, whether it's meditation, deep breathing exercises, or simply taking time to unwind with loved ones",
        },
        {
          title: "Medication Adherence",
          text: "If you’ve been prescribed medication for hypertension, ensure you take it as directed. Don’t skip doses, and keep your doctor informed about any side effects.",
        },
        {
          title: "Why Should You Care?",
          text: "In Nigeria, hypertension is a leading cause of heart disease, stroke, and kidney failure. Our fast-paced lifestyle, coupled with poor eating habits and stress, has contributed to a surge in hypertension cases. Understanding and managing your blood pressure is crucial to preventing these life-threatening conditions.",
        },
      ],
    }, 
  },
  {
    title: "Super Food",
    slug: "super-food",
    subtitle: "Why you should eat",
    imageUrl: "bg-resSuperFood",
    img: ResSuperFood,
    article: {
      imageUrl: "",
      didYouKnow: {
        title: "Did You know?",
        list: [
          "Moringa is packed with antioxidants, that promote cell repair and boost immunity.",
          "Shoko leaves are high in fiber which aid digestion and help with weight management.",
          "Coconut water makes a great drink full of electrolytes which help to rehydrate the body at cellular level",
          "Studies have shown 2-3 servings of walnut a day can help to reduce cholesterol level and reduce the risk of heart disease.",
        ],
      },
      articleQuestion: "Why you should eat them",
      text1:
        "Superfoods, nutrient-packed powerhouses like berries, kale, and quinoa, are culinary superheroes promoting optimal health. Incorporating these nutrient-rich gems into your diet can enhance immunity, boost energy, and support overall well-being, making them a delicious investment in your long-term health.",
      text2:
        "Superfoods, nutrient-packed powerhouses like berries, kale, and quinoa, are culinary superheroes promoting optimal health. Incorporating these nutrient-rich gems into your diet can enhance immunity, boost energy, and support overall well-being, making them a delicious investment in your long-term health.",
      foodList: [
        {
          title: "Blueberries",
          text: "Packed with antioxidants and vitamins, they are low in calories and high in fiber.",
        },
        {
          title: "Avocado",
          text: "Rich in healthy monounsaturated fats, avocados offer a creamy texture and essential nutrients.",
        },
        {
          title: "Spinach",
          text: "A nutrient powerhouse, low in calories and high in vitamins like A, C, and K, as well as minerals.",
        },
        {
          title: "Quinoa",
          text: "A complete protein source, quinoa is high in fiber, vitamins, and minerals.",
        },
        {
          title: "Salmon",
          text: "A fatty fish that provides omega-3 fatty acids and high-quality protein.",
        },
        {
          title: "Kale",
          text: "A leafy green loaded with vitamins, minerals, and antioxidants, while being low in calories.",
        },
        {
          title: "Chia Seeds",
          text: "Packed with fiber, omega-3 fatty acids, and various micronutrients.",
        },
        {
          title: "Broccoli",
          text: "A cruciferous vegetable rich in vitamins, minerals, and antioxidants.",
        },
        {
          title: "Sweet Potatoes",
          text: "A nutrient-dense source of carbohydrates, vitamins, and fiber.",
        },
        {
          title: "Greek Yogurt",
          text: "High in protein, probiotics, and calcium, with relatively fewer calories compared to some alternatives.",
        },
      ],
    },
  },
  {
    title: "Alcoholism",
    slug: "alcoholism",
    subtitle: "How to Avoid/Moderate it",
    imageUrl: "bg-resAlcohol",
    img: ResAlcohol,
    article: {
      imageUrl: "",
      didYouKnow: {
        title: "Did You know?",
        list: [
          "Alcoholism is the leading cause of 3 million deaths worldwide annually.",
          "Alcoholism is a major contributing factor to over 200 diseases and injuries.",
          "It is better to avoid consuming alcohol altogether.",
        ],
      },
      articleQuestion: "How to Avoid Alcoholism?",
      text1:
        "Alcoholism is simply an alcohol addiction. It is a chronic disease that is characterized by one’s inability to control or stop their alcohol intake, regardless of the harmful consequences. When this disease is diagnosed, it is called alcohol use disorder (AUD). Aside from the negative consequences this disease has on the physical body, it also has a profound impact on the mental, professional, and social life of the individual with this problem. This means they will experience difficulty interacting with other individuals, including their loved ones, and will not be able to deliver well at their workplace, which can lead to their layoffs.",
      text2:
        "Thankfully, this condition can be treated if the addict can seek help immediately after recognizing the signs. Signs that show one might be suffering from alcoholism include increased tolerance to it, loss of interest in other activities, withdrawal symptoms, and continued consumption despite awareness of the negative effects due to their belief that they cannot function without it.",
      foodList: [
        {
          title: "Avoid hanging out at the bar",
          text: "I can imagine you rolling your eyes. This is a very obvious technique because more than half of the drinks served in these places are alcoholic, and there is no guarantee you won’t end up not drinking. So, if you want to hang out or socialize with friends and family, opt for activities like sporting activities that involve no drinking.",
        },
        {
          title: "Do not hang out with people that drink",
          text: "Hanging out with drinkers will definitely make you a drinker one day, no matter how disciplined you are.",
        },
        {
          title: "Keep yourself busy",
          text: "With activities like exercising or starting a new hobby. This will help distract you from picking up a bottle.",
        },
        {
          title: "Get support from friends and family",
          text: "By telling them of your resolve not to drink alcohol again. Their support can get you going and also hold you accountable, so you do not turn back on your goal.",
        },
        {
          title: "Know when to stop",
          text: "This requires you to set the maximum number of drinks you will consume on every occasion and ensure you stick to it. If you are having a hard time deciding what your maximum number of drinks will be, then you can adopt the moderate amount as pointed out earlier, and recognize the amount you can handle.",
        },
        {
          title: "Avoid binge drinking",
          text: "flying through drinks in one go at an alarming rate. Instead, you can alternate the alcohol with water or other non-alcoholic beverages. This will not only keep you hydrated (very necessary by the way as alcohol is very dehydrating to the body) but help you get full quickly which will prevent you from consuming too much alcohol.",
        },
        {
          title: "Do not have alcohol in your house",
          text: "This will help limit your alcohol intake, as having it on hand will encourage more consumption.",
        },
        {
          title: "Do not drink based on your emotions",
          text: "Drinking anytime you feel a negative feeling like sadness or depression can make you very dependent on alcohol, which won’t help you achieve your goal of consuming a moderate amount of alcohol. Another reason is that alcohol does not help your negative feelings; rather, it worsens them due to it being a depressant.",
        },
      ],
    },
  },
  {
    title: "Living with covid",
    slug: "living-with-covid",
    subtitle: "Put on your nose masks",
    imageUrl: "bg-resCovid",
    img: ResCovid,
    article: {
      imageUrl: "",
      didYouKnow: {
        title: "Did You know?",
        list: [
          "The COVID-19 virus survives for several days on surfaces.",
          "Some people with COVID-19 never show symptoms.",
          "You might have been infected with COVID-19 without ever knowing.",
          "A person cured of COVID-19 can still be re-infected.",
        ],
      },
      articleQuestion: "Why Face Masks?",
      text1:
        "In the wake of the COVID-19 pandemic, our global landscape underwent an unprecedented transformation. The outbreak, caused by the novel SARS-CoV-2 virus, caught the world off guard, leading to a swift declaration of a pandemic by the World Health Organization in March 2020.",
      text2:
        "As the virus rapidly spread across borders, our familiar way of life came to a sudden halt, leaving a profound   impact on countless lives. The gravity of the situation prompted the implementation of preventive measures, with one notable intervention being the widespread use of face masks. In this article, we’ll delve into the reason for the use of a face mask and how it should be worn properly.",
      foodList: [
        {
          title:
            "Before touching the face mask, ensure you wash your hands thoroughly with running water and soap.",
        },
        {
          title: "Ensure the face mask is new, clean, and free from any damage",
          text: "Avoid repeating the  face mask. If it is disposable, dispose of it after one use, and the cloth should be  washed immediately after one use",
        },
        {
          title: "Hold the mask by the ear loops or ties",
          text: "Do not touch the places that come in contact with your mouth and nose.",
        },
        {
          title: "Place the masks over your nose, mouth, and chin",
          text: "Adjust the facemask so that it covers your mouth, nose, and chin completely.",
        },
        {
          title:
            "Next, you secure the mask by placing the loops or tying the ties behind your ears, ensuring a snug fit.",
        },
        {
          title:
            "As you go on about your day, avoid touching your face mask. If you touch it, wash  your hands immediately.",
        },
        {
          title:
            "When you get back home, remove the mask by unhooking the loops or untying the ties. Please refrain from touching the front of the mask. Go ahead and get rid of the mask, either by disposing of it or washing it, based on the material it was made of.",
        },
        {
          title:
            "Wash your hands thoroughly after you’ve gotten rid of the face mask.",
        },
      ],
    },
  },
  {
    title: "Boosting your Immune system",
    slug: "boosting-your-immune-system",
    subtitle: "Eat healthy stay healthy",
    imageUrl: "bg-resImmune",
    img: ResImmune,
    article: {
      imageUrl: "",
      didYouKnow: {
        title: "Did You know?",
        list: [
          "Alcoholism is the leading cause of 3 million deaths worldwide annually.",
          "Alcoholism is a major contributing factor to over 200 diseases and injuries.",
          "It is better to avoid consuming alcohol altogether.",
        ],
      },
      articleQuestion: "How to Avoid Alcoholism?",
      text1:
        "Alcoholism is simply an alcohol addiction. It is a chronic disease that is characterized by one’s inability to control or stop their alcohol intake, regardless of the harmful consequences. When this disease is diagnosed, it is called alcohol use disorder (AUD). Aside from the negative consequences this disease has on the physical body, it also has a profound impact on the mental, professional, and social life of the individual with this problem. This means they will experience difficulty interacting with other individuals, including their loved ones, and will not be able to deliver well at their workplace, which can lead to their layoffs.",
      text2:
        "Thankfully, this condition can be treated if the addict can seek help immediately after recognizing the signs. Signs that show one might be suffering from alcoholism include increased tolerance to it, loss of interest in other activities, withdrawal symptoms, and continued consumption despite awareness of the negative effects due to their belief that they cannot function without it.",
      foodList: [
        {
          title: "Avoid hanging out at the bar",
          text: "I can imagine you rolling your eyes. This is a very obvious technique because more than half of the drinks served in these places are alcoholic, and there is no guarantee you won’t end up not drinking. So, if you want to hang out or socialize with friends and family, opt for activities like sporting activities that involve no drinking.",
        },
        {
          title: "Do not hang out with people that drink",
          text: "Hanging out with drinkers will definitely make you a drinker one day, no matter how disciplined you are.",
        },
        {
          title: "Keep yourself busy",
          text: "With activities like exercising or starting a new hobby. This will help distract you from picking up a bottle.",
        },
        {
          title: "Get support from friends and family",
          text: "By telling them of your resolve not to drink alcohol again. Their support can get you going and also hold you accountable, so you do not turn back on your goal.",
        },
        {
          title: "Know when to stop",
          text: "This requires you to set the maximum number of drinks you will consume on every occasion and ensure you stick to it. If you are having a hard time deciding what your maximum number of drinks will be, then you can adopt the moderate amount as pointed out earlier, and recognize the amount you can handle.",
        },
        {
          title: "Avoid binge drinking",
          text: "flying through drinks in one go at an alarming rate. Instead, you can alternate the alcohol with water or other non-alcoholic beverages. This will not only keep you hydrated (very necessary by the way as alcohol is very dehydrating to the body) but help you get full quickly which will prevent you from consuming too much alcohol.",
        },
        {
          title: "Do not have alcohol in your house",
          text: "This will help limit your alcohol intake, as having it on hand will encourage more consumption.",
        },
        {
          title: "Do not drink based on your emotions",
          text: "Drinking anytime you feel a negative feeling like sadness or depression can make you very dependent on alcohol, which won’t help you achieve your goal of consuming a moderate amount of alcohol. Another reason is that alcohol does not help your negative feelings; rather, it worsens them due to it being a depressant.",
        },
      ],
    },
  },
  {
    title: "Hand Washing",
    slug: "hand-washing",
    subtitle: "Wash your hand",
    imageUrl: "bg-resHandWashing",
    img: ResHandWashing,
    article: {
      didYouKnow: {
        title: "Did You know?",
        list: [
          "A million deaths can be avoided each year if everyone washed their hands frequently.",
          "After using the toilet, less than 75% of women and 50% of men wash their hands.",
        ],
      },
      articleQuestion: "When To Wash Your Hands",
      text1:
        "Hand washing is a very basic and easy habit that has a big impact on both your health and the health of others. Although this action may seem little to you, the Centre for Disease Control and Prevention (CDC) claims that it is a very effective means of reducing the spread of infectious diseases. Further research shows that washing your hands reduces your risk of getting respiratory illnesses like colds by 16-21%. In fact, this simple act was said to help prevent the spread of the virus that caused COVID-19. ",
      text2:
        "Frequent handwashing is crucial due to the ease with which harmful germs and bacteria can be transmitted into our bodies through our hands. Being the most utilized part of our body, hands are highly exposed to these pathogens through interpersonal interactions such as hugging, handshakes, and touches, as well as contact with contaminated surfaces like tables, door knobs, or railings.",
      foodList: [
        {
          title: "After using the toilet",
          text: "Many people are guilty of not washing their hands after using the toilet. Desist from this act! If you are outside and don’t have access to soap and water, then ensure you have hand sanitizer with at least 60% alcohol when you go out.",
        },
        {
          title: "After cleaning up your child who used the toilet",
          text: "Get them to also wash their hands. It’s never too early to instill good hygiene practices in them.",
        },
        {
          title: "Before, during and after preparing a meal",
          text: "This is very important to avoid contaminating the food you cooked to prevent food poisoning or diarrhea.",
        },
        {
          title: "Before and after eating your food",
          text: "Important for the same reason in number 2.",
        },
        {
          title: "After touching the dustbin.",
        },
        {
          title:
            "After you sneeze, cough, or blow your nose when you are sick, prevent transmitting it to another person.",
        },
        {
          title: "After handling money and receipts",
          text: "This is too important, especially the money part because you do not know where the money has been.",
        },
        {
          title: "Before and after touching your phone",
          text: "You should also use disinfectant wipes to clean your phone to eliminate germs that have settled on it.",
        },
      ],
      articleQuestion1: "How To Wash Your Hands Properly",
      foodList1: [
        {
          title: "Wet Your Hands",
          text: "Wet your hands by placing them under running, clean water.",
        },
        {
          title: "Apply Soap over Hands and Wrists",
          text: "Apply soap, either liquid or bar soap, over your hands and wrists.",
        },
        {
          title: "Lather and Scrub thoroughly",
          text: "Apply soap to your hands and wrists, lather, and thoroughly scrub. Ensure you scrub the front and back of your hands, in between fingers, the back of fingers, around each thumb, under fingernails, and around each wrist.",
        },
        {
          title: "Rinse",
          text: "Rinse your hands by placing them back under running water.",
        },
        {
          title: "Dry with Paper Towel or Tissue Paper",
          text: "Dry your hands with a paper towel or tissue, then dispose of it. If using a towel, ensure it's clean, as a used towel may harbor bacteria, undermining the purpose of washing.",
        },
      ],
    },
  },
  {
    title: "Workplace Ergonomics",
    slug: "workplace-ergonomics",
    subtitle: "Workplace Ergonomics",
    imageUrl: "bg-resWorkplace",
    img: ResWorkplace,
    article: {
      imageUrl: "",
      didYouKnow: {
        title: "Did You know?",
        list: [
          "The term 'ergonomics' was first coined in 1949 by a British scientist named Murrell L. Barrington. It comes from the Greek words 'ergon' (meaning work) and 'nomos' (meaning natural law).",
          "Sitting for too long is now the new smoking.",
          "Workplace ergonomics isn't just about physical health - it can also affect your mental well-being.",
          "Workplace injury is one of the most common injuries.",
        ],
      },
      articleQuestion: "Workplace Ergonomics Tips",
      text1:
        "In today's fast-paced world, most of us spend a significant amount of time sitting at our desks. While this may seem like a harmless activity, prolonged sitting can put a lot of stress on our bodies and lead to various health issues like lower back pain   and other musculoskeletal disorders. This is where workplace ergonomics comes in.",
      text2:
        "Ergonomics refers to the science of designing the workplace to fit the needs of employees. It aims to reduce the risk of injuries and illnesses by making the workplace more comfortable and efficient. This not only benefits the employees but also the employers, as employees are healthy and more productive at their work, which will reflect positively on the company’s performance..",
      foodList: [
        {
          title: "Adjust your chair and desk",
          text: "Make sure your chair and desk are at the right height and distance from each other. Your feet should be flat on the floor, and your arms should be at a 90-degree angle when typing.",
        },
        {
          title: "Take regular breaks",
          text: "Sitting for prolonged periods can cause stiffness and pain in your neck, shoulders, and back. Taking short breaks every 30 minutes or so can help you stretch your muscles and improve blood flow.",
        },
        {
          title: "Use proper lighting:",
          text: "Poor lighting can cause eye strain, headaches, and fatigue. Make sure your workspace is well-lit, and use task lighting if necessary",
        },
        {
          title: "Invest in ergonomic equipment",
          text: "Consider investing in an ergonomic keyboard, mouse, or standing desk to reduce strain on your wrists, arms, and back.",
        },
        {
          title: "Stay active",
          text: "Incorporate physical activity into your workday. Take a walk during your lunch break, use the stairs instead of the elevator, or do some stretches at your desk.",
        },
      ],
    },
  },
  {
    title: "Hepatitis",
    slug: "hepatitis",
    subtitle: "Stay safe",
    imageUrl: "bg-resHepatitis",
    img: ResHepatitis,
    article: {
      imageUrl: "",
      didYouKnow: {
        title: "Did You know?",
        list: [
          "Hepatitis is classified into two: viral and non-viral hepatitis.",
          "Viral hepatitis has 5 variants. They are A, B, C, D, and E.",
          "Hepatitis B and C can lead to chronic hepatitis, which can cause liver damage and even liver cancer.",
          "Hepatitis A and E are spread through contaminated food or water, while hepatitis B, C, and D are spread through blood-to-blood contact or sexual contact with an infected person.",
          "Over 300 million people globally live with viral hepatitis.",
          "Over 1.5 Million people die of viral hepatitis every year.",
        ],
      },
      articleQuestion: "How To Stay Safe?",
      text1:
        "Hepatitis is the inflammation of the liver. This inflammation is caused by various factors, including infectious viruses and non-infectious agents. The non-infectious agents that cause hepatitis include drugs, medicine, and excessive consumption of alcohol. This type of hepatitis caused by these non-infectious agents is referred to as non-viral hepatitis. On the other hand, the infectious viruses that cause hepatitis are A, B, C, D, and E. These varying strains of viruses cause hepatitis, but they are different in the way they are transmitted, the way they can be prevented, where they can be found, and their severity. Hepatitis caused by viruses is referred to as viral hepatitis, which is our focus in this article.",
      text2:
        "Viral hepatitis poses a significant threat to the world, affecting millions of people worldwide. If not handled or taken care of properly, this condition can lead to severe complications like cirrhosis and liver cancer which can lead to death. This makes it very crucial for everyone to adopt measures that promote prevention and overall well-being. Keep reading to find out measures to protect you and your community from this illness.",
      foodList: [
        {
          title: "Vaccination",
          text: "Get yourself and your loved ones vaccinated for hepatitis A and B to protect yourselves.",
        },
        {
          title: "Practice good hygiene",
          text: "Hepatitis A and E are often transmitted through contaminated food and water. So, to prevent it and keep yourself safe, ensure you wash your hands thoroughly before cooking, eating, and after eating. Ensure you wash fruits and vegetables thoroughly with some salt and clean water before you cook or eat them raw. Only drink clean water. If you are not sure how clean the water is, you can boil it and drink it when it is cool.",
        },
        {
          title: "Practice safe sex",
          text: "Hepatitis B, C, and D can be transmitted through sex. So, to protect yourself, ensure you use a condom when having sex. Also, it won’t hurt for you and your partner to get tested if you both are sexually active.",
        },
        {
          title: "Avoid sharing needles",
          text: "Hepatitis B and C can be transmitted from one infected person to another if they both share a needle or any other object that comes in contact with blood. With this in mind, avoid sharing needles, razors, hair clippers, and toothbrushes with  anyone, even if the person is a close family relative. You never really know who has this illness.",
        },
        {
          title: "Adopt a healthy lifestyle",
          text: "Finally, maintain a healthy lifestyle to support and improve your liver function. This includes eating well-balanced meals, regularly exercising, and avoiding excessive consumption of alcohol or avoiding it altogether.",
        },
      ],
    },
  },
  {
    title: "Childhood Obesity",
    slug: "childhood-obesity",
    subtitle: "Getting in shape",
    imageUrl: "bg-resChildhood",
    img: ResChildhood,
    article: {
      imageUrl: "",
      didYouKnow: {
        title: "Did You know?",
        list: [
          "Childhood obesity is one of the most common chronic diseases of childhood.",
          "Since 1990, there has been a 60% global increase in childhood obesity.",
          "Children with obesity have a higher likelihood of becoming obese adults.",
        ],
      },
      articleQuestion: "How To Get Your Child in Shape?",
      text1:
        "Childhood obesity is a serious medical condition whereby a child is overweight for his or her height and age. This condition has become a pressing global concern with the increasing number of children dealing with weight-related issues. As a result of this condition, children now suffer illnesses like diabetes and hypertension, which were thought to be only adult problems. The shift towards a more sedentary lifestyle, coupled with dietary habits that lean towards unhealthy and processed food, has led to the rising rate of childhood obesity around the world. Children now spend a lot of time indoors and are inactive, either watching TV or playing games. Other factors that cause child obesity include genetic, hormonal, metabolic, psychological, and cultural factors.",
      text2:
        "To know if your child is obese, you have to see a doctor. The doctor will measure the child's height, weight, and age. They will also calculate their body mass index and compare it to standards. This condition can be very difficult to treat, so it is better to prevent it altogether. Do you have a child and are wondering how we can prevent this condition? Keep reading because, in this article, we’ll be discussing how to get your child in shape—applicable to adults as well—to reduce the rising rate of child obesity and its related illnesses around the world.",
      foodList: [
        {
          title:
            "Provide your child (or children) with a balanced and nutritious diet",
          text: "Ensure that the meal you serve them has 30% or fewer calories. You can achieve this by limiting the frequency of eating fast or processed food.",
        },
        {
          title:
            "Encourage your child (or children) to be more involved in physical activities",
          text: "You can do this by taking them to the park or playground, or by creating a play space in your home and engaging in playtime with them. They will be more motivated to participate as a result of seeing you do it. As you might notice, children are excellent imitators.",
        },
        {
          title: "Limit screen time for your child (or children)",
          text: "Ensure they do not watch TV during meal or snack time.",
        },
        {
          title:
            "Do not force your child (or children) to finish off their food",
          text: "Allow them to eat until they are okay. Respect this, and subsequently serve them portions that they can finish. Avoid overfeeding your child (or children).",
        },
        {
          title: "Ensure that you feed your child fruits and vegetables",
          text: "Make it easily accessible to them, so they can take it themselves.",
        },
        {
          title:
            "After each meal, do not give your child (or children) a sweet dessert that has no nutritional value and is just filled with sugar and calories. Instead, you can give them  healthy snacks like plain yogurt, nuts, and fruits covered with dark chocolate",
        },
        {
          title: "Feed your child (or children) enough fiber.",
        },
        {
          title: "Create a nighttime routine for your child (or children)",
          text: "This ensures they have good sleeping habits. Do not put a TV, computer, or anything else that can prevent them from falling asleep in their room.",
        },
      ],
    },
  },
];

export const zohoFunc = () => {
  try{
    var f = document.createElement("iframe");
    f.src = 'https://forms.zohopublic.com/clearlinehmo/form/RequestaQuoteonCorporate1/formperma/rLmDb3ZoGt7PatQB5t-wWR6KitVTjBexJN0fggVboW0?zf_rszfm=1';
    f.style.border="none";
    f.style.height="622px";
    f.style.width="90%";
    f.style.transition="all 0.5s ease";
    f.setAttribute("aria-label", 'Request\x20a\x20Quote\x20on\x20Corporate');
    
    var d = document.getElementById("zf_div_rLmDb3ZoGt7PatQB5t-wWR6KitVTjBexJN0fggVboW0");
    d.appendChild(f);
    window.addEventListener('message', function (){
    var evntData = event.data;
    if( evntData && evntData.constructor == String ){
    var zf_ifrm_data = evntData.split("|");
    if ( zf_ifrm_data.length == 2 || zf_ifrm_data.length == 3 ) {
    var zf_perma = zf_ifrm_data[0];
    var zf_ifrm_ht_nw = ( parseInt(zf_ifrm_data[1], 10) + 15 ) + "px";
    var iframe = document.getElementById("zf_div_rLmDb3ZoGt7PatQB5t-wWR6KitVTjBexJN0fggVboW0").getElementsByTagName("iframe")[0];
    if ( (iframe.src).indexOf('formperma') > 0 && (iframe.src).indexOf(zf_perma) > 0 ) {
    var prevIframeHeight = iframe.style.height;
    var zf_tout = false;
    if( zf_ifrm_data.length == 3 ) {
    iframe.scrollIntoView();
    zf_tout = true;
    }
    if ( prevIframeHeight != zf_ifrm_ht_nw ) {
    if( zf_tout ) {
    setTimeout(function(){
    iframe.style.height = zf_ifrm_ht_nw;
    },500);
    } else {
    iframe.style.height = zf_ifrm_ht_nw;
    }
    }
    }
    }
    }
    }, false);
    }catch(e){}
};
