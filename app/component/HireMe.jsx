import Link from "next/link"
import { CircularText } from "./Icons"

const HireMe = () => {
  return (
    <div className="fixed lg:top-auto lg:right-auto top-2 right-2 lg:left-4 lg:bottom-4 flex items-center justify-center overflow-hidden">
        <div className="w-20 lg:w-48 h-auto flex items-center justify-center relative">
            <CircularText className={"fill-dark dark:fill-light animate-spin-slow"} /> 
            <Link href={"mailto:"} className="flex items-center text-center lg:text-left justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark dark:bg-light text-light dark:text-dark shadow-md border-solid border-dark w-10 lg:w-20 h-10 lg:h-20 rounded-full font-normal text-sm lg:font-semibold hover:bg-light hover:text-dark">Hire Me</Link>
        </div>
    </div>
  )
}

export default HireMe