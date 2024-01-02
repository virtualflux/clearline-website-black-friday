import Image from "next/image";
import Link from "next/link";
import { ClearlineLogo } from "../../public/assets/images";

const Logo = () => {
  return (
    <div className={`w-fit relative`}>
      <Link href="/">
        <div className="flex items-center gap-1">
          <Image src={ClearlineLogo} alt="Clearline HMO" />
          <div className="text-catalineBlue text-[24px] max-md:text-[16px]">
            <p>Clearline</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
