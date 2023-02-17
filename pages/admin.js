import AdminLayout from "../layout/AdminLayout";

export default function Admin() {
    return (
        <AdminLayout page="Admin">
            <h1 className="text-3xl font-black">Administration Panel</h1>
            <p className="text-2xl my-10"> Manage your orders</p>
        </AdminLayout>
    )
}