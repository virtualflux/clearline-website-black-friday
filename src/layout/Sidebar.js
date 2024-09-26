import Link from "next/link";
import { navLinks } from "@/utils/data";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";

const Sidebar = ({ sidebarOpen, handleSidebar, onClick }) => {
  const pathname = usePathname();
  const [activeTab, setActiveTab]=useState(null)
  const handleTabChange=(indx)=>{
    setActiveTab(prev=>prev==indx?null:indx)
  }
  return !sidebarOpen ? (
    <div></div>
  ) : (
    <div className="fixed top-[45px] right-0 z-30 bg-white w-1/2  shadow-lg rounded-md">
      <div className="fixed inset-0 -z-10" onClick={handleSidebar}></div>
      <div className="flex flex-col">
      <Link
            href={"/"}
            className={`group hover:text-white hover:bg-catalineBlue p-3`}
          >
            <p className="text-[16px]">Home</p>
          </Link>
      <div
            className={`group cursor-pointer hover:bg-catalineBlue relative`}
          >
            <div className="group-hover:text-white text-[16px] p-3 flex justify-between items-center"  onClick={()=>handleTabChange(0)}>
              <span>About</span>
              <FaChevronRight size={16}/>
            </div>
            {activeTab===0&&(
              <div className="absolute flex flex-col top-0 left-0 -translate-x-full bg-white">
              <Link
              href={"/our-story"}
              className={`group hover:text-white hover:bg-catalineBlue p-3`}
            >
              <p className="text-[16px]">Our story</p>
            </Link>
              <Link
              href={"/theboard"}
              className={`group hover:text-white hover:bg-catalineBlue p-3`}
            >
              <p className="text-[16px]">Board Members</p>
            </Link>
              <Link
              href={"/themanagement"}
              className={`group hover:text-white hover:bg-catalineBlue p-3`}
            >
              <p className="text-[16px]">Management Team</p>
            </Link>
              </div>
            )}
            
      </div>
      <div
            className={`group cursor-pointer hover:bg-catalineBlue relative`}
          >
            <div className="group-hover:text-white text-[16px] p-3 flex justify-between items-center"  onClick={()=>handleTabChange(1)}>
              <span>Products</span>
              <FaChevronRight size={16}/>
            </div>
            {activeTab===1&&(
               <div className="absolute flex flex-col top-0 left-0 -translate-x-full bg-white min-w-[80px]">
               <Link
               href={"/retail"}
               className={`group hover:text-white hover:bg-catalineBlue p-3`}
             >
               <p className="text-[16px]">Retail</p>
             </Link>
               <Link
               href={"/corporate"}
               className={`group hover:text-white hover:bg-catalineBlue p-3`}
             >
               <p className="text-[16px]">Corporate</p>
             </Link>
               <Link
               href={"/sme"}
               className={`group hover:text-white hover:bg-catalineBlue p-3`}
             >
               <p className="text-[16px]">SME</p>
             </Link>
               </div>
            )}
           
      </div>
          <Link
            href={""}
            className={` hover:text-white hover:bg-catalineBlue p-3`}
          >
            <p className="text-[16px]">Resources</p>
           
          </Link>
          <div
            className={`group cursor-pointer hover:bg-catalineBlue relative`}
          >
            <div className="text-[16px] group-hover:text-white flex p-3 justify-between items-center"  onClick={()=>handleTabChange(2)}>
              <span>
                Providers
                </span>
                <FaChevronRight size={16}/>
              </div>
            {activeTab===2&&( <div className="absolute flex flex-col top-0 left-0 -translate-x-full bg-white">
            <Link
            href={"/providers"}
            className={`group hover:text-white hover:bg-catalineBlue p-3`}
          >
            <p className="text-[16px]">Search for provider</p>
          </Link>
            <Link
            href={"/joinnetwork"}
            className={`group hover:text-white hover:bg-catalineBlue p-3`}
          >
            <p className="text-[16px]">Sign up as a provider</p>
          </Link>
            </div>)}
           
          </div>
        <p onClick={onClick} className="text-[16px] hover:text-white hover:bg-catalineBlue p-3 cursor-pointer">
          Contact us
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
