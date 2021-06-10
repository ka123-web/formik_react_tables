import {format} from 'date-fns'
import ColumnFilter from './ColumnFilter'
export const COLUMNS = [
    {
        Header:'Id',
        Footer:'Id',
        accessor:'id',
        disableFilters:true
    },
    {
        Header:'First Name',
        Footer:'First Name',
        accessor:'first_name',
    },
    {
        Header:'Last Name',
        Footer:'Last Name',
        accessor:'last_name',
    },
    {
        Header:'Date of Birth',
        Footer:'Date of Birth',
        accessor:'date_of_birth',
        Cell: ({ value }) => {
            return format(new Date(value), 'MM/dd/yyyy')
          },
        //Cell:({value})=>{return(format(new Date(value)),'dd/MM/yyyy')}
    },
    {
        Header:'Country',
        Footer:'Country',
        accessor:'country',
    },
    {
        Header:'Phone',
        Footer:'Phone',
        accessor:'phone',
    }
]