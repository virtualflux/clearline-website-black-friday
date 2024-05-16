"use client";

import { useState } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { Close } from "../../public/assets/svgs";
import { useSalesIQ } from "@/hooks/useSalesIQ";
const PageLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebar = () => {
    sidebarOpen ? setSidebarOpen(false) : setSidebarOpen(true);
  };
  
  // const zohoContact = () => {
  //   try {
  //     var f = document.createElement("iframe");
  //     f.src =
  //       "https://forms.zohopublic.com/clearlinehmo/form/ConnectwithUsYourQuestionsOurCommitment/formperma/WldfFtbqH-2VwT9PkLXQsj1f9ZT94qQx-rUtFhtAvIE?zf_rszfm=1";
  //     f.style.border = "none";
  //     f.style.height = "800px";
  //     f.style.width = "100%";
  //     f.style.transition = "all 0.5s ease";
  //     f.setAttribute(
  //       "aria-label",
  //       "Connect\x20with\x20Us\x3A\x20Your\x20Questions,\x20Our\x20Commitment."
  //     );

  //     var d = document.getElementById(
  //       "zf_div_WldfFtbqH-2VwT9PkLXQsj1f9ZT94qQx-rUtFhtAvIE"
  //     );
  //     d.appendChild(f);
  //     window.addEventListener(
  //       "message",
  //       function () {
  //         var evntData = event.data;
  //         if (evntData && evntData.constructor == String) {
  //           var zf_ifrm_data = evntData.split("|");
  //           if (zf_ifrm_data.length == 2) {
  //             var zf_perma = zf_ifrm_data[0];
  //             var zf_ifrm_ht_nw = parseInt(zf_ifrm_data[1], 10) + 15 + "px";
  //             var iframe = document
  //               .getElementById(
  //                 "zf_div_WldfFtbqH-2VwT9PkLXQsj1f9ZT94qQx-rUtFhtAvIE"
  //               )
  //               .getElementsByTagName("iframe")[0];
  //             if (
  //               iframe.src.indexOf("formperma") > 0 &&
  //               iframe.src.indexOf(zf_perma) > 0
  //             ) {
  //               var prevIframeHeight = iframe.style.height;
  //               if (prevIframeHeight != zf_ifrm_ht_nw) {
  //                 iframe.style.height = zf_ifrm_ht_nw;
  //               }
  //             }
  //           }
  //         }
  //       },
  //       false
  //     );
  //   } catch (e) {}
  // };

  return (
    <>
    {useSalesIQ("https://salesiq.zohopublic.com/widget","siq54e6195b138fd09f7c6d4c17ed009c7e9363e42723b6ab9c0c0a82b6142bccda")}
    <div>
      <div className="w-full flex justify-center">
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } fixed top-0 z-50 h-full overflow-y-scroll w-[40%] mt-[15%] lg:mt-[4%] rounded-lg shadow-lg bg-white`}
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
          <div className="w-full">
          <iframe aria-label='Contact Us' src='https://forms.zohopublic.com/clearlinehmo/form/ContactUs/formperma/E3DxjeB_uLhsVGI3MuDBZAUtK0efN31FRIQ0fyijspQ' className="max-md:w-full w-[99%] h-[780px] border-0"></iframe>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Navbar
        sidebarOpen={sidebarOpen}
        handleSidebar={handleSidebar}
        onClick={() => {
          setIsOpen(true);
        }}
      />
      <Sidebar
        sidebarOpen={sidebarOpen}
        handleSidebar={handleSidebar}
        onClick={() => {
          handleSidebar();
          setIsOpen(true);
          zohoContact();
        }}
      />
      <div className="flex-1 overflow-y-auto h-full">{children}</div>
      <Footer />
    </div>
    </>
    
  );
};

export default PageLayout;
