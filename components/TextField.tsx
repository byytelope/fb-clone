import { forwardRef, InputHTMLAttributes, LegacyRef, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import IconButton from "./IconButton";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  togglePassword?: string;
  label?: string;
  errorText?: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ errorText, togglePassword, label, ...props }, ref) => {
    const [inputType, setInputType] = useState(props.type ?? "text");
    const showPassword = togglePassword === "true" ? true : false;
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
            <> </>
          )}
        </div>
        {showError ? (
          <p className="text-red text-xs py-1 px-4">{errorText}</p>
        ) : (
          <> </>
        )}
      </div>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;
