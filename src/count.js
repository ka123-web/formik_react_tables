import { render } from '@testing-library/react';
import React,{useState,useRef} from 'react'

const Count =React.memo(({onOdd},data)=> {
    const [count, setCount] = useState(0);
    const renderref = useRef(0)
    return (
        <div>
            <div>
                Count: {count}
            </div>
            <div>
                renders:{renderref.current++}
            </div>
            <button onClick={()=>{
                if(count % 2 == 0)
                {
                    onOdd();
                }
                setCount(c=>c+1)
                }}>
            Increment</button>
            
        </div>
    )
},(prevProps,nextProps)=>
{
    if(prevProps.data.isEven !== nextProps.data.isEven){
    return false;
    }
    return true
})

export default Count;