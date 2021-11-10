import React, {useState} from 'react';
import MaterialForm from "../../../components/form/materialForm";
import MaterielSimpleForm from "../../../components/form/materielSimpleForm";


const Add = () => {
    const [simple, setSimple] = useState(true)
    const handleClick = async (values) => {
        const res = await fetch('/api/material', {
            body: JSON.stringify(values),
            headers: {'Content-type': 'application/json'},
            method: 'POST'
        })
        const result = await res.json()


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
        <>
            <h2>Ajouter un materiel</h2>

            <hr/>
            <div className="mb-3">
                <p>Ajout multiple : <button onClick={() => setSimple(false)}>XXX</button></p>
                <p>Ajout simplie : <button onClick={() => setSimple(true)}>X</button></p>

            </div>
            {simple ?
                <MaterielSimpleForm handleClick={handleClickSimple}/> :
                <MaterialForm handleClick={handleClick}/>

            }

        </>
    );
};

export default Add;
