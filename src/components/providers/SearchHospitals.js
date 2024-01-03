"use client";

import Image from "next/image";
import { SearchIcon } from "../../../public/assets/svgs";
import Button from "@/shared/Button";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const SearchHospitals = () => {
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
      <form className="px-16 max-[970px]:px-0">
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
            <div className="relative">
              <input
                type="text"
                name="plans"
                placeholder="Senior Plans"
                className="w-full text-[14px] h-[50px] focus:outline-none text-black font-medium placeholder:text-[14px] placeholder:text-[#6C7780] rounded-lg border border-pigeonPost pl-8"
              />
              <div className="absolute left-2 bottom-4">
                <Image src={SearchIcon} alt="Search keyword" />
              </div>
            </div>
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
      <div className="px-16 max-lg:px-12 max-md:px-8">
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
                  // icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALUAAACUCAMAAADifZgIAAAAY1BMVEX///8AAACYmJhubm42Njb7+/tQUFDs7OyUlJRfX1/R0dHz8/Po6OjMzMxmZmZcXFyvr68vLy/a2tq1tbUlJSWFhYUZGRm7u7t9fX1JSUmMjIzi4uJVVVXFxcURERGhoaE/Pz9caTHPAAAEY0lEQVR4nO2c6ZKqMBCFRYwooKAisgj6/k95XUbTwkkgKMut6vNvZgJ+hs5Jd5Oa2YzFYrFYLBaLxWKx+pHYNwzw3Yr8Qbj0TFl0ENoRmVXRaiA0tfbLG0bi6YasqtTzoeBUujw5YlczZmrU/laSqKd7YtSnlKDYykU5Lepj9MFyDRXjpkSdB1UYK8FeMh1qcYhr0JaVbtDYyVA7R8B8U3wBg6dC7a4x9D1K6hvfRKjDUgltWYtalEyC2jlrmO/KKtY9AWpRLBqgLWv7ad3jU4ssQpwVLT6se3Rq0TzRD5Xr6VCLEE7sEU1/KfOpcal9aNJ2PiuW4PfxO58alXoDvSP0lN9nm49PfYHL8M8txAn98VqMTJ3D3fAo0yXs4okzJnWxA0iLAx3izdGOeXZHo/bmaB7X1aoL7j9ROKtdPQi1Dx/+ql5y5Vs08JiMQX1AKFeZI3mujO4LiqSa+qdWmJrzHrAPrJX8yW1KrQahhiYdXeTshvdgDmSIO7WezfDUc2TSEVmG9tM4drKGwdY9ILVfL2hv2soBrnQNEjPiOib1CTkZSUK9C3Xo9CSvhI9oEGqvtjk8plQm/HnF0cqVjPZNii7un3oPvZeYdFEHe6VLNzn2GNTQpEkh60GriMkeH6KGSa/UuN1Bmga5KgKOxMjh0+qPusmkxUG92s7kecCV0Rc1zKRJM0wkun5IRNpPJ7zB90At4MMnjce9Bvn5BUnWDdPy88+ZC7SIqEnDrPVTcSG552i6I9jF7CwvQ9DEpPc6R3urJO0nvEjm+hdQRsphxkZeXsDtEmlJrBsaUvCz13fYGmSu5NXye7UiYt0wn9qdAIG5qjv0UzZ51tptuqZETrePa+UfTDdkKkNp0rDxpFNavG/uXdCA87eLUkCTvsro8A2i4yVaPWygl6BXC+3lwN03IZVVm1ZqXWt5Bx+6j+0gnFYSLrohaXe0MWmFiHWHcKd0O3qgA5moSSvzoBaipTBclPNO072HdRYx6bCtSWOdm0rhoOmoBhB8cRiT1d1qN9SppPkUSrziQx1LK1hzlIEcsPluop/aSmcWS8Rttihhdk8zadz/NRYphfEt0xzyKahBEyCVcZh/HR0vxZn8UBd86NWEGtSHZAsvmhobJiJR4tUnwzCyK1USyWna9L6MRI5HVYsc05NQ4sP3yNEUbIhfiaRLn3l6YLzT5ORqadICb2RfipbCdGszCuqn3qEdyRzt1XX8tehJjOLtJaZ2/ZjWv9C2DQra7krlYn8tyqxTJuLfX3LuZLn/Ra7UQrtqKbzsWBy4pbWUEfdVrtRC0ZGUR0ur7FwarIhJz8zqrC4iwe3ZPzr++YvEQ68+OmZMzdRMzdRMzdRMzdRMzdRMPSj1Yq1UoD6qMDZ15gmVHHQ+eBrUK3UvgKmZmqmZmqmZmqmZmqmZmqmZmqmZmqmZmqmZmqmZmqmZmqn/d+oWRz111C2OqPVBndhN2mr++aGXtbi8B2oWi8VisVgsFmtI/QNrC0wOWQNzPAAAAABJRU5ErkJggg=="
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
