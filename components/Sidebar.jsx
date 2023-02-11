import Image from "next/image"


export default function Sidebar() {
  return (
    <div>
        <Image width={300} height={100}
            src="/assets/img/logo_standfood.png"
            alt="Logo Stand Food"/>
    </div>
  )
}