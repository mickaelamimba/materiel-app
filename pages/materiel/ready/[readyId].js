import React from 'react';
import {PrismaClient} from "@prisma/client";
import ReadyMaterielForm from "../../../components/form/readyMaterielForm";


const ReadyMateriel = ({data, dataUnite}) => {
    console.log( dataUnite)
    const handleSubmit = async(values)=>{
        const res = await fetch('/api/ready', {
            body: JSON.stringify(values),
            headers: {'Content-type': 'application/json'},
            method: 'POST'
        })
        const result = await res.json()
        console.log(result)

    }
    return (
        <div>
            <ReadyMaterielForm {...data} unite={dataUnite}
                               handleSubmit={handleSubmit}/>
        </div>
    );
};

    export default ReadyMateriel;


export async function getStaticProps({ params }) {
    const prisma = new PrismaClient();
    const {readyId} =params
    const dataForReady = await prisma.material.findUnique({
        include: { phoneAndSmartphone: true},
        where: {
            id: Number(readyId)
        }
    });
    const unite = await prisma.unite.findMany()
    const data = JSON.parse(JSON.stringify(dataForReady))
    const dataUnite = JSON.parse(JSON.stringify(unite))
    return {
        props: {
            data,
            dataUnite
        }
    };
}
export async function getStaticPaths() {
    const prisma = new PrismaClient();
    const readyMaterials = await prisma.material.findMany();

    return {
        paths: readyMaterials.map((material) => ({
            params: {
                readyId: material.id.toString()
            }
        })),
        fallback: false
    };
}