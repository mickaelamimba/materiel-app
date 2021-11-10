import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async  function handler(req, res) {
    if(req.method ==='POST'){
        const findConfiscaton =await prisma.confiscation.findUnique({
            where: {
                pvNumber: req.body.pvNumber,
            }
        })
            if(!findConfiscaton){
                const confiscation = await prisma.confiscation.create(
                    {
                        data: {
                            pvNumber: req.body.pvNumber,

                            material:{

                                createMany:{
                                    data:req.body.materials,
                                    skipDuplicates: true,

                                },


                            }

                        },
                        include:{ material: true}

                    }
                )
                res.status(200).json(confiscation)
            }else{

                const material = await prisma.confiscation.update(
                    {
                        where:{
                            pvNumber: req.body.pvNumber,
                        },
                        data:{
                            material:{

                                createMany:{
                                    data:req.body.materials,
                                    skipDuplicates: true,
                                },


                            }
                        }
                        ,
                        include:{ material: true}

                    }
                )
                res.status(200).json(material)
            }


    }


}