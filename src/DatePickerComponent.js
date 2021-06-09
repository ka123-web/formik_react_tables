import React,{useState} from 'react'
import DatePicker from 'react-datepicker'
import './App.css'
import 'react-datepicker/dist/react-datepicker.css'
function DatePickerComponent() {
    const [selectedDate, setSelectedDate] = useState(null)
    return (
        <div>
            <DatePicker 
                selected={selectedDate} 
                onChange={date=>setSelectedDate(date)}
                dateFormat='MM/dd/yyyy'
                
                filterDate={date => date.getDay() !== 6 && date.getDay() !==0}
                isClearable
                showYearDropdown
                scrollableMonthYearDropdown

                />
            
        </div>
    )
}

export default DatePickerComponent
