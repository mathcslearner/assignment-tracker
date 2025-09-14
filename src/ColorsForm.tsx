import React, {useEffect} from 'react';

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

type ColorsFormProps = {
    isColorsFormOpen: boolean;
    setIsColorsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
    assignmentList: AssignmentType[];
    setAssignmentList: React.Dispatch<React.SetStateAction<AssignmentType[]>>;
    courseColors: {[courseName: string] :string};
    setCourseColors: React.Dispatch<React.SetStateAction<{[courseName: string] :string}>>;
}

const ColorsForm = ({isColorsFormOpen, setIsColorsFormOpen, assignmentList, setAssignmentList, courseColors, setCourseColors}:ColorsFormProps) => {

    if (!isColorsFormOpen) {
        return null;
    }

    const Submit = () => {
        setIsColorsFormOpen(false);
    }

    const coursenames = assignmentList.map((assignment) => assignment.coursename)
    const uniquecoursenames = new Set(coursenames);

    useEffect(() => {
        const root = document.documentElement;
        Object.entries(courseColors).forEach(([course, color]) => {
            root.style.setProperty(`--course-${course}`, color);
        });
    }, [courseColors])

    return(
        <div id="modal-container" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div id="form-container" className="bg-white w-1/2 h-1/2 m-auto flex flex-col">
            <button id="close-btn" type="button" className="fixed top-45 right-82 bg-white text-black text-2xl rounded-full w-10 h-10 flex justify-center items-center font-semibold border-2 border-black" onClick={() => setIsColorsFormOpen(false)}>x</button>
            <h1 className="text-2xl text-center pt-2">Choose colors for each of your courses:</h1>
            <div id="color-choice-container" className="flex flex-column gap-3 mt-2">
                {[...uniquecoursenames].map((coursename) => {
                return (
                <div className="ml-2 flex flex-row gap-2">{coursename}: 
                    <input type="color" value={courseColors[coursename] || "#ffffff"} className="border-2 border-gray-300 hover:border-black" onChange={(e)=>setCourseColors({...courseColors, [coursename]: e.target.value})}></input>
                </div>
                )
                })}
            </div>
            <button type="submit" className="border-[1.5px] border-gray m-auto p-2" onClick={Submit}>Submit</button>
        </div>
    </div>
    )
}

export default ColorsForm