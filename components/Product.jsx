import Image from "next/image"
import { formatAmount } from "../helpers"
import useStand from "../hooks/useStand"

export default function Product({ product }) {
    const { handleSetProduct, handleChangeModal } = useStand()
    const { name, image, price } = product

  return (
    <div className="border p-3 rounded">
        <Image
            className="rounded mx-0 w-full"
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

            <button
                type="button"
                className="bg-indigo-600 hover:bg-indigo-800 rounded text-white w-full mt-5 p-3 uppercase font-bold" 
                onClick={()=> {
                    handleChangeModal()
                    handleSetProduct(product)   
                }}
            >
                Add
            </button>
        </div>
    </div>
  )
}
