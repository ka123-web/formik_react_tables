import React,{useRef, useState} from 'react'
import IdleTimer from 'react-idle-timer'
import Modal from 'react-modal'

Modal.setAppElement('#root')

export default function IdleTimerContainer() {
   const idleTimerRef = useRef(null)
   const sessionTimeOutRef = useRef(null)
   const [isLoggedIn, setIsLoggedIn] = useState(true)
   const [ModalisOpen, setModalisOpen] = useState(false) 
   const userOnIdle =()=>
   {
       console.log('user is idle')
       setModalisOpen(true)
       sessionTimeOutRef.current = setTimeout(logout,5000)
   }
   const logout=()=>
   {
       setModalisOpen(false)
       setIsLoggedIn(false)
       clearTimeout(sessionTimeOutRef.current)
       console.log('User is Logged out!')
   }
   const StayActive=()=>
   {
        setModalisOpen(false)
        clearTimeout(sessionTimeOutRef.current)
        console.log('User is Active!')
   }
    return (
        <div>
            {isLoggedIn ? <h2>Hello Cloe</h2>: <h2>Hello Guest!</h2>}
            <IdleTimer ref={idleTimerRef} timeout={5*1000} onIdle={userOnIdle}></IdleTimer>

            <Modal isOpen={ModalisOpen}>
                <h2> You've been idle for a while!</h2>
                <p> You will be logged out soon</p>
                <button onClick={logout}>Log out</button>
                <button onClick={StayActive}>Keep me signedIn</button>
            </Modal>
            
        </div>
    )
}
