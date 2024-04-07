import HomeContainer from "@/components/home"
import PageLayout from "@/layout"
import Link from "next/link"
import {HiOutlineDocumentMagnifyingGlass} from "react-icons/hi2"
import {PiFileMagnifyingGlassLight} from "react-icons/pi"
const NotFound =()=>{
    return (
            <div className="flex gap-8 justify-between max-lg:flex-col max-md:gap-6 px-16 max-lg:px-12 max-md:px-8 bg-white bg-cover bg-center h-screen">
                <div className="text-2xl h-full flex flex-col items-center justify-center mx-auto gap-4">
                    <div className="text-9xl text-catalineBlue font-extrabold flex">
                        <span>4</span>
                        <HiOutlineDocumentMagnifyingGlass/>
                        <span></span>
                        <span>4</span>
                    </div>
                    <div className="text-4xl font-extrabold text-center"> 
                        <h1><span className="text-catalineBlue"> Sorry! </span> this page isn&apos;t available</h1>
                    </div>
                    <div className="text-lg font-extrabold">
                        <p>Go Back <Link href="/" className="underline text-catalineBlue">Home</Link></p>
                    </div>
                </div>
            </div>
    )
}
export default NotFound