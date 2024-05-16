"use client";

import Image from "next/image";
import { DummyHospital, LocationPointer } from "../../../public/assets/images";
import { Rating } from "@mui/material";
import { useState } from "react";
import { FaCopy } from "react-icons/fa";

const RelatedCard = ({ item }) => {
  const [copyText, setCopyText] = useState("Copy to clipboard");

  return (
    <div className="w-[280px] max-md:w-[220px] shrink-0 rounded-lg border border-pigeonPost">
      <div className="h-[126px] max-md:h-[70px] w-full border-b p-2">
        <Image
          src={DummyHospital}
          alt={"hospital"}
          className="w-full h-full object-contain rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <div className="mb-3">
          <div>
            <p className="text-[16px] max-md:text-[12px] font-semibold mb-2 text-center">
              {item?.providername}
            </p>
            <div className="w-full flex justify-between items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="w-[14px] h-[14px] rounded-full flex justify-center items-center bg-[#E7EEFF]">
                  <Image
                    src={LocationPointer}
                    alt="location"
                    className="w-full h-full"
                  />
                </div>
                <p className="capitalize text-[12px] max-md:text-[10px] text-center">
                  {item?.address1}
                </p>
              </div>
              <div className="tooltip">
                <p className="tooltiptext">{copyText}</p>
                <FaCopy
                  onClick={() => {
                    navigator.clipboard.writeText(item?.address);
                    setCopyText(`Copied: ${item?.address1}`);
                  }}
                  onMouseOut={() => setCopyText("Copy to clipboard")}
                  className="cursor-pointer text-catalineBlue"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center mb-2 mt-2">
          <Rating name="simple-controlled" size="small" readOnly value={5} />
        </div>
      </div>
    </div>
  );
};

export default RelatedCard;
