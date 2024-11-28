import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { useState } from "react"

const NavigationDropdown=()=>{
const [active,setActive]=useState(null);
  return(
    <>
    <NavigationMenu>
      <NavigationMenuList>

        <NavigationMenuItem>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} hover:bg-transparent !text-[16px] font-normal`} asChild>
        <Link href="/" legacyBehavior passHref>
             Home
          </Link>
            </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className={`hover:bg-transparent !text-[16px] font-normal`} onMouseOver={()=>setActive(0)}>About us</NavigationMenuTrigger>

            <NavigationMenuContent>
            <ul className="flex flex-col w-[200px] divide-zircon divide-y-[0.8px]" >
                <li className="py-2 hover:bg-catalineBlue hover:text-white p-4">
                  <NavigationMenuLink asChild>
                    <Link href="/our-story">Our story</Link>
                  </NavigationMenuLink>
                </li>
                <li className="py-2 hover:bg-catalineBlue hover:text-white p-4">
                  <NavigationMenuLink asChild>
                    <Link href="/theboard">Board Members</Link>
                  </NavigationMenuLink>
                </li>
                <li className="py-2 hover:bg-catalineBlue hover:text-white p-4">
                  <NavigationMenuLink asChild>
                    <Link href="/themanagement">Management Team</Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
            {active==0 &&   <NavigationMenuViewport/>}
         
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className={`hover:bg-transparent !text-[16px] font-normal`}onMouseOver={()=>setActive(1)}>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
            <ul className="flex flex-col w-[200px] divide-y-[0.8px] divide-zircon">
                <li className="py-2 hover:bg-catalineBlue hover:text-white p-4">
                  <NavigationMenuLink asChild>
                    <Link href="/retail">Retail</Link>
                  </NavigationMenuLink>
                </li>
                <li className="py-2 hover:bg-catalineBlue hover:text-white p-4">
                  <NavigationMenuLink asChild>
                    <Link href="/corporate">Corporate</Link>
                  </NavigationMenuLink>
                </li>
                <li className="py-2 hover:bg-catalineBlue hover:text-white p-4">
                  <NavigationMenuLink asChild>
                    <Link href="/sme">SME</Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
            {active==1 && <NavigationMenuViewport/>}
            
        </NavigationMenuItem>

        <NavigationMenuItem>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} hover:bg-transparent !text-[16px] font-normal`} asChild>
              <Link href="https://media.clearlinehmo.com/" target="_self" asChild>
                  Resources
              </Link>
            </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
              <NavigationMenuTrigger className={`hover:bg-transparent !text-[16px] font-normal`} onMouseOver={()=>setActive(2)}>
              Our providers
              </NavigationMenuTrigger>
            <NavigationMenuContent>
              
              <ul className="flex flex-col w-[200px] divide-y-[0.8px] divide-zircon">
                <li className="py-2 hover:bg-catalineBlue hover:text-white p-4">
                  <NavigationMenuLink asChild>
                    <Link href="/providers">Search for Provider</Link>
                  </NavigationMenuLink>
                </li>
                <li className="py-2 hover:bg-catalineBlue hover:text-white p-4">
                  <NavigationMenuLink asChild>
                    <Link href="/joinnetwork">Sign up as a provider
                    {/* <span className="text-xs block mt-2"> Medical, Dental,Gym & SPA, Optical, diagnostics</span> */}
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
            {active==2 && <NavigationMenuViewport/>}
            
        </NavigationMenuItem>
      </NavigationMenuList>
</NavigationMenu>
    </>
  )
}

export default NavigationDropdown