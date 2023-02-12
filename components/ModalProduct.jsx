import { useState } from "react"
import Image from "next/image"
import useStand from "../hooks/useStand"
import { formatAmount } from "../helpers"

export default function ModalProduct() {
    const { product, handleChangeModal} = useStand()
    const { name, image, price } = product
    const [amount, setAmount] = useState(1)
    return (
        <div className="md:flex gap-10">
            <div className="md:w-1/3">
                <Image
                    width={300}
                    height={400}
                    src={`/assets/img/${image}.jpg`}
                    alt={`Image product ${name}`}
                />
            </div>

            <div className="md:w-2/3">
                <div className="flex justify-end">
                    <button
                        onClick={handleChangeModal}
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" fill="none" 
                            viewBox="0 0 24 24" strokeWidth={1.5} 
                            stroke="currentColor" className="w-6 h-6">
                            <path
                                strokeLinecap="round" strokeLinejoin="round" 
                                d="M6 18L18 6M6 6l12 12" 
                            />
                        </svg>

                    </button>

                </div>
                <h2 className="text-3xl font-bold mt-5">{name}</h2>
                <p className="mt-5 font-black text-5xl text-amber-500">{formatAmount(price)}</p>

                <div className="flex gap-4 mt-5">
                  
                    <button type="button"
                        onClick={() => {
                            if(amount <=1 ) return
                            setAmount( amount - 1)
                        }}
                    >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" fill="none" 
                        viewBox="0 0 24 24" strokeWidth={1.5} 
                        stroke="currentColor" className="w-7 h-7">
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </button>

                    <p className="text-3xl">{amount}</p>

                    <button
                        type="button"
                        onClick={() => {
                            if(amount >= 5) return   
                            setAmount( amount + 1)
                     }}
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" fill="none" 
                            viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                            className="w-7 h-7">
                        <path 
                            strokeLinecap="round" strokeLinejoin="round" 
                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>

                </div>
            </div>
        </div>
    )
}
