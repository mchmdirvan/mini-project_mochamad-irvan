/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

/**
 * Button
 * @param {{
 * type : string
 * id : string
 * label : string
 * ariaLabel: string
 * onClick: function
 * className : string
 * disabled : {}
 * }}
 */

function Button({ type, id, label, ariaLabel, className, onClick,disabled }) {
  return (
    <div>
      <button
        className={`${className} border px-10 py-1 rounded-full mt-5 hover:ring-2 hover:bg-[#472A08] hover:border-[#472A08] hover:ring-white`}
        type={type}
        id={id}
        aria-label={ariaLabel}
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
