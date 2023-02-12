import Image from "next/image"
import useStand from "../hooks/useStand"

function Category({category}) {
    const {name, icon, id} = category
    const {currentCategory, handleDetectedCategory } = useStand()

  return (
    <div className={`${currentCategory?.id === id ? "bg-amber-400" : ""}
        flex items-center gap-4 w-full border p-5 hover:bg-amber-400 rounded-xl`}>
        <Image
            width={70}
            height={70}
            src={`/assets/img/icono_${icon}.svg`}
            alt="icon image"
        />

        <button
            type="button"
            className="text-2xl font-bold hover:cursor-pointer"
            onClick={()=> handleDetectedCategory(id)}
        >
            {name}
        </button>
    </div>
  )
}

export default Category