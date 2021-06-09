import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'

export default function YoutubeForm() {

    //useFormik hook object requires Initial value, onsubmit, validate values
    const initialValues = {
        name:'',
        email:'',
        channel:''

    }
    const onSubmit = values =>
    {
        console.log('form data', values)
    }
   const validate = values =>
        {
            let errors ={}
            if(!values.name){
                errors.name = 'Name is Required'
            }
            if(!values.email){
                errors.email = 'Email is Required'
            }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
            {
                errors.email ='Invalid format'
            }
            if(!values.channel){
                errors.channel = 'Channel is Required'
            }
            return errors
        }

    //validation schema using yup
    const validationSchema = Yup.object({
        name:Yup.string().required('Required'),
        email: Yup.string()
        .required('Required')
        .email('Invalid format'),
        channel: Yup.string().required('Required')
    })
    //define useFormik hook
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
        //validate
       
        
    })
    console.log('formik.touched', formik.touched)

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-control'>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    text="name" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} 
                    value={formik.values.name}

                    />
                {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div>:null}
                </div>

                <div className='form-control'>
                <label htmlFor="email">E-mail</label>
                <input 
                    type="email" 
                    id="email" 
                    text="email" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}  
                    value={formik.values.email}/>
                    {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div>:null}
                </div>

                <div className='form-control'>
                <label htmlFor="channel">Channel</label>
                <input 
                    type="text" 
                    id="channel" 
                    text="channel" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}  
                    value={formik.values.channel}/>
                    {formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div>:null}
                </div>

                <button type='submit'>Submit</button>
            </form>
            
        </div>
    )
}
