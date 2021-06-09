import React from 'react'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'


export default function LoginForm() {
    const initialValues=({
        email:'',
        password:''
    })
    const validationSchema = Yup.object({
        email:Yup.string().email('Invalid Format').required('Required'),
        password:Yup.string().required('Required')
    })
    const onSubmit = values =>
    {
        console.log('Form Data',values)
    }
    return (

        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
            {
                (formik)=>
                {
                    return(
                        <Form>
                            <FormikControl
                            control='chakraInput'
                            type='email'
                            label='Email'
                            name='email'/>
                            <FormikControl
                            control='chakraInput'
                            type='password'
                            label='Password'
                            name='password'
                            />
                            <button type='submit' disabled={!formik.isValid}>Submit</button>

                        </Form>
                    )
                   
                }
            }
            


        </Formik>
    )
}
