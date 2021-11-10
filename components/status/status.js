import React from 'react';

const Status = ({state,destroy,handleReady}) => {
    switch (state){
        case 'BEINGDESTROY':
            return <div className=" bg-green-50 px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:py-7">
                <dt>À DÉTRUIRE</dt>
                <dd>
                    <button className="bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Détruire</button>
                </dd>

            </div>
        case 'STOCK':
            return <div className=" bg-green-50 px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:py-7">
                <dt>En STOCK</dt>
                <dd>
                    <button className="bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleReady}>Afecté</button>
                </dd>
            </div>

        case 'DESTROY':
            return <div className=" bg-green-50 px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:py-7">
                <dt>DETRUIT</dt>
                <dd className="sm:col-span-2">détruit le :{destroy.destroydAt}</dd>
            </div>
        case 'READY':
            return <div className=" bg-green-50 px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:py-7">
                <dd>AFFECTÉ</dd>
                <dd className="sm:col-span-2">
                    <ul>
                        <li>unite</li>
                    </ul>

                </dd>

            </div>
    }
};

export default Status;