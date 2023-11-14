
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:border-light dark:text-light font-medium text-lg py-8 px-8 lg:px-20 flex flex-col md:flex-row items-center justify-between">
      <span>{`${new Date().getFullYear()}`} &copy; All Rights Reserved.</span>
      <Link href="/" className="underline underline-offset-2">Ndukaegho Sabastine</Link>
      <Link href="mailto:" className="underline underline-offset-2">Say hello</Link>
    </footer>
  )
}

export default Footer