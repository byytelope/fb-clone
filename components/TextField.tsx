import { InputHTMLAttributes } from "react";

export default function TextField({
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      type={props.type ?? "text"}
      className="h-12 w-full rounded-lg border-1 border-black border-opacity-10 focus:border-bluePrimary focus:ring-2 focus:ring-bluePrimary focus:ring-opacity-20"
    />
  );
}
