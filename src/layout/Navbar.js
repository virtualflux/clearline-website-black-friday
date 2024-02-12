"use client";

import Button from "@/shared/Button";
import Logo from "@/shared/Logo";
import { navLinks } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { Close, Menu, Phone } from "../../public/assets/svgs";
import { usePathname } from "next/navigation";

const Navbar = ({ sidebarOpen, handleSidebar }) => {
  const pathname = usePathname();

  const zohoContact = () => {
    try {
      var f = document.createElement("iframe");
      f.src =
        "https://forms.zohopublic.com/user164/form/ConnectwithUsYourQuestionsOurCommitment/formperma/K5uXfUKf7-utsjPJLHdU9mfPv34Av3F6f6P9eFzIm24?zf_rszfm=1";
      f.style.border = "none";
      f.style.height = "785px";
      f.style.width = "90%";
      f.style.transition = "all 0.5s ease";
      f.setAttribute(
        "aria-label",
        "Connect\x20with\x20Us\x3A\x20Your\x20Questions,\x20Our\x20Commitment."
      );
      var d = document.getElementById(
        "zf_div_K5uXfUKf7-utsjPJLHdU9mfPv34Av3F6f6P9eFzIm24"
      );
      d.appendChild(f);
      window.addEventListener(
        "message",
        function () {
          var evntData = event.data;
          if (evntData && evntData.constructor == String) {
            var zf_ifrm_data = evntData.split("|");
            if (zf_ifrm_data.length == 2) {
              var zf_perma = zf_ifrm_data[0];
              var zf_ifrm_ht_nw = parseInt(zf_ifrm_data[1], 10) + 15 + "px";
              var iframe = document
                .getElementById(
                  "zf_div_K5uXfUKf7-utsjPJLHdU9mfPv34Av3F6f6P9eFzIm24"
                )
                .getElementsByTagName("iframe")[0];
              if (
                iframe.src.indexOf("formperma") > 0 &&
                iframe.src.indexOf(zf_perma) > 0
              ) {
                var prevIframeHeight = iframe.style.height;
                if (prevIframeHeight != zf_ifrm_ht_nw) {
                  iframe.style.height = zf_ifrm_ht_nw;
                }
              }
            }
          }
        },
        false
      );
    } catch (e) {}
  };

  return (
    <div className=" z-20 fixed bg-white w-full px-16 max-lg:px-12 max-md:px-8 py-3 flex justify-between items-center gap-5 shadow-lg">
      <div
        className="fixed top-0 z-50 overflow-y-auto w-[90%] mt-[15%] lg:mt-[5%] rounded-lg shadow-lg outline-none focus:outline-0"
        id="zf_div_K5uXfUKf7-utsjPJLHdU9mfPv34Av3F6f6P9eFzIm24"
      ></div>
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
          onClick={zohoContact}
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
