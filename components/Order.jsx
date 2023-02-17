
export default function Order({orderFood}) {
    const { id, name, total, order} = orderFood

  return (
    <div className="border p-10 space-y-5">
        <h1 className="text-2xl font-bold">Order: {id}</h1>
        <p className="text-lg font-bold"> Client: {name}</p>

    </div>
  )
}
