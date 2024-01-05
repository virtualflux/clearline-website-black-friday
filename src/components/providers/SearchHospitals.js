"use client";

import Image from "next/image";
import { SearchIcon } from "../../../public/assets/svgs";
import Button from "@/shared/Button";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import useIsVisible from "@/hooks/useIsVisible";
import { useRef } from "react";
import "animate.css";

const SearchHospitals = () => {
  const elemRef = useRef();
  const isVisible = useIsVisible(elemRef);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const center = {
    lat: 6.534347899999999,
    lng: 3.3848981,
  };

  return (
    <div className="mb-8">
      <form
        ref={elemRef}
        className={`${
          isVisible && "animate__animated animate__fadeInRight"
        } px-16 max-[970px]:px-0`}
      >
        <div className="w-full max-[970px]:mb-10 relative -top-[60px] max-[970px]:top-0 bg-white rounded-lg shadow-lg flex max-[970px]:flex-col max-[970px]:items-start items-end gap-3 p-8">
          <div className="w-1/5 max-[970px]:w-full">
            <p className="text-[14px] font-bold mb-2">Search</p>
            <div className="relative">
              <input
                type="text"
                name="keyword"
                placeholder="Search keyword"
                className="w-full text-[14px] h-[50px] focus:outline-none text-black font-medium placeholder:text-[14px] placeholder:text-[#6C7780] rounded-lg border border-pigeonPost pl-8"
              />
              <div className="absolute left-2 bottom-4">
                <Image src={SearchIcon} alt="Search keyword" />
              </div>
            </div>
          </div>
          <div className="w-1/5 max-[970px]:w-full">
            <p className="text-[14px] font-bold mb-2">Location</p>
            <div className="relative">
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="w-full text-[14px] h-[50px] focus:outline-none text-black font-medium placeholder:text-[14px] placeholder:text-[#6C7780] rounded-lg border border-pigeonPost pl-8"
              />
              <div className="absolute left-2 bottom-4">
                <Image src={SearchIcon} alt="Search keyword" />
              </div>
            </div>
          </div>
          <div className="w-1/5 max-[970px]:w-full">
            <p className="text-[14px] font-bold mb-2">Clinic</p>
            <div className="relative">
              <input
                type="text"
                name="clinic"
                placeholder="Maternity Clinics"
                className="w-full text-[14px] h-[50px] focus:outline-none text-black font-medium placeholder:text-[14px] placeholder:text-[#6C7780] rounded-lg border border-pigeonPost pl-8"
              />
              <div className="absolute left-2 bottom-4">
                <Image src={SearchIcon} alt="Search keyword" />
              </div>
            </div>
          </div>
          <div className="w-1/5 max-[970px]:w-full">
            <p className="text-[14px] font-bold mb-2">Plans</p>
            <select className="w-full text-[14px] h-[50px] focus:outline-none font-medium placeholder:text-[14px] placeholder:text-[#6C7780] rounded-lg border border-pigeonPost pl-2">
              {[
                { title: "Choose plan" },
                { title: "Silver plan" },
                { title: "Bronze plan" },
                { title: "Gold plan" },
                { title: "Gold plus plan" },
                { title: "Platinum plan" },
                { title: "Platinum plus plan" },
              ].map((item, idx) => (
                <option key={idx} value={item.title}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
          <div className="w-1/5 max-[970px]:w-full">
            <Button
              type={"button"}
              className={"!w-full !rounded-lg px-4 !text-white bg-catalineBlue"}
            >
              <p className="text-[14px] max-md:text-[12px]">Search</p>
            </Button>
          </div>
        </div>
      </form>
      <div
        ref={elemRef}
        className={`${
          isVisible && "animate__animated animate__fadeInLeft"
        } px-16 max-lg:px-12 max-md:px-8`}
      >
        <p className="text-[32px] max-md:text-[24px] font-bold">
          Hospitals near you
        </p>
        <div className="w-full h-[800px] max-md:h-[500px]">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "100%" }}
              center={center}
              zoom={12}
              options={{
                styles: [
                  {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [{ visibility: "off" }],
                  },
                  {
                    featureType: "transit",
                    elementType: "labels",
                    stylers: [{ visibility: "off" }],
                  },
                ],
                disableDefaultUI: true,
                zoomControl: true,
              }}
            >
              {[
                {
                  title: "hospital 1",
                  location: { lat: 6.634347899999999, lng: 3.3848981 },
                },
                {
                  title: "hospital 2",
                  location: { lat: 6.534347, lng: 3.4848981 },
                },
              ].map((hospital, idx) => (
                <Marker
                  key={idx}
                  position={hospital.location}
                  icon="/assets/images/home_loc.png"
                />
              ))}
            </GoogleMap>
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
