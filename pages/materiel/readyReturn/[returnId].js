import React from 'react';
import {PrismaClient} from "@prisma/client";

const ReadyReturn = ({data,dataUnite}) => {
    return (
        <div>

        </div>
    );
};

    export default ReadyReturn;

export async function getStaticProps({ params }) {
    const prisma = new PrismaClient();
    const {returnId} =params
    const dataForReady = await prisma.material.findUnique({
        include: { phoneAndSmartphone: true},
        where: {
            id: Number(returnId)
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
                returnId: material.id.toString()
            }
        })),
        fallback: false
    };
}