"use client";

import Button from "@/shared/Button";
import Logo from "@/shared/Logo";
import { navLinks } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { Close, Menu, Phone } from "../../public/assets/svgs";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = ({ sidebarOpen, handleSidebar, onClick }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" z-20 fixed bg-white w-full px-16 max-lg:px-12 max-md:px-8 py-3 flex justify-between items-center gap-5 shadow-lg">
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } fixed top-0 z-20 h-full overflow-y-scroll w-[90%] mt-[15%] lg:mt-[5%] rounded-lg shadow-lg bg-white`}
      >
        <div
          className="fixed inset-0 -z-10"
          onClick={() => setIsOpen(false)}
        ></div>
        <div className="flex justify-end py-2">
          <Image
            src={Close}
            alt="close modal"
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <div id="zf_div_WldfFtbqH-2VwT9PkLXQsj1f9ZT94qQx-rUtFhtAvIE"></div>
      </div>
      <div>
        <Logo />
      </div>
      <div className="flex gap-12 items-center max-[1135px]:hidden">
        <div className="flex gap-8">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.path}
              className={`transition-all delay-300 duration-300 ease-in hover:text-redDevil`}
            >
              <p className="text-[16px]">{link.title}</p>
              {pathname === link.path && <div className="activeLink"></div>}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex gap-3 max-[1135px]:hidden">
        <Button
          onClick={onClick}
          className={"!rounded-lg px-4 !text-white bg-catalineBlue"}
        >
          <div className="flex gap-2 items-center">
            <Image src={Phone} alt="contact us" />
            <p className="text-[14px] max-md:text-[12px]">Contact</p>
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
