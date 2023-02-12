import Image from "next/image"
import { formatAmount } from "../helpers"

export default function OrderResume({product}) {

    const {name, image, price, amount} = product

  return (
    <div className="shadow p-5 mb-3 flex gap-10 items-center">
        <div className="md:w-1/6">
            <Image
                width={400}
                height={400}
                alt={`Image product ${name}`}
                src={`/assets/img/${image}.jpg`}
            />
        </div>
        <div className="md:w-5/6">
            <p className="text-3xl font-bold">{name}</p>
            <p className="text-xl font-bold mt-2"> Amount: {amount}</p>
            <p className="text-xl font-bold mt-2"> Price: {" "}
            <span className="text-xl font-bold text-amber-500">{formatAmount(price)}</span>
            </p> 
            <p className="text-sm text-gray-700 mt-2">
                Subtotal: {formatAmount(price * amount)}
            </p> 
        </div>
        </div>
  )
}
