import React from 'react';
import {Formik, Field, Form, ErrorMessage, FieldArray} from 'formik';


const MaterialForm = ({imeiNumber, marque, type, state, phoneAndSmartphone,observation, handleClick}) => {
    let pvNumber = phoneAndSmartphone ? phoneAndSmartphone.pvNumber : ''

    return (
        <Formik initialValues={{
            pvNumber: pvNumber,
            materials: [{imeiNumber: imeiNumber, marque: marque, type: type, state: state,observation}]
        }}
                onSubmit={handleClick}>
            {(({values}) => (
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
                            name='observation'
                            placeholder="observation"
                            type="text"
                            className="my-1 shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                        <ErrorMessage
                            name='pvNumber'
                            component="div"

                        />
                    </div>
                    <div className="border border-yellow-200 p-3 mb-4">
                        <h3>Matérielle</h3>
                        <div>
                            <FieldArray name="materials">
                                {(({remove, push}) => (
                                        <div className="mb-2">
                                            <div className="md:flex mb-5 justify-around flex-wrap">


                                                {values.materials.length > 0 &&
                                                values.materials.map((material, i) => (
                                                    <div className="flex-auto" key={i}>
                                                        <div>
                                                            <Field
                                                                name={`materials.${i}.imeiNumber`}
                                                                placeholder="IMEI"
                                                                type="text"
                                                                className="my-1 shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md "
                                                            />
                                                            <ErrorMessage
                                                                name={`materials.${i}.imeiNumber`}
                                                                component="div"

                                                            />
                                                        </div>
                                                        <div>
                                                            <Field
                                                                name={`materials.${i}.marque`}
                                                                placeholder="Marque"
                                                                type="text"
                                                                className="my-1 shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md "
                                                            />
                                                            <ErrorMessage
                                                                name={`materials.${i}.marque`}
                                                                component="div"

                                                            />
                                                        </div>
                                                        <div>
                                                            <Field
                                                                name={`materials.${i}.type`}
                                                                placeholder="Type"
                                                                type="text"
                                                                className="my-1 shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md "
                                                            />
                                                            <ErrorMessage
                                                                name={`materials.${i}.type`}
                                                                component="div"

                                                            />
                                                        </div>
                                                        <div>
                                                            <Field
                                                                className=" my-1 shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                name={`materials.${i}.state`} component="select">
                                                                <option value="">--- Etat ---</option>
                                                                <option value="TOBLOCK">Bloquer</option>
                                                                <option value="UNLOCK">Débloquer</option>
                                                                <option value="UNUSABLE">Initulisabel</option>
                                                            </Field>
                                                        </div>
                                                        <div className="my-5">
                                                            <a className='bg-red-300 text-white font-bold py-2 px-4  rounded focus:outline-none focus:shadow-outline my-5'
                                                               onClick={() => remove(i)}>
                                                                Supprimer
                                                            </a>
                                                        </div>

                                                    </div>
                                                ))
                                                }
                                            </div>
                                            <div>
                                                <a
                                                    className='bg-yellow-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                                                    onClick={() => push({
                                                        imeiNumber: '',
                                                        marque: '',
                                                        type: '',
                                                        state: ''
                                                    })}
                                                >
                                                    Ajouter
                                                </a>
                                            </div>

                                        </div>

                                    )
                                )}

                            </FieldArray>
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

export default MaterialForm;

