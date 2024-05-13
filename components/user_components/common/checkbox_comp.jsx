"use client";

import { useState } from "react";

export default function CheckBoxComp({ val, setVal }) {

  const [isChecked, setIsChecked] = useState(val); // Initial state (optional)

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    setVal({ ...val, state: event.target.checked });
  };

  return (
    <div className="flex flex-row items-center w-full px-2 text-gray-500 space-y-4">
      <h2 className="max-w-sm uppercase md:w-3/12 px-2 mt-3">State</h2>

      <div className="relative inline-block w-10 mr-2 align-middle select-none">
        <input
          onChange={handleCheckboxChange}
          type="checkbox"
          checked={isChecked} // Set initial checked state (optional)
          name="toggle"
          className="checked:bg-green-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        />
        <label
          htmlFor="Blue"
          className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
        ></label>
      </div>
    </div>
  );
}
