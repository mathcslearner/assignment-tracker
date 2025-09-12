import React, {useState} from 'react';

type AssignmentProps = {
    name: string;
    courseName: string;
    weight: number;
    priority: string;
    date: any;
    time: any;
    status: string;
}

const Assignment = ({name, courseName, weight, priority, date, time, status}: AssignmentProps) => {
    

    return(
        <div id="assignment-row" className="border-2 border-gray-600 flex flex-row items-center justify-between px-10 bg-[#03DAC6] mx-2 h-10">
            <div>{name}</div>
            <div>{courseName}</div>
            <div>{weight}%</div>
            <div>{priority}</div>
            <div>{date}</div>
            <div>{time}</div>
            <div>{status}</div>
        </div>
    )
}

export default Assignment