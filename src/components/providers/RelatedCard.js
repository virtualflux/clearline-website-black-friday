"use client";

import Image from "next/image";
import {
  DummyHospital,
  Ellipse,
  LocationPointer,
} from "../../../public/assets/images";
import { Rating } from "@mui/material";
import { useState } from "react";

const RelatedCard = ({ item }) => {
  const [copyText, setCopyText] = useState("Copy to clipboard");

  return (
    <div className="w-[400px] max-md:w-[280px] flex-shrink-0 rounded-lg border border-pigeonPost">
      <div className="h-[186px] w-full">
        <Image
          src={DummyHospital}
          alt={"hospital"}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <div className="flex gap-2 justify-between items-end mb-3">
          <div>
            <p className="text-[16px] max-md:text-[12px] font-semibold mb-2">
              {item?.providerName}
            </p>
            <div className="flex items-center gap-2">
              <div className="w-[14px] h-[14px] rounded-full flex justify-center items-center bg-[#E7EEFF]">
                <Image
                  src={LocationPointer}
                  alt="location"
                  className="w-full h-full"
                />
              </div>
              <p className="capitalize text-[12px] max-md:text-[10px]">
                {item?.address}
              </p>
            </div>
          </div>
          <div className="w-1/5 tooltip">
            <p className="tooltiptext">{copyText}</p>
            <p
              onClick={() => {
                navigator.clipboard.writeText(item?.address);
                setCopyText(`Copied: ${item?.address}`);
              }}
              onMouseOut={() => setCopyText("Copy to clipboard")}
              className="cursor-pointer text-[12px] max-md:text-[10px] text-catalineBlue underline"
            >
              copy address
            </p>
          </div>
        </div>
        <div className="flex items-center mb-6 mt-2">
          <div className="flex gap-1">
            <Image src={Ellipse} alt="ellipse" />
            <div className="flex gap-1">
              {["-left-[10px]", "-left-[20px]"].map((item, idx) => (
                <Image
                  src={Ellipse}
                  alt="ellipse"
                  key={idx}
                  className={`relative ${item}`}
                />
              ))}
            </div>
          </div>
          <Rating
            name="simple-controlled"
            size="small"
            readOnly
            value={5}
            // value={value}
            // onChange={(event, newValue) => {
            //   setValue(newValue);
            // }}
          />
        </div>
        {/* <div>
          <Link href={"/providers/Jama-Medical-Center"}>
            <Button
              type={"button"}
              className={"!w-full !rounded-lg px-4 !text-white bg-catalineBlue"}
            >
              <p className="text-[14px] max-md:text-[12px]">Full details</p>
            </Button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default RelatedCard;
