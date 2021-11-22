import { InputHTMLAttributes, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: {
    name: string;
    value: string;
  }[];
}

export default function Select({ ...props }: SelectProps) {
  return (
    <div>
      <label htmlFor={props.id} className="text-textSecondary text-sm">
        {props.label}
      </label>
      <div className="flex justify-between items-center h-12 w-full rounded-md border bg-white border-black border-opacity-10 focus-within:border-bluePrimary focus-within:ring-2 focus-within:ring-bluePrimary focus-within:ring-opacity-10">
        <select
          {...props}
          className="border-none focus:ring-0 w-full mx-1 rounded"
        >
          {props.options.map((optionObj, i) => (
            <option value={optionObj.value} key={optionObj.name + i.toString()}>
              {optionObj.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
