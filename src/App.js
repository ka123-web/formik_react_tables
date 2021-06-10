import './App.css';
import react, {useState,useEffect, useCallback} from 'react'
import Count from './count';
import {IconContext} from 'react-icons'
import {FaBluetooth, FaReact} from 'react-icons/fa';
import {MdAlarm} from 'react-icons/md'
import ToastifyComponent from './ToastifyComponent';
import ModalComponent from './ModalComponent';
import Modal from 'react-modal'
import TippyComponent from './TippyComponent';

import CountUp,{useCountUp} from 'react-countup'
import IdleTimerContainer from './Components/IdleTimerContainer';
import ColorPickerComponent from './ColorPickerComponent';
import CreditCardComponent from './CreditCardComponent';
import DatePickerComponent from './DatePickerComponent';
import YoutubeForm from './Formik/Components/YoutubeForm';
import FormikContainer from './Components/FormikContainer';
import LoginForm from './Components/LoginForm';
import Registration from './Components/Registration';
import EnrollmentForm from './Components/EnrollmentForm';
import {theme,ChakraProvider} from '@chakra-ui/react'
import BasicTable from './Components/BasicTable';
import SortingTable from './Components/SortingTable';
import FilteringTable from './Components/FilteringTable';
import PaginationTable from './Components/PaginationTable';
import { RowSelection } from './Components/RowSelection';

Modal.setAppElement('#root')
function App() {
  const [text, setText] = useState("");
  const [isModalopen, setisModalopen] = useState(false)
  const onOdd = useCallback(()=>setText(''),[setText])
  const data = {isEven:false}
  
  const {countUp,start,pauseResume,reset,update} = useCountUp({duration:5, end:10000})
  return (

    
    <>
    {/* <ChakraProvider>
        <LoginForm/>
    </ChakraProvider> */}
    <div>
      <RowSelection/>
      {/* <PaginationTable/> */}
      {/* <FilteringTable/> */}
      {/* <SortingTable/> */}
      {/* <BasicTable/> */}
    {/* <EnrollmentForm/> */}
      {/* <YoutubeForm/> */}
      
      {/* <DatePickerComponent/> */}
      {/* <CreditCardComponent/> */}
      {/* <ColorPickerComponent/> */}
      {/* <IdleTimerContainer></IdleTimerContainer> */}
      {/* <h1>{countUp}</h1>
      <button onClick={start}>start</button>
      <button onClick={pauseResume}>pauseResume</button>
      <button onClick={reset}>reset</button>
      <button onClick={()=>update(2000)}>update</button>

      <h1><CountUp end={200}></CountUp></h1>
      <br/>
      <h1><CountUp  start ={300} end={1000}></CountUp></h1>
      <br/>
      <h1><CountUp end={200} duration={5}></CountUp></h1>
      <br/>
      <h1><CountUp end={200} duration={5} prefix='$' decimals={2} suffix='USD'></CountUp></h1>
      <br/> */}
    
      {/* <TippyComponent/>
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
            </Modal> */}
        </div>
    {/* <IconContext.Provider value={{color:'blue' , size:'5rem'}}>
      <div>
        <FaReact ></FaReact>
        <MdAlarm ></MdAlarm>
        <ToastifyComponent/>
        <input type="text" value={text} onChange={e=>setText(e.target.value)}/>
        <Count onOdd = {onOdd} data={data}/>
      </div>
   </IconContext.Provider> */}
   </>
  );
}

export default App;
