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
      <div>
        <label className="mt-5">{label}</label>
        <input
          className={`${className} ${
            error
              ? "border-b border-[#C70039] text-[#C70039] placeholder:text-[#C70039]"
              : "border-b border-[#472A08] text-[#472A08] placeholder:text-[#472A08]"
          } mt-2 py-2 pl-2 text-[#472A08] transition duration-300 ease-in-out"`}
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
