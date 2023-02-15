import { useEffect, useCallback } from "react"
import Layout from "../layout/Layout"
import useStand from "../hooks/useStand"

export default function Total() {
  const { order, name, setName } = useStand()

  const checkOrder = useCallback(() => {
    return order.length === 0 || name === "" | name.length === 3
  }, [order, name])

  useEffect(()=> {
    checkOrder()
  },[order, checkOrder])

  const sendOrder = (e) => {
    e.preventDefault()
    console.log("first")
  }


  return (
    <Layout page="Total">
        <h1 className="text-3xl font-black">Total</h1>
        <p className="text-2xl my-10"> Confirm your Order </p>

        <form
          onSubmit={sendOrder}
          >
          <div>
            <label
              htmlFor="name"
              className="block uppercase text-slate-800 font-bold text-xl"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded"
              value={name}
              onChange={ e => setName(e.target.value)}
              />
          </div>
          <div className="mt-10">
            <p className="text-2xl">Total to pay: {""} 
            <span className="font-bold">100€</span>
            </p>
          </div>
          <div className="mt-10">
            <input
              type="submit"
              className={`${checkOrder() ? "bg-indigo-100" : "bg-indigo-600 hover:bg-indigo-800"} w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}
              value="Confirm Order"
              disabled={checkOrder()}
            />
          </div>
        </form>
    </Layout>
  )
}
