import React,{useState} from 'react'
import {Formik,Form,Field,ErrorMessage,FieldArray} from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'

export default function YoutubeForm() {

    const [formValue, setFormValue] = useState(null)
    //save data -mock data which will be received from API when form is saved partially
   const savedValues = {
        name:'cloe',
        email:'cloe@g.com',
        channel:'new channel',
        comments:'channel is good',
        address:'',
        social:{
            facebook:'',
            twitter:''
        },
        phoneNumbers:['',''],
        phNumbers:['']

    }

    //useFormik hook object requires Initial value, onsubmit, validate values
    const initialValues = {
        name:'Jack',
        email:'',
        channel:'',
        comments:'',
        address:'',
        social:{
            facebook:'',
            twitter:''
        },
        phoneNumbers:['',''],
        phNumbers:['']

    }
    const onSubmit = (values,onSubmitProps) =>
    {
        console.log('form data', values)
        console.log('submit props', onSubmitProps)
        onSubmitProps.setSubmitting(false)
        onSubmitProps.resetForm()
    }

    //validation schema using yup
    const validationSchema = Yup.object({
        name:Yup.string().required('Required'),
        email: Yup.string()
        .required('Required')
        .email('Invalid format'),
        channel: Yup.string().required('Required')
    })
   
    return (
        <Formik
            initialValues={formValue || initialValues}
            validationSchema ={validationSchema}
            onSubmit={onSubmit}
            //validateOnMount
            enableReinitialize
            >

        {
            (formik) =>
            {
                console.log('ddfdsfd');
                return(
                <Form >
                <div className='form-control'>
                <label htmlFor="name">Name</label>
                <Field 
                    type="text" 
                    id="name" 
                    name="name" 
                    />
                <ErrorMessage name='name' component={TextError}/>
                </div>

                <div className='form-control'>
                <label htmlFor="email">E-mail</label>
                <Field 
                    type="email" 
                    id="email" 
                    name="email" 
                    />
                   <ErrorMessage name='email'>
                       {errorMsg => <div className='error'>{errorMsg}</div>}
                    </ErrorMessage>
                </div>

                <div className='form-control'>
                <label htmlFor="channel">Channel</label>
                <Field 
                    type="text" 
                    id="channel" 
                    name="channel" 
                    />
                    <ErrorMessage name='channel'/>
                </div>
                <div className='form-control'>
                    <label htmlFor="comments">Comments</label>
                    <Field as ='textarea' 
                        type="text" 
                        id="comments" 
                        name="comments" 
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor="address">Address</label>
                    <Field name="address">
                        {
                            (props)=>
                            {
                                console.log(props)
                                const {field,form,meta} = props
                                return (
                                    <div>
                                         <input type='text' id='address' name="address" {...field}/>
                                         {meta.touched && meta.error ? <div>{meta.error}</div>:null}
                                    </div>
                               )
                            }
                        }
                    </Field>
                </div>
                <div className='form-control'>
                    <label htmlFor='facebook'>Facebook profile</label>
                    <Field type='text' id='facebook' name='social.facebook'/>
                </div>

                <div className='form-control'>
                    <label htmlFor='twitter'>Twitter profile</label>
                    <Field type='text' id='twitter' name='social.twitter'/>
                </div>

                
                <div className='form-control'>
                    <label htmlFor='primaryPhone'>Primary Phone </label>
                    <Field type='text' id='primaryPhone' name='phoneNumbers[0]'/>
                </div>
                <div className='form-control'>
                    <label htmlFor='secondayPhone'>Secondary Phone </label>
                    <Field type='text' id='secondayPhone' name='phoneNumbers[1]'/>
                </div>

                <div className='form-control'>
                    <label htmlFor='phnumbers'>List of Phone Numbers</label>
                    <FieldArray name='phNumbers'>
                        {
                            (fieldArrayProps)=>
                            {
                                console.log(fieldArrayProps);
                                const {push,remove,form} = fieldArrayProps;
                                const {values} = form
                                const {phNumbers} = values
                                return <div>
                                    {
                                        phNumbers.map((phnumber,index)=>
                                        {
                                            return <div key={index}>
                                            <Field name={`phNumbers[${index}]`}/>
                                            <button type='button' onClick={()=>push()}> + </button>
                                           {index >0 && <button type='button' onClick = {() =>remove(index)}> - </button>} 
                                            
                                            </div>
                                        })
                                    }
                                </div>
                            }
                        }

                    </FieldArray>
                </div>
                
                <button type='button' disabled={!(formik.dirty && formik.isValid)}>test for disable</button>       
                <button type='reset'>Reset</button>
                <button type='submit'>Submit</button>
                <button type='button' onClick={()=>setFormValue(savedValues)}>Load Saved Data</button>
            </Form>)
                        
                    }
                }
            
            
            
        </Formik>
    )
}
