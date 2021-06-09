import React from 'react'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

toast.configure();

const notify =()=>
{
    toast('Basic notification',{position: toast.POSITION.TOP_LEFT})
    toast('Basic notification',{position: toast.POSITION.TOP_RIGHT})
    toast('Basic notification',{position: toast.POSITION.TOP_CENTER})
    toast('Basic notification',{position: toast.POSITION.BOTTOM_LEFT})
    toast('Basic notification',{position: toast.POSITION.BOTTOM_RIGHT, autoClose:false})
    toast('Basic notification',{position: toast.POSITION.BOTTOM_CENTER,autoClose:8000})
}
export default function ToastifyComponent() {
    return (
        <div>
            <button onClick={notify}>notify!</button>
        </div>
    )
}
