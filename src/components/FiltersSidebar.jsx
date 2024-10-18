"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const FiltersSidebar = () => {
  const [filters, setFilters] = useState({
    jobType: {
      all: true,
      fullTime: false,
      partTime: false,
      remote: false,
      internship: false,
      contract: false,
    },
    workType: {
      onSite: false,
      remote: false,
      hybrid: false,
    },
  });

  const handleCheckboxChange = (category, option) => {
    // Update only the option that's being toggled in the specific category
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: {
        ...prevFilters[category],
        [option]: !prevFilters[category][option], // Toggle the current option
      },
    }));
  };

  return (
    <aside className="bg-white p-10 scroll-pt-10 shadow-md mt-20">
      <h3 className="font-bold text-xl mb-4">Filters</h3>
      <button
        className="text-sm text-gray-500 mb-6"
        onClick={() => setFilters({})}  // Optional: Reset filters if needed
      >
        Clear All
      </button>

      <div>
        <h4 className="font-semibold mb-2">Job Type</h4>
        {Object.entries(filters.jobType).map(([key, value]) => (
          <div key={key} className="flex items-center space-x-2 space-y-2">
            <Checkbox
              id={key}
              checked={value}
              onCheckedChange={() => handleCheckboxChange("jobType", key)}
            />
            <label htmlFor={key} className="text-sm font-medium leading-none">
              {key.charAt(0).toUpperCase() + key.slice(1)} (count)
            </label>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <h4 className="font-semibold mb-2">Work Type</h4>
        {Object.entries(filters.workType).map(([key, value]) => (
          <div key={key} className="flex items-center space-x-2 space-y-2">
            <Checkbox
              id={key}
              checked={value}
              onCheckedChange={() => handleCheckboxChange("workType", key)}
            />
            <label htmlFor={key} className="text-sm font-medium leading-none">
              {key.charAt(0).toUpperCase() + key.slice(1)} (count)
            </label>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default FiltersSidebar;
