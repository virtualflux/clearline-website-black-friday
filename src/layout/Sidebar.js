import Link from "next/link";
import { navLinks } from "@/utils/data";
import { usePathname } from "next/navigation";

const Sidebar = ({ sidebarOpen, handleSidebar, onClick }) => {
  const pathname = usePathname();

  return !sidebarOpen ? (
    <div></div>
  ) : (
    <div className="fixed top-[45px] right-0 z-30 bg-white w-1/2 p-3 shadow-lg rounded-md">
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
        <p onClick={onClick} className="text-[16px]">
          Contact us
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
