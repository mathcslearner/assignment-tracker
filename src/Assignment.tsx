import React, {useState} from 'react';

interface AssignmentType {
    id: string;
    name: string;
    coursename: string;
    weight: number;
    priority: string;
    date: string;
    time: string;
    status: string;
  }

type AssignmentProps = {
    name: string;
    courseName: string;
    weight: number;
    priority: string;
    date: string;
    time: string;
    status: string;
    assignmentList: AssignmentType[];
    setAssignmentList: React.Dispatch<React.SetStateAction<AssignmentType[]>>;
}

const Assignment = ({name, courseName, weight, priority, date, time, status, assignmentList, setAssignmentList}: AssignmentProps) => {
    
    const changeStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === "Completed"){
            window.alert("Congratulations on finishing this assignment! It will now be removed from the tracker.");
            setAssignmentList(prev => prev.filter((assignment) => {return assignment.id !== name + "-" + courseName}));
        }

        else{
            setAssignmentList(prev => prev.map((assignment) => {    
               return assignment.id === name + "-" + courseName ? {...assignment, status: e.target.value} : assignment;
            }))
        }
    }

    const deleteAssignment = () => {
        const confirmedDeletion = window.confirm("Are you sure you want to delete this assignment?");
        if (confirmedDeletion){
            setAssignmentList(prev => prev.filter((assignment) => {return assignment.id !== name + "-" + courseName}));
        }
    }

    const daysLeft = (duedate: string): number => {
        const today = new Date();
        const due = new Date(duedate);
        const diff = due.getTime() - today.getTime();

        return Math.max(Math.ceil(diff/(1000*60*60*24)), 0);
    }

    return(
        <div id="assignment-row" className={`border-2 border-gray-600 flex flex-row items-center justify-between px-10 bg-[var(--course-${courseName})] mx-2 h-10`}>
            <button type="button" onClick={deleteAssignment}>&#10060;</button>
            <div>{name}</div>
            <div>{courseName}</div>
            <div>{weight}%</div>
            <div>{priority}</div>
            <div>{date}</div>
            <div>{time}</div>
            <select value={status} onChange={(e)=>{changeStatus(e)}}>
                <option value="Not Started">Not Started</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>
            <div>{daysLeft(date)}</div>
        </div>
    )
}

export default Assignment