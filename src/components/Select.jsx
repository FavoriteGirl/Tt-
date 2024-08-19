import React from "react";

export default function Select({ fieldName, ListOptions, onChange, children }) {
  return (
    <select
      className="select select-bordered focus:outline-none"
      defaultValue=""
      onChange={(e) => onChange(fieldName, e.target.value)}
    >
      <option value="" disabled>
        {children}
      </option>
      {ListOptions.map((option, index) => {
        return (
          <option key={index} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
}
