import Image from "next/image"
import Link from "next/link"
import useStand from "../hooks/useStand"
import Category from "./Category"



export default function Sidebar() {
  const {categories} = useStand()

  return (
    <>
    <Link href="/">
        <Image
            className="p-10 mx-5 pb-0 pt-5"
            width={250} 
            height={150}
            src="/assets/img/logo.svg"
            alt="Logo Stand Food"/>

    </Link>

    <nav className="mt-10">
      {categories.map(category => (
        <Category
          key={category.id}
          category={category}
        />
      ))}

    </nav>
    </>
  )
}