import React from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';

const ReadyMaterielForm = ({phoneAndSmartphone, marque, type, state, imeiNumber,unite,observation, handleSubmit}) => {

    return (
        <Formik onSubmit={handleSubmit}
                initialValues={{pvNumber: phoneAndSmartphone.pvNumber, marque, type, state,
                    imeiNumber,observation:observation, ready:{loanDate:'',loanReturn:'',unite:0}}}>
            {((props) => (
                <Form>
                    <div>
                        <label htmlFor="pvNumber">Numero de pv</label>
                        <Field
                            readOnly="readonly"
                            label='Numero de pv'
                            name='pvNumber'
                            placeholder="Numero de pv"
                            type="text"
                            className="my-1 bg-green-200 shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                        <ErrorMessage
                            name='pvNumber'
                            component="div"

                        />
                    </div>
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4">

                        <div>
                            <label htmlFor="imeiNumber">IMEI</label>
                            <Field
                                readOnly="readonly"
                                name='imeiNumber'
                                placeholder="IMEI"
                                type="text"
                                className="my-1 bg-green-200 shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md "
                            />
                            <ErrorMessage
                                name='imeiNumber'
                                component="div"

                            />
                        </div>
                        <div>
                            <label htmlFor="marque">Marque</label>
                            <Field
                                readOnly="readonly"
                                name='marque'
                                placeholder="Marque"
                                type="text"
                                className="my-1 bg-green-200 shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md "
                            />
                            <ErrorMessage
                                name='marque'
                                component="div"

                            />
                        </div>
                        <div>
                            <label htmlFor="type">Type</label>
                            <Field
                                readOnly="readonly"
                                name='type'
                                placeholder="Type"
                                type="text"
                                className="my-1 bg-green-200 shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md "
                            />
                            <ErrorMessage
                                name='type'
                                component="div"

                            />
                        </div>

                    </div>
                    <div>
                        <label htmlFor="state">Etat</label>
                        <Field
                            disabled
                            className=" my-1 bg-green-200 shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            name='state' component="select">
                            <option value="">--- Etat ---</option>
                            <option value="TOBLOCK">Bloquer</option>
                            <option value="UNLOCK">Débloquer</option>
                            <option value="UNUSABLE">Initulisabel</option>
                        </Field>
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
                            name='observation'
                            component="div"

                        />
                    </div>
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4">
                        <div>
                            <label htmlFor="ready.loanDate">Date affectation / Prêt</label>
                            <Field
                                name='ready.loanDate'
                                type="date"
                                className="my-1  shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md "
                            />
                            <ErrorMessage
                                name='ready.loanDate'
                                component="div"

                            />
                        </div>
                        <div>
                            <label htmlFor="ready.loanReturn">Date de retour / Prêt</label>
                            <Field
                                name='ready.loanReturn'
                                type="date"
                                className="my-1  shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md "
                            />
                            <ErrorMessage
                                name='ready.loanReturn'
                                component="div"

                            />
                        </div>
                        <div>
                            <label htmlFor="ready.unite">Unite</label>
                            <Field
                                className=" my-1  shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                name='ready.unite' component="select">
                                <option value="">--- unite ---</option>
                                {unite?.map((item)=>(
                                    <option key={item.id} value={Number(item.id)}>{item.uniteGroups}</option>
                                ))}

                            </Field>
                        </div>

                    </div>

                    <button
                        className='bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                        type="submit"
                    >Affecter
                    </button>


                </Form>
            ))}

        </Formik>
    );
};

export default ReadyMaterielForm;