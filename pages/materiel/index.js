import React from "react";
import {PrismaClient}from '@prisma/client'
import TableItems from "../../components/TableItems/tableItems";
import TableBody from "../../components/tableItems/tableBody";
const prisma = new PrismaClient()
export async function getStaticProps() {



    const materials = await prisma.material.findMany({

        include: { phoneAndSmartphone: true},
    })
    const data = JSON.parse(JSON.stringify(materials))


    return {

        props : {data}

    }

}

const MaterialLists = ({data}) => {

    return (
            <div>
                <TableBody>
                    {data?.map((items,i)=>(
                        <TableItems key={items.id} index={i} items={items}/>
                    ))

                    }
                </TableBody>
            </div>




    );
};

export default MaterialLists;