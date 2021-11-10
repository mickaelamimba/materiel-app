import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async  function handler(req, res){
    if (req.method ==='DELETE'){
        console.log(req.body)
        const deleteMaterial = await prisma.material.delete({
            where: {
                id:req.body
            }
        })
        res.status(200).json(deleteMaterial)
    }
}