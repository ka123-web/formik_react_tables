import React,{useState} from 'react'
import Modal from 'react-modal'

export default function ModalComponent() {
    const [isModalopen, setisModalopen] = useState(false)
    return (
        <div>
           <button onClick={()=>setisModalopen(true)}>Open Modal</button>
            <Modal 
                isOpen={isModalopen} 
                shouldCloseOnOverlayClick={true} 
                onRequestClose={()=>setisModalopen(false)}
                  style = {{
                    overlay:{ backgroundColor:'grey'},
                    content:{color:'orange'},
                  
                }}>
                <title >Modal Title</title>
                <p>Modal body</p>
                <button onClick={()=>setisModalopen(false)}>close Modal</button>
            </Modal>
        </div>
    )
}
