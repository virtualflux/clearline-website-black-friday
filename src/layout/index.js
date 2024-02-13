"use client";

import { useState } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { Close } from "../../public/assets/svgs";

const PageLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebar = () => {
    sidebarOpen ? setSidebarOpen(false) : setSidebarOpen(true);
  };

  const zohoContact = () => {
    try {
      var f = document.createElement("iframe");
      f.src =
        "https://forms.zohopublic.com/user164/form/ConnectwithUsYourQuestionsOurCommitment/formperma/K5uXfUKf7-utsjPJLHdU9mfPv34Av3F6f6P9eFzIm24?zf_rszfm=1";
      f.style.border = "none";
      f.style.height = "785px";
      f.style.width = "100%";
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
    <div>
      <div className="w-full flex justify-center">
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
          <div id="zf_div_K5uXfUKf7-utsjPJLHdU9mfPv34Av3F6f6P9eFzIm24"></div>
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
          zohoContact();
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
  );
};

export default PageLayout;
