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
    </>
  );
}

/**
 * TextArea component for forms
 *
 * @param {{
 * label : string
 * className : string
 * name : string
 * id : string
 * cols : number
 * rows : number
 * error : string
 * placeholder : string
 * register: function
 * }}  props
 */

function TextArea({
  label,
  className,
  name,
  id,
  error,
  placeholder,
  register,
  ariaLabel,
  onChange,
  cols,
  rows,
}) {
  return (
    <>
      <div>
        <label className="mt-5">{label}</label>
        <textarea
          className={`${className} ${
            error
              ? "border border-[#C70039] text-[#C70039] placeholder:text-[#C70039]"
              : "border border-[#472A08] text-[#472A08] placeholder:text-[#472A08]"
          } mt-2 py-2 pl-2 text-[#472A08] transition duration-300 ease-in-out"`}
          name={name}
          id={id}
          placeholder={placeholder}
          {...(register ? register(name) : {})}
          aria-label={ariaLabel}
          onChange={onChange}
          cols={cols}
          rows={rows}
        ></textarea>
        {error && <div className=" text-red-500">{error}</div>}
      </div>
    </>
  );
}

/**
 * Select component for forms
 *
 * @param {{
 * label : string
 * className : string
 * name : string
 * id : string
 * error : string
 * placeholder : string
 * register: function
 * option: map
 * }}  props
 */

function Select({ label, placeholder, id, error, options, register, name }) {
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-3" htmlFor={id}>
        {label}
      </label>
      <select
        className={` ${
          error
            ? "border border-[#C70039] text-[#C70039] placeholder:text-[#C70039]"
            : "border border-[#472A08] text-[#472A08] placeholder:text-[#472A08]"
        } border rounded-xl px-10 text-md transition duration-300 ease-in-out bg-white`}
        defaultValue=""
        {...(register ? register(name) : {})}
      >
        <option hidden value="">
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <div className=" text-red-500">{error}</div>}
    </div>
  );
}

/**
 * Radio component for forms
 *
 * @param {{
 * label : string
 * className : string
 * name : string
 * id : string
 * error : string
 * register: function
 * option: map
 * }}  props
 */
function RadioGroup(props) {
  const { label, error, options, register, name } = props;

  return (
    <div className="flex flex-col my-6" aria-label={props["aria-label"]}>
      <label className="">{label}</label>
      {options.map((option) => (
        <label
          className={` ${
            error ? " text-[#C70039]  " : " text-[#472A08]  "
          } flex gap-2 mt-2 transition duration-300 ease-in-out"`}
          htmlFor={option}
          key={option}
        >
          <input
            className={` ${
              error
                ? "border border-[#C70039] text-[#C70039] placeholder:text-[#C70039] radio radio-error"
                : "border border-[#472A08] text-[#472A08] placeholder:text-[#472A08] radio"
            } transition duration-300 ease-in-out "`}
            type="radio"
            value={option}
            id={option}
            {...(register ? register(name) : {})}
          />
          {option}
        </label>
      ))}
      {error && <div className=" text-red-500">{error}</div>}
    </div>
  );
}

export { Input, TextArea, Select, RadioGroup };
