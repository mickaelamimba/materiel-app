import React from "react";

import {PrismaClient} from "@prisma/client";
import {parseState} from "../../func/parseData";
import Status from "../../components/status/status";
import {useRouter} from "next/router";

export async function getStaticProps({ params }) {
    const prisma = new PrismaClient();
    const oneMaterials = await prisma.material.findUnique({
        include: { phoneAndSmartphone: true,destroy:true,ready:{include:{unite:true}}},
        where: {
            id: Number(params.id)
        }
    });

    const data = JSON.parse(JSON.stringify(oneMaterials ))

    return {
        props: {
            data

        }
    };
}

export async function getStaticPaths() {
    const prisma = new PrismaClient();
    const materials = await prisma.material.findMany();

    return {
        paths: materials.map((material) => ({
            params: {
                id: material.id.toString()
            }
        })),
        fallback: false
    };
}

const Material = ({data}) => {
    const router = useRouter()
const handleReady = async()=>{
    await router.push(`ready/${data.id}`)
}


    return (
        <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-6 sm:px-7">
                <h3 className="text-lg leading-6 font-medium text-gray-900">{data.type}</h3>
                <p>{data.phoneAndSmartphone.observation}</p>
            </div>
            <div className="border-t border-gray-200">
                <dl>
                    <div className=" bg-green-50 px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:py-7">
                        <dt>N° PV</dt>
                        <dd>{data.phoneAndSmartphone.pvNumber}</dd>
                    </div>
                    <div className=" bg-white px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:py-7">
                        <dt>N° IMEI</dt>
                        <dd>{data.imeiNumber}</dd>
                    </div>
                    <div className=" bg-green-50 px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:py-7">
                        <dt>MARQUE</dt>
                        <dd>{data.marque}</dd>
                    </div>
                    <div className=" bg-white px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:py-7">
                        <dt>Etat</dt>
                        <dd>{parseState(data.state)}</dd>
                    </div>
                    <Status state={data.status} destroy={data.destroy} handleReady={handleReady}/>



                </dl>
            </div>

        </div>
    );
};

export default Material;
