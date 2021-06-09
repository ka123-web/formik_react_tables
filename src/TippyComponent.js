import React,{forwardRef} from 'react'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'

const ColoredTooltip =() =>
{
    return <span style={{color:'yellow'}}>Colored Tooltip</span>
}

const CustomChild = forwardRef((props,ref) =>
{
    return(
    <div ref={ref}>
        <div>First line</div>
        <div>Second line</div>
    </div>)
})
function TippyComponent() {
    return (
        <>
        <div style={{padding:'20px'}}> 
            <Tippy placement={'left'} arrow={false} content="Basic Tooltip">
            <button>Hover</button>
            </Tippy>
        </div>

        <div style={{padding:'20px'}}>
            <Tippy delay={1000} content={<span style={{color:'orange'}}>colored</span>}>
            <button>Hover</button>
            </Tippy>
        </div>

        <div style={{padding:'20px'}}>
            <Tippy content={<ColoredTooltip></ColoredTooltip>}>
            <button>Hover</button>
            </Tippy>
        </div>

        <div style={{padding:'20px'}}>
            <Tippy content={<ColoredTooltip></ColoredTooltip>}>
            <CustomChild></CustomChild>
            </Tippy>
        </div>

        </>

        
    )
}

export default TippyComponent
