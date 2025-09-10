import React, {useState} from 'react';
import "./App.css";
import AssignmentForm from './Form.tsx';


const App = () => {

  //Determines whether the form is open or closed
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [assignmentName, setAssignmentName] = useState<string>("");
  const [courseName, setCourseName] = useState<string>("");
  const [weight, setWeight] = useState<number>(0);
  const [priority, setPriority] = useState<string>("high");
  const [date, setDate] = useState<any>("");
  const [time, setTime] = useState<any>("");
  const [status, setStatus] = useState<string>("Not Started");

  return (
    <div id="container">
      <h1 className="text-3xl text-white text-shadow-black text-shadow-md text-center p-2">Assignment Tracker</h1>
      <p className="text-white text-xl text-shadow-black text-shadow-md text-center mr-2">Welcome to this assignment tracker! Click on the button to add an assignment and get started. Check out the Github repository for the project at the bottom of the website.</p>
      <button type="button" className="rounded-full w-20 h-20 bg-white fixed bottom-3 right-3 font-semibold flex justify-center items-center" onClick={() => {setIsOpen(!isOpen)}}><p className="text-4xl">+</p></button>
      {<AssignmentForm isOpen={isOpen} setIsOpen={setIsOpen} assignmentName={assignmentName} setAssignmentName={setAssignmentName} courseName={courseName} setCourseName={setCourseName} weight={weight} setWeight={setWeight} priority={priority} setPriority={setPriority} date={date} setDate={setDate} time={time} setTime={setTime} status={status} setStatus={setStatus}/>}
    </div>
  )
}

export default App
