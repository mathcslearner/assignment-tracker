import React, { useState, useEffect } from "react";
import "./App.css";
import AssignmentForm from "./Form.tsx";
import Assignment from "./Assignment.tsx";
import FilterForm from "./FilterForm.tsx";

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

const App = () => {
  const [isFilterFormOpen, setIsFilterFormOpen] = useState<boolean>(false);
  const [isAssignmentFormOpen, setIsAssignmentFormOpen] = useState<boolean>(false);
  const [filtersActive, setFiltersActive] = useState<boolean>(false);

  // Assignment fields
  const [assignmentName, setAssignmentName] = useState<string>("");
  const [courseName, setCourseName] = useState<string>("");
  const [weight, setWeight] = useState<string>("0");
  const [priority, setPriority] = useState<string>("High");
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [status, setStatus] = useState<string>("Not Started");

  // Main assignment list 
  const [assignmentList, setAssignmentList] = useState<AssignmentType[]>(() => {
    try {
      const saved = localStorage.getItem("assignments");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Failed to parse localStorage", e);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("assignments", JSON.stringify(assignmentList));
  }, [assignmentList]);

  // Filter state
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [selectedPriorities, setSelectedPriorities] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [daysFilter, setDaysFilter] = useState<number | "">("");

  // Derived filtered list
  const filteredAssignmentList = assignmentList.filter((a) => {
    const matchesCourse =
      selectedCourses.length === 0 || selectedCourses.includes(a.coursename);
    const matchesPriority =
      selectedPriorities.length === 0 || selectedPriorities.includes(a.priority);
    const matchesStatus =
      selectedStatuses.length === 0 || selectedStatuses.includes(a.status);

    const withinDays =
      !daysFilter ||
      new Date(a.date) <=
        new Date(Date.now() + (daysFilter as number) * 24 * 60 * 60 * 1000);

    return matchesCourse && matchesPriority && matchesStatus && withinDays;
  });

  const openForm = () => {
    setIsAssignmentFormOpen(true);
    setAssignmentName("");
    setCourseName("");
    setWeight("0");
    setPriority("High");
    setDate("");
    setTime("");
    setStatus("Not Started");
  };

  return (
    <div id="container">
      <h1 className="text-3xl text-white text-shadow-black text-shadow-md text-center p-2">
        Assignment Tracker
      </h1>
      <p className="text-white text-xl text-shadow-black text-shadow-md text-center mx-2">
        Welcome to this assignment tracker! Click on the button to add an
        assignment and get started. To delete an assignment, press the red X
        button at the start. It is possible to filter assignments based on
        course name, weight, priority, status and days left.
      </p>

      {/* Filter button */}
      <div id="filter" className="justify-center mt-2 flex flex-row gap-2">
        <p className="text-white text-xl text-shadow-black text-shadow-md">
          Filter:
        </p>
        <div
          className="border-2 border-gray-500 bg-white py-1 px-2 hover:bg-gray-300 cursor-pointer"
          onClick={() => setIsFilterFormOpen(true)}
        >
          {filtersActive? "Filtered" : "Click to filter"}
        </div>
      </div>

      {/* Header row */}
      <div
        id="assignment-header"
        className="border-2 border-gray-500 px-10 mx-2 mt-5 relative h-10"
      >
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

      {/* Assignments */}
      <div id="assignments-container" className="pt-2">
        {filteredAssignmentList.map((assignment) => (
          <Assignment
            key={assignment.id}
            name={assignment.name}
            courseName={assignment.coursename}
            weight={assignment.weight}
            priority={assignment.priority}
            date={assignment.date}
            time={assignment.time}
            status={assignment.status}
            assignmentList={assignmentList}
            setAssignmentList={setAssignmentList}
          />
        ))}
      </div>

      {/* Add button */}
      <button
        type="button"
        className="rounded-full w-20 h-20 bg-white fixed bottom-3 right-3 font-semibold flex justify-center items-center"
        onClick={openForm}
      >
        <p className="text-4xl">+</p>
      </button>

      {/* Forms */}
      <AssignmentForm
        isAssignmentFormOpen={isAssignmentFormOpen}
        setIsAssignmentFormOpen={setIsAssignmentFormOpen}
        assignmentName={assignmentName}
        setAssignmentName={setAssignmentName}
        courseName={courseName}
        setCourseName={setCourseName}
        weight={weight}
        setWeight={setWeight}
        priority={priority}
        setPriority={setPriority}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        status={status}
        setStatus={setStatus}
        assignmentList={assignmentList}
        setAssignmentList={setAssignmentList}
      />

      <FilterForm
        isFilterFormOpen={isFilterFormOpen}
        setIsFilterFormOpen={setIsFilterFormOpen}
        selectedCourses={selectedCourses}
        setSelectedCourses={setSelectedCourses}
        selectedPriorities={selectedPriorities}
        setSelectedPriorities={setSelectedPriorities}
        selectedStatuses={selectedStatuses}
        setSelectedStatuses={setSelectedStatuses}
        daysFilter={daysFilter}
        setDaysFilter={setDaysFilter}
        assignmentList={assignmentList}
        setFiltersActive={setFiltersActive}
      />
    </div>
  );
};

export default App;


