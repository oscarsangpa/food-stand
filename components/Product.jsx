import Image from "next/image"
import { formatAmount } from "../helpers"

export default function Product({ product }) {
    const { name, image, price } = product

  return (
    <div className="border p-3 rounded-xl">
        <Image
            className="rounded-xl mx-0 w-full"
            src={`/assets/img/${image}.jpg`}
            alt="Product image" 
            width={300}
            height={400}
        />
        <div className="flex flex-col justify-self-stretch p-5 text-center">
            <h3 className="text-2xl font-bold">{name}</h3>
            <p className="mt-5 font-black text-4xl text-amber-500">
                {formatAmount(price)}
            </p>
        </div>
    </div>
  )
}
