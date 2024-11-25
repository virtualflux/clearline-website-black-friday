import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { FaPhoneFlip } from 'react-icons/fa6';

const Header = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Set up an interval to toggle the banner content
    const interval = setInterval(() => {
      setShowBanner((prev) => !prev);
    }, 5000); // Toggle every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative">
      {/* Fixed Black Banner Background */}
      <div className="fixed top-0 left-0 w-full bg-catalineBlue text-white py-2 px-3 md:py-3 md:px-8 z-50 mb-2">
        {/* Sliding Content */}
        <div
          className={`transition-transform duration-500 ${
            showBanner ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left text-xs md:text-sm lg:text-base">
            {/* Black Friday Info */}
            <div className="font-medium text-xs md:text-lg lg:text-xl md:font-bold">
              🔥 BLACK FRIDAY OFFER : Up to 10% off. Get KiaKia @ 1k Only🔥.
            </div>
            {/* Contact Info */}
            <div className="flex items-center gap-3 justify-center md:justify-end text-xs md:text-sm">
              <div className="flex items-center gap-1">
                <HiOutlineMailOpen size={16} />
                <Link href="mailto:hello@clearlinehmo.com">
                  hello@clearlinehmo.com
                </Link>
              </div>
              <div className="flex items-center gap-1">
                <FaPhoneFlip size={16} />
                <Link href="tel:0700245245245">0700245245245</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Extra padding for content below banner */}
      <div className="pt-7"></div>
    </div>
  );
};

export default Header;
