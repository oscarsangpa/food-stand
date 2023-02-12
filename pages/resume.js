import Layout from "../layout/Layout"
import useStand from "../hooks/useStand"
import OrderResume from "../components/OrderResume"


export default function Resume() {
    const { order } = useStand()

  return (
    <Layout page="Resume">
        <h1 className="text-3xl font-black">Resume</h1>
        <p className="text-2xl my-10"> Check your Order </p>

        {order.length === 0 
        ?( <p className="text-3xl text-center">Not Orders Yet 😞 </p>) 
        : (
            order.map(product => (
                <OrderResume
                    key={product.id}
                    product={product}
                />
                
            ))
        )}
    </Layout>
  )
}
