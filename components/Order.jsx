import Image from "next/image"
import {formatAmount} from "../helpers"

export default function Order({ orderFood }) {
    const { id, name, total, order } = orderFood

    const completeOrder = () => {
        console.log('complete...', id)
    }

    return (
        <div className="border p-8 space-y-5">
            <h1 className="text-2xl font-bold">Order: {id}</h1>
            <p className="text-lg font-bold"> Client: {name}</p>

            <div>
                {order.map(plate => (
                    <div
                        className="py-3 flex border-b  last-of-type:border-0 items-center"
                        key={plate.id}>
                        <div className="w-32">
                            <Image
                                className="rounded"
                                width={400}
                                height={500}
                                src={`/assets/img/${plate.image}.jpg`}
                                alt={`image plate ${plate.name}`}
                            />
                        </div>

                        <div className="p-5 space-y-2">
                            <h4 className="text-xl font-bold text-amber-500">
                                {plate.name}
                            </h4>
                            <p className="font-bold text.lg">Amount: {plate.amount}</p>

                        </div>

                    </div>
                ))}
            </div>
            <div className="md:flex md:items-center md:justify-between my-10">
                <p className="mt-5 font-black text-4xl text-amber-500">
                    Total to pay: {formatAmount(total)}
                </p>
                <button
                    type="button" 
                    className="bg-indigo-600 hover:bg-indigo-800 text-white mt-5 md:mt-10 py-3 px-10 uppercase font-bold rounded"
                    onClick={completeOrder}
                    
                    >
                    
                    Complete Order
                </button>
            </div>
        </div>
    )
}
