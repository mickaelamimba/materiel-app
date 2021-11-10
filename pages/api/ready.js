import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()
export default async  function handler(req, res){
    console.log(req.body)
  if(req.method === 'POST'){

      let loanDate = new Date(req.body.ready.loanDate)

        const readyMateriel = await prisma.ready.create({
            data: {
                loanDate:loanDate,
                loanReturn:req.body.ready.loanReturn ?
                    new Date(req.body.ready.loanReturn):'',
                isReady:true,
                unite:{connect: {id:parseInt(req.body.ready.unite,10)}},
                material: {connect: {imeiNumber: req.body.imeiNumber}}
                }
        })
      const updateMaterial = await prisma.material.update(
          {where:{
                  imeiNumber: req.body.imeiNumber
              },
              data: {
                  observation:req.body.observation,
                  status:'READY'
              }

          }
      )
    }
}