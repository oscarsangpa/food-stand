import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {

    const prisma = new PrismaClient()

    if(req.method === 'POST') {
        const { id } = req.query

        const orderUpdated = await prisma.orderFood.update({
            where: {
                id: parseInt(id)
            },
            data: {
                state: true
            }
        })
        res.status(200).json(orderUpdated)
    }
}