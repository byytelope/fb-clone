import { InputHTMLAttributes, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  togglepassword?: string;
  label?: string;
}

export default function TextField({ ...props }: TextFieldProps) {
  const [inputType, setInputType] = useState(props.type ?? "text");
  const showPassword = props.togglepassword === "true" ? true : false;

  return (
    <div>
      <label htmlFor={props.id} className="text-textSecondary text-sm">
        {props.label}
      </label>
      <div className="flex justify-between items-center h-12 w-full rounded-md border bg-white border-black border-opacity-10 focus-within:border-bluePrimary focus-within:ring-2 focus-within:ring-bluePrimary focus-within:ring-opacity-10">
        <input
          {...props}
          type={inputType}
          className="border-none focus:ring-0 w-full mx-1 rounded"
        />
        {showPassword ? (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              inputType === "password"
                ? setInputType("text")
                : setInputType("password");
            }}
            className="p-2 mr-1 rounded-full hover:bg-lightSecondary"
          >
            {inputType === "text" ? <BsEye /> : <BsEyeSlash />}
          </button>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
