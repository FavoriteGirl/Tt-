import React from "react";

export default function TextInput({ fieldName, onChange, type, placeholder }) {
  if (type === "textarea") {
    return (
      <textarea
        required
        className="textarea textarea-bordered h-32 col-span-3 focus:outline-none w-full"
        placeholder={placeholder}
        onChange={(e) => onChange(fieldName, e.target.value)}
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
