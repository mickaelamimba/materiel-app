import React, {useState} from 'react';
import {PrismaClient} from "@prisma/client";
import MaterialForm from "../../../components/form/materialForm";
import MaterielSimpleForm from "../../../components/form/materielSimpleForm";

const Edit = ({data}) => {
    const [simple, setSimple] = useState(true)

    const handleClick= async(values)=>{
        const res = await fetch(`/api/material`,{
            body: JSON.stringify(values),
            headers: {'Content-type':'application/json'},
            method:'PUT'
        })
       const  result = await res.json()
        console.log(result)
    }
    const handleClickSimple = async (values) => {
        const res = await fetch('/api/material-simple', {
            body: JSON.stringify(values),
            headers: {'Content-type': 'application/json'},
            method: 'POST'
        })
        const result = await res.json()


    }
    return (
        <div>
            {simple ?
                <MaterielSimpleForm {...data} handleClick={handleClickSimple}/> :
                <MaterialForm {...data} handleClick={handleClick}/>

            }

        </div>
    );
};

export default Edit;

export async function getStaticPaths() {
    const prisma = new PrismaClient();
    const materials = await prisma.material.findMany();

    return {
        paths: materials.map((material) => ({
            params: {
                editId: material.id.toString()
            }
        })),
        fallback: false
    };
}
export async function getStaticProps({ params }) {
    const prisma = new PrismaClient();
    const {editId} =params
    const dataForUpdate = await prisma.material.findUnique({
        include: { phoneAndSmartphone: true},
        where: {
            id: Number(editId)
        }
    });
    const data = JSON.parse(JSON.stringify(dataForUpdate))
    return {
        props: {
            data
        }
    };
}
