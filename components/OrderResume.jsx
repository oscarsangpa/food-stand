import Image from "next/image"
import { formatAmount } from "../helpers"
import useStand from "../hooks/useStand"
import {EditIcon, DeleteIcon} from "../components/IconButtons"

export default function OrderResume({product}) {
    const {name, image, price, amount, id} = product
    const {handleEditAmount, handleDeleteProduct } = useStand()


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
        <div className="md:w-4/6">
            <p className="text-3xl font-bold">{name}</p>
            <p className="text-xl font-bold mt-2"> Amount: {amount}</p>
            <p className="text-xl font-bold mt-2"> Price: {" "}
            <span className="text-xl font-bold text-amber-500">{formatAmount(price)}</span>
            </p> 
            <p className="text-sm text-gray-700 mt-2">
                Subtotal: {formatAmount(price * amount)}
            </p> 
        </div>
            <div>
                <button
                    type="button"
                    className="bg-sky-700 flex gap-2 px-5 py-2 text-white rounded-md font-bold uppercase shadow-md hover:bg-sky-900 w-full"
                    onClick={() => handleEditAmount(id)}
                >
                    <EditIcon/>
                    Edit
                </button>
                <button
                    type="button"
                    className="bg-red-900 flex gap-2 px-5 py-2 text-white rounded-md font-bold uppercase shadow-md hover:bg-red-600 w-full mt-3"
                    onClick={() => handleDeleteProduct(id)}
                >
                    <DeleteIcon/>
                    Delete
                </button>
            </div>
        </div>
  )
}
