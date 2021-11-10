import React from 'react';
import {useRouter} from "next/router";
import {EyeIcon, PencilAltIcon,TrashIcon } from "@heroicons/react/outline";
import {parseState} from "../../func/parseData";

const TableItems = ({items,index}) => {
    let result={}
    const router = useRouter()
    const handleClick = async(params)=>{
        await router.push(`/materiel/${params}`)
    }
    const handleEdit = async (params)=>{
        await router.push(`/materiel/edit/${params}`)
    }
    const handleTrash = async(params)=>{
        const res = await fetch(`/api/delete`,{
            body: JSON.stringify(params),
            headers: {'Content-type':'application/json'},
            method:'DELETE'
        })
        await router.push(`/materiel`)
        result = await res.json()
        console.log(result)
    }
    return (
        <tr className={index % 2 === 0 ? 'bg-white' : 'bg-green-50'}>
           <td>{items.phoneAndSmartphone.pvNumber}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-green-500 font-medium text-gray-900">{items.imeiNumber}</td>
           <td className="px-6 py-4 whitespace-nowrap text-sm text-green-500">{items.marque}</td>
           <td className="px-6 py-4 whitespace-nowrap text-sm text-green-500">{items.type}</td>
           <td className="px-6 py-4 whitespace-nowrap text-sm text-green-500">{parseState(items.state)}</td>
            <td>
                <button className="px-3 " onClick={()=>handleClick(items.id)}><EyeIcon className="h-6 w-6 text-indigo-300 hover:text-indigo-500"/></button>
                <button className=" px-3 " onClick={()=>handleEdit(items.id)}> <PencilAltIcon className="h-6 w-6 text-yellow-300 hover:text-yellow-500"/> </button>
                <button className=" px-3 " onClick={()=>handleTrash(items.id)}> <TrashIcon className="h-6 w-6 text-red-300 hover:text-red-500"/> </button>
            </td>
        </tr>
    );
};

export default TableItems;