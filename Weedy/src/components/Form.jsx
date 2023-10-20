/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

/**
 * Input component for forms
 *
 * @param {{
 * label : string
 * className : string
 * type : string
 * name : string
 * id : string
 * error : string
 * placeholder : string
 * register: function
 * }}  props
 */

function Input({
  label,
  className,
  type,
  name,
  id,
  error,
  placeholder,
  register,
  ariaLabel,
  onChange,
}) {
  return (
    <>
      <div className="mt-5">
        <label htmlFor="block">{label}</label>
        <input
          className={`${className} ${
            error
              ? "focus:ring-[0.3rem] focus:ring-offset-0 focus:ring-red-200 ring-red-500 "
              : "focus:ring-[0.3rem] focus:ring-offset-0 focus:ring-blue-200 ring-gray-300 "
          } mt-2 py-2 pl-2 text-gray-900 ring-1 transition duration-300 ease-in-out"`}
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          {...(register
            ? register(name, {
                valueAsNumber: type === "number" ? true : false,
              })
            : {})}
          aria-label={ariaLabel}
          onChange={onChange}
        />
        {error && <div className=" text-red-500">{error}</div>}
      </div>
    </>
  );
}

export { Input };
