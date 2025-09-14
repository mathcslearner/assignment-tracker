import React, {useState} from 'react';

type AssignmentFormProps = {
    isAssignmentFormOpen: boolean;
    setIsAssignmentFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
    assignmentName: string;
    setAssignmentName: React.Dispatch<React.SetStateAction<string>>;
    courseName: string;
    setCourseName: React.Dispatch<React.SetStateAction<string>>;
    weight: string;
    setWeight: React.Dispatch<React.SetStateAction<string>>;
    priority: string;
    setPriority: React.Dispatch<React.SetStateAction<string>>;
    date: string;
    setDate: React.Dispatch<React.SetStateAction<string>>;
    time: string;
    setTime: React.Dispatch<React.SetStateAction<string>>;
    status: string;
    setStatus: React.Dispatch<React.SetStateAction<string>>;
    assignmentList: Array<any>;
    setAssignmentList: React.Dispatch<React.SetStateAction<Array<any>>>;
}

const AssignmentForm = ({isAssignmentFormOpen, setIsAssignmentFormOpen, assignmentName, setAssignmentName, courseName, setCourseName, weight, setWeight, priority, setPriority, date, setDate, time, setTime, status, setStatus, assignmentList, setAssignmentList}: AssignmentFormProps) => {

    if (!isAssignmentFormOpen){
        return null;
    }

    const Submit = (e: React.FormEvent) => {
        e.preventDefault();

        setAssignmentList([...assignmentList, {
            id: assignmentName + "-" + courseName,
            name: assignmentName,
            coursename: courseName,
            weight: Number(weight),
            priority: priority,
            date: date,
            time: time,
            status: status
        }])

        setIsAssignmentFormOpen(false);
    }
    
    return(
        <div id="modal-container" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div id="form-container" className="bg-white w-1/2 h-1/2 m-auto flex flex-col">
                <button id="close-btn" type="button" className="fixed top-45 right-82 bg-white text-black text-2xl rounded-full w-10 h-10 flex justify-center items-center font-semibold border-2 border-black" onClick={()=>setIsAssignmentFormOpen(false)}>x</button>
                <h1 className="text-2xl text-center pt-2">Add a new assignment</h1>
                <h2 className="text-xl text-center pt-2">All fields are required.</h2>
                <form className="flex mt-2 flex-col gap-2 justify-center">
                    <label className="pl-2">Assignment Name 
                        <input value={assignmentName} onChange = {(e) => setAssignmentName(e.target.value)} type="text" className="ml-5 border-[1.5px] border-gray shadow-sm px-2" required placeholder="Ex: Assignment 1"></input>
                    </label>
                    <label className="pl-2">Course Name
                        <input value={courseName} onChange = {(e) => setCourseName(e.target.value.toUpperCase())} type="text" className = "ml-5 border-[1.5px] border-gray shadow-sm px-2" required placeholder="Ex: CS145"></input>
                    </label>
                    <label className="pl-2">Weight
                        <input value={weight} onChange={(e) => setWeight(e.target.value.replace(/^0+(?=\d)/, ''))} type="number" min={0} max={100} className = "ml-5 border-[1.5px] border-gray shadow-sm px-2" required></input>
                    </label >
                    <label className="pl-2">Priority
                        <select value={priority} onChange={(e) => setPriority(e.target.value)} className = "ml-5 border-[1.5px] border-gray shadow-sm px-2">
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </label>
                    <label className="pl-2">Date
                        <input value={date} onChange={(e) => setDate(e.target.value)} type="date" className = "ml-5 border-[1.5px] border-gray shadow-sm px-2" required></input>
                    </label>
                    <label className="pl-2">Time 
                        <input value={time} onChange={(e) => setTime(e.target.value)} type="time" className = "ml-5 border-[1.5px] border-gray shadow-sm px-2" required></input>
                    </label>
                    <label className="pl-2">Status 
                        <select value={status} onChange={(e) => setStatus(e.target.value)} className = "ml-5 border-[1.5px] border-gray shadow-sm px-2">
                            <option value="Not Started">Not Started</option>
                            <option value="In Progress">In Progress</option>
                        </select>
                    </label>
                </form>
                <button type="submit" className="border-[1.5px] border-gray m-auto p-2" onClick={Submit}>Submit</button>
            </div>
        </div>
    )
}

export default AssignmentForm