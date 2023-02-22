import Image from "next/image"
import { formatAmount } from "../helpers"
import useStand from "../hooks/useStand"

export default function Product({ product }) {
    const { handleSetProduct, handleChangeModal } = useStand()
    const { name, image, price } = product

    return (
        <div className="p-3 border rounded">
            <Image
                className="w-full h-[400px] mx-0 rounded"
                src={`/assets/img/${image}.jpg`}
                alt="Product image"
                width={200}
                height={300}
            />

            <div className="flex flex-col h-[calc(100%_-_400px)] p-5 text-center justify-between">
                <h3 className="text-2xl font-bold">{name}</h3>

                <div className="flex flex-col gap-5">
                    <p className="text-4xl font-black text-amber-500">
                        {formatAmount(price)}
                    </p>
                    <button
                        type="button"
                        className="w-full p-3 font-bold text-white uppercase bg-indigo-600 rounded hover:bg-indigo-800"
                        onClick={() => {
                            handleChangeModal();
                            handleSetProduct(product);
                        }}
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}
