import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async  function handler(req, res){
    const channelStatus = async (materials)=>{
        const state = req.body.materials.state

        if (state === 'UNUSABLE'|| state === 'TOBLOCK') {
            const unusable = await prisma.material.update({
                where:{
                    id:materials.id,
                },
                data: {
                    status :'BEINGDESTROY'
                }
            })
        } else {
            if (state === 'UNLOCK'){
                const stock = await prisma.material.update({
                    where:{
                        id:materials.id,
                    },data: {
                        status :'STOCK'
                    }
                })
            }
        }
    }
    if (req.method === 'POST'){
        let findConfiscaton =await prisma.confiscation.findUnique({
            where: {
                pvNumber: req.body.pvNumber,
            }
        })
        if(!findConfiscaton){
            findConfiscaton = await prisma.confiscation.create({
                data: {pvNumber: req.body.pvNumber}
            })

        }
        const materials = await prisma.material.create({
            data: {...req.body.materials, phoneAndSmartphone:{connect:{id:findConfiscaton.id}}},

        })
       await  channelStatus(materials)



    }
    if(req.method === 'PUT'){
        let findConfiscaton =await prisma.confiscation.findUnique({
            where: {
                pvNumber: req.body.pvNumber,
            }
        })
        if(!findConfiscaton){
            findConfiscaton = await prisma.confiscation.update({
                where: {
                    id: findConfiscaton.id
                },
                data: {pvNumber: req.body.pvNumber}
            })

        }
        const materials = await prisma.material.update({
            data: {...req.body.materials, phoneAndSmartphone:{connect:{id:findConfiscaton.id}}},

        })
        await  channelStatus(materials)
    }
}