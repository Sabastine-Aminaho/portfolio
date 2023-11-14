"use client"

import Link from "next/link"
import Logo from "./Logo"
import { TwitterIcon, GithubIcon, LinkedInIcon, SunIcon, MoonIcon } from "./Icons"
import { usePathname, useRouter } from "next/navigation"
import {motion} from "framer-motion"
import useThemeSwitcher from "./hooks/useThemeSwitcher"
import { useState } from "react"


const CustomLink = ({ href, title, className = "" }) => {
  const path = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1.5px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
        ${path === href ? 'w-full' : 'w-0'}`}
      >&nbsp;</span>
    </Link>
  )
}
const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const path = usePathname();

  const handleMoblieClick = () => {
    toggle();
    router.push(href)
  }
  return (
    <button href={href} className={`${className} relative group text-light dark:text-dark`} onClick={handleMoblieClick}>
      {title}
      <span
        className={`h-[1.5px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
        ${path === href ? 'w-full' : 'w-0'}`}
      >&nbsp;</span>
    </button>
  )
}

const Navbar = () => {

  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)

  }

  return (
    <header
    className='w-full px-12 md:px-32 py-2 lg:text-xl font-medium flex item-center justify-between dark:text-light relative'
    >

    <button className="flex-col justify-center items-center lg:hidden flex py-2 gap-1" onClick={handleClick}>
      <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
      <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
      <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
    </button>

      <div className="w-full lg:flex justify-between items-center hidden">
      <nav className="flex gap-5 items-center">
        <CustomLink href='/' title={'Home'} />
        <CustomLink href='/about' title={'About'} />
        <CustomLink href='/projects' title={'Projects'} />
        <CustomLink href='/articles' title={'Articles'} />
      </nav>
      <nav className='flex items-center justify-center flex-wrap gap-4'>
        <motion.a href='#' target={'_blank'}
      
          whileHover={{y: -2}}
          whileTap={{scale: 0.9}}
          className="w-6"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a href='#' target={'_blank'}
          whileHover={{y: -2}}
          whileTap={{scale: 0.9}}
          className="w-6"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a href='#' target={'_blank'}
          whileHover={{y: -2}}
          whileTap={{scale: 0.9}}
          className="w-6"
        >
          <GithubIcon />
        </motion.a>

        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className="flex items-baseline justify-center rounded-full p-1"
        >
        {
          mode === "dark" ?
          <SunIcon className={"fill-dark"} />
          : <MoonIcon className={"fill-dark"} />
        }
        </button>
      </nav>
      </div>

      {
        isOpen ?
      <motion.div 
      initial={{scale: 0, opacity: 0, x: "-50%", y: "-50%"}}
      animate={{scale: 1, opacity: 1}}
      className="min-w-[70vw] flex flex-col  gap-2 justify-between items-center fixed z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:hidden
      bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32">
      <nav className="flex gap-3 items-center flex-col justify-center ">
        <CustomMobileLink href='/' title={'Home'} toggle={handleClick} />
        <CustomMobileLink href='/about' title={'About'} toggle={handleClick} />
        <CustomMobileLink href='/projects' title={'Projects'} toggle={handleClick} />
        <CustomMobileLink href='/articles' title={'Articles'} toggle={handleClick} />
      </nav>
      <nav className='flex items-center justify-center flex-wrap gap-4'>
        <motion.a href='#' target={'_blank'}
      
          whileHover={{y: -2}}
          whileTap={{scale: 0.9}}
          className="w-6"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a href='#' target={'_blank'}
          whileHover={{y: -2}}
          whileTap={{scale: 0.9}}
          className="w-6"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a href='#' target={'_blank'}
          whileHover={{y: -2}}
          whileTap={{scale: 0.9}}
          className="w-6 bg-light rounded-full dark:bg-dark"
        >
          <GithubIcon />
        </motion.a>

        <button
          onClick={() => setMode(mode === "dark" ? "light" : "dark")}
          className="flex items-baseline justify-center rounded-full p-1"
        >
        {
          mode === "dark" ?
          <SunIcon className={"fill-dark bg-light rounded-full dark:bg-dark"} />
          : <MoonIcon className={"fill-dark bg-light rounded-full dark:bg-dark"} />
        }
        </button>
      </nav>
      </motion.div>
        : null
      }
      
      <div className="absolute left-[50%] top-2 translate-x-[-50px]">
        <Logo/>
      </div>
    </header>
  )
}

export default Navbar