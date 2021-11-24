import { forwardRef, InputHTMLAttributes, LegacyRef, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import IconButton from "./IconButton";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  togglepassword?: string;
  label?: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ ...props }, ref) => {
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
            ref={ref}
            type={inputType}
            className="border-none focus:ring-0 w-full rounded m-1"
          />
          {showPassword ? (
            <div className="mr-2">
              <IconButton
                onClick={(e) => {
                  e.preventDefault();
                  inputType === "password"
                    ? setInputType("text")
                    : setInputType("password");
                }}
                variant="secondary"
              >
                {inputType === "text" ? <BsEye /> : <BsEyeSlash />}
              </IconButton>
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;
