import profilePic from "./../public/images/profile/developer-pic-1.png"
import Image from "next/image"
import AnimatedText from "./component/AnimatedText"
import Link from "next/link"
import { LinkArrow } from "./component/Icons"
import HireMe from "./component/HireMe"
export default function Home() {
  return (
    <>
      <div className="h-full w-full inline-block z-0 px-8 md:px-12 lg:px-16 xl:px-24 py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-2">
          <div className="w-3/4 lg:w-1/2"> 
            <Image src={profilePic} alt="Profile" className="w-full h-auto md:hidden lg:inline-block" 
            priority
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            50vw"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center self-center">
            <AnimatedText text="Turning Vision Into Reality With Code And Design." className="!text-left md:!text-3xl lg:!text-5xl xl:!text-6xl md:!text-center lg:!text-left"/>
            <p className="my-4 text-base lg:text-2xl font-medium">As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>

            <div className="flex items-center self-center lg:self-start mt-2 ml-2">
              <Link href="/dummy.pdf" target={"_blank"}
              className="flex items-center bg-dark text-light dark:bg-light dark:text-dark p-2.5 lg:px-6 rounded-lg text-lg font-semibold hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light border-2 border-transparent hover:border-dark dark:hover:border-light"
              download={true}
              >Resume <LinkArrow className={"w-6 ml-1"}/>
              </Link>
              <Link href="mailto:" target={"_blank"}
              className="ml-4 text-lg font-medium capitalize text-dark dark:text-light underline"
              >Contact</Link>
            </div>
          </div>
        </div>
        <HireMe />
      </div>
    </>
  )
}
