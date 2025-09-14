import React, {useEffect} from "react";

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

interface FilterFormProps {
  isFilterFormOpen: boolean;
  setIsFilterFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCourses: string[];
  setSelectedCourses: React.Dispatch<React.SetStateAction<string[]>>;
  selectedPriorities: string[];
  setSelectedPriorities: React.Dispatch<React.SetStateAction<string[]>>;
  selectedStatuses: string[];
  setSelectedStatuses: React.Dispatch<React.SetStateAction<string[]>>;
  daysFilter: number | "";
  setDaysFilter: React.Dispatch<React.SetStateAction<number | "">>;
  assignmentList: AssignmentType[];
  setFiltersActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterForm = ({
  isFilterFormOpen,
  setIsFilterFormOpen,
  selectedCourses,
  setSelectedCourses,
  selectedPriorities,
  setSelectedPriorities,
  selectedStatuses,
  setSelectedStatuses,
  daysFilter,
  setDaysFilter,
  assignmentList,
  setFiltersActive
}: FilterFormProps) => {
  if (!isFilterFormOpen) {
    return null;
  }

  const coursenames = Array.from(new Set(assignmentList.map((a) => a.coursename)));

  useEffect(() => {
    const filtersActive =
    selectedCourses.length > 0 ||
    selectedPriorities.length > 0 ||
    selectedStatuses.length > 0 ||
    daysFilter !== "";

    setFiltersActive(filtersActive);
  }, [selectedCourses, selectedPriorities, selectedStatuses, daysFilter, setFiltersActive]);

  const toggleSelection = (
    value: string,
    currentArray: string[],
    setter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (currentArray.includes(value)) {
      setter(currentArray.filter((element) => element !== value));
    } else {
      setter([...currentArray, value]);
    }
  };

  return (
    <div
      id="modal-container"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div
        id="form-container"
        className="bg-white w-1/2 h-1/2 m-auto flex flex-col gap-3 p-4 relative"
      >
        <button
          id="close-btn"
          type="button"
          className="absolute top-2 right-2 bg-white text-black text-2xl rounded-full w-10 h-10 flex justify-center items-center font-semibold border-2 border-black"
          onClick={() => setIsFilterFormOpen(false)}
        >
          x
        </button>
        <h1 className="text-2xl text-center mt-1">
          Filter your assignments based on:
        </h1>

        {/* Course filter */}
        <div id="coursefilter" className="ml-2 flex flex-row gap-2 flex-wrap">
          Courses:
          {coursenames.map((coursename) => (
            <button
              key={coursename}
              type="button"
              className={`hover:bg-gray-300 border-2 border-gray-300 p-1 ${
                selectedCourses.includes(coursename) ? "bg-gray-300" : ""
              }`}
              onClick={() =>
                {toggleSelection(coursename, selectedCourses, setSelectedCourses);
                }
              }
            >
              {coursename}
            </button>
          ))}
        </div>

        {/* Priority filter */}
        <div id="priorityfilter" className="ml-2 flex flex-row gap-2">
          Priority:
          {["High", "Medium", "Low"].map((priority) => (
            <button
              key={priority}
              type="button"
              className={`hover:bg-gray-300 border-2 border-gray-300 p-1 ${
                selectedPriorities.includes(priority) ? "bg-gray-300" : ""
              }`}
              onClick={() =>
                {toggleSelection(priority, selectedPriorities, setSelectedPriorities); }
              }
            >
              {priority}
            </button>
          ))}
        </div>

        {/* Status filter */}
        <div id="statusfilter" className="ml-2 flex flex-row gap-2">
          Status:
          {["Not Started", "In Progress"].map((status) => (
            <button
              key={status}
              type="button"
              className={`hover:bg-gray-300 border-2 border-gray-300 p-1 ${
                selectedStatuses.includes(status) ? "bg-gray-300" : ""
              }`}
              onClick={() =>
                {
                    toggleSelection(status, selectedStatuses, setSelectedStatuses);
                }
              }
            >
              {status}
            </button>
          ))}
        </div>

        {/* Days filter */}
        <div id="daysfilter" className="ml-2 flex flex-row gap-2">
          In the next [x] days:
          <input
            type="number"
            className="border-2 border-gray-300 p-1"
            value={daysFilter}
            onChange={(e) =>
              {setDaysFilter(e.target.value ? Number(e.target.value) : "");}
            }
          />
        </div>

        <button
          type="button"
          className="border-[1.5px] border-gray m-auto p-2"
          onClick={() => {
            setIsFilterFormOpen(false);
        }}
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterForm;

