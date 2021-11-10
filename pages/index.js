import React, {useState} from "react";
import {PrismaClient} from "@prisma/client";
import {useRouter} from "next/router";
import {classNames} from "../components/dashboard/data";

const prisma = new PrismaClient()

export default function Home({stock,ready,beingDestroy}) {
    const router = useRouter()
    const [open, setOpen]=useState(false)
    const [active, setActive]=useState(null)
    const handleChange =(e)=>{
        if(e){setActive(e)}
    }


  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3 ">
      <section className=" bg-green-50 rounded-md shadow-md p-5">
        <h4 className="font-awesome p-2 text-xl">Materiel En Stock</h4>
          {stock?
          stock.map((items)=>(


              <div   onClick={()=>handleChange(items.id)} className="bg-white rounded-md shadow my-1  cursor-pointer" key={items.id}>
                <div className={classNames('overflow-hidden shadow px-2', active === items.id?'pb-10':'pb-0' )}>
                    <p className="font-light text-xl text-gray-600">N° PV: <span>{items.phoneAndSmartphone.pvNumber}</span></p>
                    <p>N° IMEI: <span>{items.imeiNumber}</span></p>

                </div>
                  { active === items.id?
                      <div className="grid grid-cols-2 gap-4 p-2">
                          <button  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ' onClick={()=>router.push(`/materiel/${items.id}`)}>info</button>
                          <button  className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ' onClick={()=>router.push(`/materiel/ready/${items.id}`)}>Affecter</button>

                      </div> :null
                  }


              </div>
          )):
              <p>plus de materiel en stock</p>
          }

      </section>
      <section className=" bg-yellow-50 rounded-md shadow-md p-5">
        <h4 className="font-awesome p-2 text-xl">Materiel En Affecter</h4>
          <div>
              {ready?
                  ready.map((items)=>(
                      <div onClick={()=>handleChange(items.id)} key={items.id}  className="bg-white rounded-md shadow my-1  cursor-pointer" >
                          <div className={classNames('overflow-hidden shadow px-2',active === items.id?'pb-10':'pb-0' )}>
                              <p>{items.phoneAndSmartphone.pvNumber}</p>
                              <p>{items.imeiNumber}</p>
                              <hr/>
                              <div>
                                  <h5 className="font-light text-xl py-2 text-center text-gray-600" >Unité</h5>
                                  <p>{items.ready.unite.uniteGroups}</p>
                                  <p>{items.ready.unite.userName}</p>

                              </div>
                          </div>
                          {active === items.id?
                              <div className=" p-2">
                                  <button  className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ' onClick={()=>router.push(`/materiel/ready/${items.id}`)}>Retoure</button>

                              </div> :null
                          }


                      </div>
                  )):
                <p>aucun matériel affecté</p>
              }
          </div>

      </section>
      <section className=" bg-red-50 rounded-md shadow-md p-5">
        <h4 className="font-awesome p-2 text-xl">Initulisabe à Detruire</h4>
          {beingDestroy?
              beingDestroy.map((items)=>(
                  <div className="bg-white rounded-md shadow my-1 px-2 cursor-pointer" key={items.id}>
                      <p>{items.phoneAndSmartphone.pvNumber}</p>
                      <p>{items.imeiNumber}</p>

                  </div>
              )):
              <p>Aucun matériel a détruire </p>
          }
      </section>


    </div>
  )
}

export async function getStaticProps(){
    const dataInStock = await prisma.material.findMany({
        where: {
            status:'STOCK'
        },
        include:{phoneAndSmartphone: true}
    })
    const dataReady = await prisma.material.findMany({
        where: {
            status:'READY'
        },
        include:{phoneAndSmartphone: true,ready: {
            include:{
                unite: true
            }
            }}
    })
    const dataBeingDestroy = await prisma.material.findMany({
        where: {
            status:'BEINGDESTROY'
        },
        include:{phoneAndSmartphone: true}
    })
    const beingDestroy  = JSON.parse(JSON.stringify(dataBeingDestroy))
    const stock = JSON.parse(JSON.stringify(dataInStock))
    const ready = JSON.parse(JSON.stringify(dataReady))

    return {

        props : {stock,ready,beingDestroy}

    }
}
