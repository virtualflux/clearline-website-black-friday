"use client";

import Button from "@/shared/Button";
import Logo from "@/shared/Logo";
import { navLinks } from "@/utils/data";
import { LuPhone } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import { Close, Menu, Phone } from "../../public/assets/svgs";
import { usePathname } from "next/navigation";
import { useState } from "react";
import NavigationDropdown from "./navigation/dropdown";

const Navbar = ({ sidebarOpen, handleSidebar, onClick }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" z-20 fixed bg-white w-full px-16 max-lg:px-12 max-md:px-8 py-3 flex justify-between items-center gap-5 shadow-lg">
      <div>
        <Logo />
      </div>
      <div className="flex gap-12 items-center max-[1135px]:hidden">
        <div className="flex gap-8 items-center">
          <NavigationDropdown/>
        </div>
      </div>
      <div className="flex gap-3 max-[1135px]:hidden">
        <Button
          onClick={onClick}
          className={"!rounded-lg px-4 !text-white bg-catalineBlue"}
        >
          <div className="flex gap-2 items-center">
            <p className="text-[14px] max-md:text-[12px]">Contact Us</p>
          </div>
        </Button>
      </div>
      <div onClick={handleSidebar} className="hidden max-[1135px]:block">
        {sidebarOpen ? (
          <Image src={Close} alt="close" />
        ) : (
          <Image src={Menu} alt="menu" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
