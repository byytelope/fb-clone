import { InputHTMLAttributes, useState } from "react";

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  label?: string;
  errorText?: string;
  options: {
    name: string;
    value: string;
  }[];
}

export default function Select({
  label,
  options,
  errorText,
  ...props
}: SelectProps) {
  const showError = errorText != null && errorText !== "";
  const showLabel = label != null && label !== "";

  return (
    <div>
      {showLabel ? (
        <label htmlFor={props.id} className="text-textSecondary text-sm mx-4">
          {label}
        </label>
      ) : (
        <></>
      )}
      <div
        className={`flex justify-between items-center h-12 w-full rounded-md border bg-white focus-within:ring-2 focus-within:ring-opacity-10 transition-colors duration-200 ${
          showError
            ? "border-red focus-within:border-red focus-within:ring-red caret-red border-opacity-50"
            : "border-black focus-within:border-bluePrimary focus-within:ring-bluePrimary border-opacity-10"
        }`}
      >
        <select
          {...props}
          className="border-none focus:ring-0 w-full mx-1 rounded"
        >
          {options.map((optionObj, i) => (
            <option value={optionObj.value} key={optionObj.name + i.toString()}>
              {optionObj.name}
            </option>
          ))}
        </select>
      </div>
      {showError ? (
        <p className="text-red text-xs py-1 px-4">{errorText}</p>
      ) : (
        <> </>
      )}
    </div>
  );
}
