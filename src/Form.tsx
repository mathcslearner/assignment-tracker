import React, {useState} from 'react';
import Priority from './priority.tsx';
import Status from './status.tsx';


//Pass the isOpen state from the main app component to the assignment form component using props

type AssignmentFormProps = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AssignmentForm = ({isOpen, setIsOpen}: AssignmentFormProps) => {

    if (!isOpen){
        return null;
    }
    
    return(
        <div id="modal-container" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div id="form-container" className="bg-white w-1/2 h-1/2 m-auto">
                <button id="close-btn" type="button" className="fixed top-45 right-82 bg-white text-black text-2xl rounded-full w-10 h-10 flex justify-center items-center font-semibold border-2 border-black" onClick={()=>setIsOpen(!isOpen)}>x</button>
                <h1 className="text-2xl text-center pt-2">Add a new assignment</h1>
                <h2 className="text-xl text-center pt-2">All fields are required.</h2>
                <form className="flex mt-2 flex-col gap-2">
                    <label className="pl-2">Assignment Name 
                        <input type="text" className="ml-5 border-[1.5px] border-gray shadow-sm px-2" required placeholder="Ex: Assignment 1"></input>
                    </label>
                    <label className="pl-2">Course Name
                        <input type="text" className = "ml-5 border-[1.5px] border-gray shadow-sm px-2" required placeholder="Ex: CS145"></input>
                    </label>
                    <label className="pl-2">Weight
                        <input type="number" className = "ml-5 border-[1.5px] border-gray shadow-sm px-2" required></input>
                    </label >
                    <label className="pl-2">Priority
                        <Priority />
                    </label>
                    <label className="pl-2">Date
                        <input type="date" className = "ml-5 border-[1.5px] border-gray shadow-sm px-2"></input>
                    </label>
                    <label className="pl-2">Time 
                        <input type="time" className = "ml-5 border-[1.5px] border-gray shadow-sm px-2"></input>
                    </label>
                    <label className="pl-2">Status 
                        <Status />
                    </label>
                </form>
            </div>
        </div>
    )
}

export default AssignmentForm