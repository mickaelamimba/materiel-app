import React from 'react';


const TableBody = ({children}) => {
    return (
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-green-50">
                <tr>
                    <th scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >
                        Numero de pv
                    </th>
                    <th scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >
                        Imei
                    </th>
                    <th scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >Marque
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >Type
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        statue
                    </th>
                    <th>
                        Action
                    </th>

                </tr>
                </thead>
                <tbody>

                {children}

                </tbody>
            </table>
        </div>
    );
};

export default TableBody;