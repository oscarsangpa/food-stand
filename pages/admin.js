import useSWR from "swr"
import axios from "axios";
import AdminLayout from "../layout/AdminLayout";
import Order from "../components/Order";

export default function Admin() {

    const fetcher = () => axios("/api/orders").then(data => data.data)
    const { data, error, isLoading } = useSWR("/api/orders", fetcher, { refreshInterval: 100 })
    return (
        <AdminLayout page="Admin">
            <h1 className="text-3xl font-black">Administration Panel</h1>
            <p className="text-2xl my-10"> Manage your orders</p>

            {data && data.length ?
                data.map(order => (
                    <Order
                        key={order.id}
                        orderFood={order}
                    />
                ))
                : <p>No orders pending 😄</p>
            }
        </AdminLayout>
    )
}