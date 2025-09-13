import React, {useState} from 'react';
import "./App.css";
import AssignmentForm from './Form.tsx';
import Assignment from './Assignment.tsx';


const App = () => {

  //Determines whether the form is open or closed
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [assignmentName, setAssignmentName] = useState<string>("");
  const [courseName, setCourseName] = useState<string>("");
  const [weight, setWeight] = useState<string>("0");
  const [priority, setPriority] = useState<string>("High");
  const [date, setDate] = useState<any>("");
  const [time, setTime] = useState<any>("");
  const [status, setStatus] = useState<string>("Not Started");
  const [assignmentList, setAssignmentList] = useState<Array<any>>([{
    id: "A1-CS145",
    name: "A1",
    coursename: "CS145",
    weight: 10,
    priority: "High",
    date: "2022-09-07",
    time: "11:59",
    status: "Not Started"
  }, {
    id: "A2-CS145",
    name: "A2",
    coursename: "CS145",
    weight: 10,
    priority: "High",
    date: "2025-09-25",
    time: "11:59",
    status: "Not Started"
  }]);

  const openForm = () => {
    setIsOpen(true);
    setAssignmentName("");
    setCourseName("");
    setWeight("0");
    setPriority("High");
    setDate("");
    setTime("");
    setStatus("Not Started");
  }

  return (
    <div id="container">
      <h1 className="text-3xl text-white text-shadow-black text-shadow-md text-center p-2">Assignment Tracker</h1>
      <p className="text-white text-xl text-shadow-black text-shadow-md text-center mr-2">Welcome to this assignment tracker! Click on the button to add an assignment and get started. To delete an assignment, press the red X button at the start.</p>

      <div id="assignment-header" className="border-2 border-gray-500 px-10 mx-2 mt-5 relative h-10">
        <p className="text-white absolute top-1.5 left-[2%]">Delete?</p>
        <p className="text-white absolute top-1.5 left-[10%]">Assignment</p>
        <p className="text-white absolute top-1.5 left-[22%]">Course</p>
        <p className="text-white absolute top-1.5 left-[33%]">Weight</p>
        <p className="text-white absolute top-1.5 left-[43%]">Priority</p>
        <p className="text-white absolute top-1.5 left-[56%]">Date</p>
        <p className="text-white absolute top-1.5 left-[69%]">Time</p>
        <p className="text-white absolute top-1.5 left-4/5">Status</p>
        <p className="text-white absolute top-1.5 right-1/50">Days left</p>
      </div>

      <div id="assignments-container" className="pt-2">
        {assignmentList.map((assignment) => <Assignment name={assignment.name} courseName={assignment.coursename} weight={assignment.weight} priority={assignment.priority} date={assignment.date} time={assignment.time} status={assignment.status} assignmentList={assignmentList} setAssignmentList={setAssignmentList}/>)}
      </div>

      <button type="button" className="rounded-full w-20 h-20 bg-white fixed bottom-3 right-3 font-semibold flex justify-center items-center" onClick={() => {openForm()}}><p className="text-4xl">+</p></button>
      {<AssignmentForm isOpen={isOpen} setIsOpen={setIsOpen} assignmentName={assignmentName} setAssignmentName={setAssignmentName} courseName={courseName} setCourseName={setCourseName} weight={weight} setWeight={setWeight} priority={priority} setPriority={setPriority} date={date} setDate={setDate} time={time} setTime={setTime} status={status} setStatus={setStatus} assignmentList={assignmentList} setAssignmentList={setAssignmentList}/>}
    </div>
  )
}

export default App
