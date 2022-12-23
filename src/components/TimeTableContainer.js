import React from  'react';
import TimeTable from './TimeTable';

const TimeTableContainer = (props) =>{

    console.log(props.data.data.year_1)

    return(
        <div className='w-full flex flex-col items-center'>
            <TimeTable data={props.data.data.year_1} />
            <TimeTable data={props.data.data.year_2} />
            <TimeTable data={props.data.data.year_3} />
            <TimeTable data={props.data.data.year_4} />
            <TimeTable data={props.data.data.year_5} />
        </div>
    )
}


export default TimeTableContainer;