import React from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';

const MaterielSimpleForm = ({imeiNumber, marque, type, state , phoneAndSmartphone,observation, handleClick}) => {
    let pvNumber = phoneAndSmartphone ? phoneAndSmartphone.pvNumber : ''
    return (
        <Formik initialValues={{
            pvNumber: pvNumber, materials:{ imeiNumber: imeiNumber, marque: marque, type: type, state: state,observation}
        }} onSubmit={handleClick}>
            {((props) => (
                <Form>
                    <div className="mt-1">
                        <Field
                            name='pvNumber'
                            placeholder="Numero de pv"
                            type="text"
                            className="my-1 shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                        <ErrorMessage
                            name='pvNumber'
                            component="div"

                        />
                    </div>
                    <div className="mt-1">
                        <Field
                            component="textarea"
                            name='materials.observation'
                            placeholder="observation"
                            type="text"
                            className="my-1 shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                        <ErrorMessage
                            name='observation'
                            component="div"

                        />
                    </div>
                    <div className="border border-yellow-200 p-3 mb-4">
                        <h3>Matériel</h3>
                        <div className="mb-2">
                            <div className="md:flex mb-5 justify-around flex-wrap">

                                <div className="flex-auto">
                                    <div>
                                        <Field
                                            name='materials.imeiNumber'
                                            placeholder="IMEI"
                                            type="text"
                                            className="my-1 shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md "
                                        />
                                        <ErrorMessage
                                            name='materials.imeiNumber'
                                            component="div"

                                        />
                                    </div>
                                    <div>
                                        <Field
                                            name='materials.marque'
                                            placeholder="Marque"
                                            type="text"
                                            className="my-1 shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md "
                                        />
                                        <ErrorMessage
                                            name='materials.marque'
                                            component="div"

                                        />
                                    </div>
                                    <div>
                                        <Field
                                            name='materials.type'
                                            placeholder="Type"
                                            type="text"
                                            className="my-1 shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md "
                                        />
                                        <ErrorMessage
                                            name='materials.type'
                                            component="div"

                                        />
                                    </div>
                                    <div>
                                        <Field
                                            className=" my-1 shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            name='materials.state' component="select">
                                            <option value="">--- Etat ---</option>
                                            <option value="TOBLOCK">Bloquer</option>
                                            <option value="UNLOCK">Débloquer</option>
                                            <option value="UNUSABLE">Initulisabel</option>
                                        </Field>
                                    </div>


                                </div>

                            </div>


                        </div>


                    </div>


                    <button
                            className='bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                            type="submit"
                    >Créer
                    </button>

                </Form>
            ))}

        </Formik>
    );
};

export default MaterielSimpleForm;