import Link from "next/link";
import { navLinks } from "@/utils/data";
import { usePathname } from "next/navigation";

const Sidebar = ({ sidebarOpen, handleSidebar }) => {
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

  return !sidebarOpen ? (
    <div></div>
  ) : (
    <div className="fixed top-[45px] right-0 z-50 bg-white w-1/2 p-3 shadow-lg rounded-md">
      <div
        className="fixed top-0 z-50 overflow-y-auto w-[90%] mt-[15%] lg:mt-[5%] rounded-lg shadow-lg outline-none focus:outline-0"
        id="zf_div_K5uXfUKf7-utsjPJLHdU9mfPv34Av3F6f6P9eFzIm24"
      ></div>
      <div className="fixed inset-0 -z-10" onClick={handleSidebar}></div>
      <div className="flex flex-col gap-4">
        {[...navLinks].map((link, idx) => (
          <Link
            key={idx}
            href={link.path}
            className={`transition-all delay-300 duration-300 ease-in hover:text-redDevil`}
          >
            <p className="text-[16px]">{link.title}</p>
            {pathname === link.path && <div className="activeLink"></div>}
          </Link>
        ))}
        <p
          onClick={() => {
            handleSidebar();
            zohoContact();
          }}
          className="text-[16px]"
        >
          Contact us
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
