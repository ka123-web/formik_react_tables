import React from 'react'
import CountUp,{useCountUp} from 'react-countup'

function CountupComponent() {
    //const {} = useCountUp
    return (
        <div>
            <CountUp end={200}></CountUp>
            
        </div>
    )
}

export default CountupComponent
