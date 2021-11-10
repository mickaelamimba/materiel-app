import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async  function handler(req, res){
    if (req.method === 'POST'){
        const findConfiscaton =await prisma.confiscation.findUnique({
            where: {
                pvNumber: req.body.pvNumber,
            }
        })

        if(!findConfiscaton){
            const confiscation = await prisma.confiscation.create({
                data: {pvNumber: req.body.pvNumber}
            })

        }
            const state = req.body.materials.state

        if (state === 'UNUSABLE'|| state === 'TOBLOCK') {
            const unusable = await prisma.materials.update({
                where:{
                    state,
                    data: {
                        status :'BEINGDESTROY'
                    }
                }
            })
        } else {
            if (state === 'UNLOCK'){
                const stock = await prisma.materials.update({
                    where:{
                        state,
                        data: {
                            status :'STOCK'
                        }
                    }
                })
            }
        }


        const confiscatonUpdate = await prisma.confiscation.update({
            where: {
                id: findConfiscaton.id,

            },
            data: {
                material:{
                    createMany:{
                        data:req.body.materials,
                        skipDuplicates: true,

                    },
                updateMany:{
                    where:{state:'UNUSABLE'},
                    data:{
                        status :'BEINGDESTROY'
                    }
                }
                }
            },
            include:{ material: true}
        })

        res.status(200).json(confiscatonUpdate)
    }

    if (req.method === 'PUT'){
        const findConfiscaton =await prisma.confiscation.findUnique({
            where: {
                pvNumber: req.body.pvNumber,
            }
        })
        if(!findConfiscaton){
            const confiscation = await prisma.confiscation.create(
                {
                    data:{
                        material:{

                            createMany:{
                                data:req.body.materials,
                                skipDuplicates: true,
                            },


                        }

                    },
                    include:{ material: true},

                }
            )

        }
    const imei =req.body.materials.map((i=> i.imeiNumber))
        const confiscatonUpdate = await prisma.confiscation.update({
            where: {
                id: findConfiscaton.id ,

            },
            data: {
                material:{
                    updateMany:{
                        where:{...imei},
                        data:req.body.materials,
                        skipDuplicates: true,

                    },

                }
            },
            include:{ material: true}
        })

    }
    if(req.method === 'DELETE'){

    }


}