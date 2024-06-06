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
import { useRef, useState } from "react";
import "animate.css";
import RelatedHealthCare from "./Related";
import ButtonLoader from "@/shared/ButtonLoader";
import { FaHospital } from "react-icons/fa";
import { stateList } from "@/utils/data";
const SearchHospitals = () => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [clinic, setClinic] = useState("");
  const [plan, setPlan] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

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
            username:process.env.NEXT_PUBLIC_CLEARLINE_USERNAME,
            password:process.env.NEXT_PUBLIC_CLEARLINE_PASSWORD
          }
        }
      //   `https://techwave-academy-backend-production.up.railway.app/providers?keyword=${keyword}&location=${location}&clinic=${clinic}&plan=${plan}`
      );
      const data = await res.json();
      setResult(data);
      console.log(data)
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  return (
    <div className="mb-8">
      <form
        onSubmit={callAPI}
        ref={elemRef}
        className={`${
          isVisible && "animate__animated animate__fadeInRight"
        } px-16 max-[970px]:px-0`}
      >
        <div className="w-full max-[970px]:mb-10 relative -top-[60px] max-[970px]:top-0 bg-white rounded-lg shadow-lg flex max-[970px]:flex-col max-[970px]:items-start items-end gap-3 p-8">
          {/* <div className="w-1/5 max-[970px]:w-full">
            <p className="text-[14px] font-bold mb-2">Search</p>
            <div className="relative">
              <input
                type="text"
                name="keyword"
                placeholder="Search keyword"
                className="w-full text-[14px] h-[50px] focus:outline-none text-black font-medium placeholder:text-[14px] placeholder:text-[#6C7780] rounded-lg border border-pigeonPost pl-8"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <div className="absolute left-2 bottom-4">
                <Image src={SearchIcon} alt="Search keyword" />
              </div>
            </div>
          </div> */}
          <div className="w-1/4 max-[970px]:w-full">
            <p className="text-[14px] font-bold mb-2">Location</p>
            <div className="relative">
              <select defaultValue={""} onChange={(e)=>setLocation(e.target.value)}  className="w-full text-[14px] h-[50px] focus:outline-none font-medium placeholder:text-[14px] placeholder:text-[#6C7780] rounded-lg border border-pigeonPost pl-2">
              {stateList.map((state,indx)=><option key={indx} disabled={indx==0} value={state.id}>{state.title}</option>)}
              </select>

            </div>
          </div>
          <div className="w-1/4 max-[970px]:w-full">
            <p className="text-[14px] font-bold mb-2">Provider</p>
            <div className="relative">
              <input
                type="text"
                name="clinic"
                placeholder="Providers"
                className="w-full text-[14px] h-[50px] focus:outline-none text-black font-medium placeholder:text-[14px] placeholder:text-[#6C7780] rounded-lg border border-pigeonPost pl-8"
                value={clinic}
                onChange={(e) => setClinic(e.target.value)}
              />
              <div className="absolute left-2 bottom-4">
                <Image src={SearchIcon} alt="Search keyword" />
              </div>
            </div>
          </div>
          <div className="w-1/4 max-[970px]:w-full">
            <p className="text-[14px] font-bold mb-2">Plans</p>
            <select
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
              className="w-full text-[14px] h-[50px] focus:outline-none font-medium placeholder:text-[14px] placeholder:text-[#6C7780] rounded-lg border border-pigeonPost pl-2"
            >
              {[
                { title: "Choose plan", value: "" },
                { title: "Silver plan", value: "SIL" },
                { title: "Bronze plan", value: "Bronze" },
                { title: "Gold plan", value: "GOL" },
                { title: "Gold plus plan", value: "GOLP" },
                { title: "Platinum plan", value: "PLAT" },
                { title: "Platinum plus plan", value: "PLATP" },
              ].map((item, idx) => (
                <option key={idx} value={item.value}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
          <div className="w-1/5 max-[970px]:w-full">
            <Button
              type={"submit"}
              className={"!w-full !rounded-lg px-4 !text-white bg-catalineBlue text-[14px] max-md:text-[12px]"}
            >
                {isLoading ? <ButtonLoader /> : "Search"}
            </Button>
          </div>
        </div>
      </form>
      <div
        ref={elemRef}
        className={`${
          isVisible && "animate__animated animate__fadeInLeft"
        } px-16 max-lg:px-12 max-md:px-8 mb-8`}
      >
        <p className="text-[32px] max-md:text-[24px] font-bold">
          Providers near you
        </p>
        <div className="mt-3">
          {isLoaded ? (
            <RelatedHealthCare result={result} />
          ) : (
            <div className="h-full flex justify-center items-center">
              <p>Loading...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchHospitals;
