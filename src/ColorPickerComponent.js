import React,{useState} from 'react'
import {ChromePicker} from 'react-color'

function ColorPickerComponent() {
    const [color, setcolor] = useState('#fff')
    const [showColorPicker, setshowColorPicker] = useState(true)
    return (
        <div>
            <button onClick={()=>setshowColorPicker(showColorPicker=>!showColorPicker)}>
                {
                    showColorPicker?'Close color picker':'Pick a color'
                }

            </button>

            {showColorPicker && 
            (<ChromePicker color={color} onChange={(updatedColor)=>setcolor(updatedColor.hex)} />
            )}
            <h2> you Picked {color}</h2>
            
        </div>
    )
}

export default ColorPickerComponent
