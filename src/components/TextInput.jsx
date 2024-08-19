import React from "react";

export default function TextInput({ fieldName, onChange, type, placeholder }) {
  if (type === "textarea") {
    return (
      <textarea
        className="textarea textarea-bordered h-32 col-span-3 focus:outline-none"
        placeholder={placeholder}
      ></textarea>
    );
  }
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={(e) => onChange(fieldName, e.target.value)}
      className="input input-bordered w-full focus:outline-none"
    />
  );
}
