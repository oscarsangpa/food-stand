import Image from "next/image"
function Category({category}) {
    const {name, icon, id} = category

  return (
    <div className="flex items-center gap-4 w-full border p-5 hover:bg-amber-400 rounded-xl">
        <Image
            width={70}
            height={70}
            src={`/assets/img/icono_${icon}.svg`}
            alt="icon image"
        />

        <button
            type="button"
            className="text-2xl font-bold hover:cursor-pointer"
        >
            {name}
        </button>
    </div>
  )
}

export default Category