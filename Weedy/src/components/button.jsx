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
 * }}
 */

function Button({ type, id, label, ariaLabel, className }) {
  return (
    <div className="mt-5">
      <button
        className={`${className} border px-10 py-1 rounded-full mt-5 text-[#F8F0E5] hover:ring-2 hover:bg-[#472A08] hover:border-[#472A08] hover:ring-[#351F08]`}
        type={type}
        id={id}
        aria-label={ariaLabel}
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
