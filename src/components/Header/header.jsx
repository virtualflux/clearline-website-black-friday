import Link from 'next/link'
import React from 'react'
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaPhoneFlip } from "react-icons/fa6";

const header = () => {
  return (
<div className="bg-catalineBlue py-2 md:py-3 md:px-16 px-3 fixed top-0 left-0 w-full z-50">
  <div className="flex items-center gap-3 md:items-start w-full">
    <div className="flex items-center gap-2 md:text-sm text-xs text-white">
      <HiOutlineMailOpen />
      <Link href="mailto:hello@clearlinehmo.com">hello@clearlinehmo.com</Link>
    </div>
    <div className="flex items-center gap-2 md:text-sm text-xs text-white">
      <FaPhoneFlip />
      <Link href="tel:0700245245245">0700245245245</Link>
    </div>
  </div>
</div>

  )
}

export default header
