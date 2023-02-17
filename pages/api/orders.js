import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {
    const prisma = new PrismaClient()

    // get orders
    const orders = await prisma.orderFood.findMany({
        where: {
            state: false
        }
    })
    res.status(200).json(orders)
    

    // create order
    if (req.method === "POST") {
        const order = await prisma.orderFood.create({
            data: {
                name: req.body.name,
                total: req.body.total,
                date: req.body.date,
                order: req.body.order
            }
        })
        res.status(200).json(order)
    }
}