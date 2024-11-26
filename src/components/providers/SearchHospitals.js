"use client";

import Image from "next/image";
import { SearchIcon } from "../../../public/assets/svgs";
import Button from "@/shared/Button";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoWindow,
} from "@react-google-maps/api";
import useIsVisible from "@/hooks/useIsVisible";
import { useEffect, useRef, useState } from "react";
import "animate.css";
import RelatedHealthCare from "./Related";
import ButtonLoader from "@/shared/ButtonLoader";
import { FaHospital } from "react-icons/fa";
import { stateList } from "@/utils/data";
import Pagination from '@mui/material/Pagination';

const allPlans = [
  { title: "Choose plan", value: "" },
  { title: "Silver plan", value: "SIL" },
  { title: "Bronze plan", value: "Bronze" },
  { title: "Gold plan", value: "GOL" },
  { title: "Gold plus plan", value: "GOLP" },
  { title: "Platinum plan", value: "PLAT" },
  { title: "Platinum plus plan", value: "PLATP" },
]

const SearchHospitals = () => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [clinic, setClinic] = useState("");
  const [plan, setPlan] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState({
    state: 'all',
    region: 'all',
    search: '',
  });
  const [regions, setRegions] = useState([]);

  const elemRef = useRef();
  const isVisible = useIsVisible(elemRef);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const center = {
    lat: 6.934347899999999,
    lng: 5.5848981,
  };

  const callAPI = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    
    try {
      const res = await fetch(
        `https://clearlinehmoapp.com/intermediary/api/planprovider?plancode=${plan}&grouplegacyid=18757&covtypeid=2&stateid=${location}`,{
          headers:{
            username: 'clearline',
            password: 'N?5M[}6b~sG8T'
          }
        }
      //   `https://techwave-academy-backend-production.up.railway.app/providers?keyword=${keyword}&location=${location}&clinic=${clinic}&plan=${plan}`
      );
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  useEffect(()=>{
    const fetchProviders = async () => {
      const allData = []
      for (const location of stateList) {
        const planPromises = allPlans.map(async (plan) => {
          try {
            setIsLoading(true)
            const res = await fetch(`https://clearlinehmoapp.com/intermediary/api/planprovider?plancode=${plan.value}&grouplegacyid=18757&covtypeid=2&stateid=${location.id}`, {
              headers: {
                username: "clearline",
                password: "N?5M[}6b~sG8T"
              }
            });

            const result = await res.json();
            return result;
          } catch (error) {
            console.error("Error fetching data:", error);
            return null; 
          }finally{
            setIsLoading(false)
          }
        });

        const locationData = await Promise.all(planPromises);

        locationData.forEach((data) => {
          if (Array.isArray(data)) {
            allData.push(...data); 
          } else if (typeof data === 'object' && data !== null) {
            allData.push(data); 
          } else {
            console.warn('Unexpected data format:', data); 
          }
        });
      }
      setResult(allData)
      setFilteredData(allData)
  }

    fetchProviders()
  },[])

  const handleSorting = () => {
    let data = [...result];

    if (filter.state !== 'all') {
      data = data.filter(item => String(item.stateid) === String(filter.state));
    }

    if (filter.region !== 'all') {
      data = data.filter(item => item?.address1?.toLowerCase().includes(filter.region.toLocaleLowerCase()));
    }

    if (filter.search) {
      data = data.filter(item => 
        item?.providername?.toLowerCase().includes(filter.search.toLowerCase())
      );
    }

    setFilteredData(data);
  }

  useEffect(() => {
    handleSorting()
  }, [filter, result, handleSorting]);
  
  useEffect(()=>{
    if(filter.state !== 'all'){
      const filteredState = stateList.find(item => String(item.id) === String(filter.state))
      const fetchLGAs = async () => {
        const res = await fetch(`https://api.countrystatecity.in/v1/countries/NG/states/${filteredState.code}/cities`, {
          headers: {
            "X-CSCAPI-KEY": "aDZSNktocjZXQ29nU1dtWk9OYUpXSnFzSk9WY3JTRFBERDhPNjQwNQ=="
          }
        });
        const data = await res.json();
        setRegions(data);
      };

      fetchLGAs()
    }
  },[filter.state])
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData?.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleFilterChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="mb-8">
      <div
        ref={elemRef}
        className={`${
          isVisible && "animate__animated animate__fadeInRight"
        } px-16 max-[970px]:px-0`}
      >
        <div className="w-full max-[970px]:mb-10 relative -top-[60px] max-[970px]:top-0 
        bg-white rounded-lg shadow-lg flex max-[970px]:flex-col max-[970px]:items-start items-end gap-3 p-8">
          <div className="w-full">
            <p className="text-[14px] font-bold mb-2">Location</p>
            <div className="relative">
              <select defaultValue={""} value={filter.state} name="state" 
              onChange={(e)=>handleFilterChange(e)}
              className="w-full text-[14px] h-[50px] focus:outline-none font-medium 
              placeholder:text-[14px] placeholder:text-[#6C7780] rounded-lg border 
              border-pigeonPost pl-2">
                {stateList.map((state,indx)=>
                <option key={indx} disabled={indx==0} value={state.id}>
                  {state.title}
                </option>)}
              </select>

            </div>
          </div>
          <div className="w-full">
            <p className="text-[14px] font-bold mb-2">LGA</p>
            <div className="relative">
              <select defaultValue={""} value={filter.region} name="region" 
              onChange={(e)=>handleFilterChange(e)}
              disabled={!regions}
              className="w-full text-[14px] h-[50px] focus:outline-none font-medium 
              placeholder:text-[14px] placeholder:text-[#6C7780] rounded-lg border 
              border-pigeonPost pl-2">
                {regions?.map((state,indx)=>
                <option key={indx} disabled={indx==0} value={state?.name}>
                  {state?.name}
                </option>)}
              </select>

            </div>
          </div>
          <div className="w-full">
            <p className="text-[14px] font-bold mb-2">Provider</p>
            <div className="relative">
              <input
                type="text"
                name="search"
                placeholder="Providers"
                className="w-full text-[14px] h-[50px] focus:outline-none text-black font-medium placeholder:text-[14px] placeholder:text-[#6C7780] rounded-lg border border-pigeonPost pl-8"
                value={filter.search}
                onChange={(e)=>handleFilterChange(e)}
              />
              <div className="absolute left-2 bottom-4">
                <Image src={SearchIcon} alt="Search keyword" />
              </div>
            </div>
          </div>
          <div className="w-full">
            <Button
              type={"button"} onClick={handleSorting}
              className={"!w-full !rounded-lg px-4 !text-white bg-catalineBlue text-[14px] max-md:text-[12px]"}
            >
              Search
            </Button>
          </div>
        </div>
      </div>
      <div
        ref={elemRef}
        className={`${
          isVisible && "animate__animated animate__fadeInLeft"
        } px-16 max-lg:px-12 max-md:px-8 mb-8`}
      >
        <p className="text-[32px] max-md:text-[24px] font-bold">
          Our Providers
        </p>
        <div className="w-full mt-3 flex flex-col items-center justify-center gap-8 min-h-[10rem]">
          {isLoading ? (
            <div className="flex flex-col gap-3 items-center justify-center h-full">
              <h3>
                Loading providers...
              </h3>
              <div className="w-full flex items-center gap-3">
                <div className="w-8 h-8 border-4 border-t-4 border-blue-500 border-solid 
                rounded-full animate-spin"></div>
                <div className="w-8 h-8 border-4 border-t-4 border-blue-500 border-solid 
                rounded-full animate-spin"></div>
                <div className="w-8 h-8 border-4 border-t-4 border-blue-500 border-solid 
                rounded-full animate-spin"></div>
              </div>
            </div>
            ) :(
              <RelatedHealthCare result={currentItems} />
            ) }
            <div className="p-3 w-fit bg-white shadow-md rounded-md">
              <Pagination
                count={Math.ceil(filteredData?.length / itemsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
              />
            </div>
        </div>
      </div>
    </div>
  );
};

export default SearchHospitals;
