/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function Table({ formValues=[] }) {
  const reviewData = [
    { label: "Bride's Name", value: formValues.brideName },
    { label: "Groom's Name", value: formValues.groomName },
    { label: "Bride's Bio", value: formValues.brideBio },
    { label: "Groom's Bio", value: formValues.groomBio },
    { label: "Agreement Date", value: formValues.agreementDate },
    { label: "Reception Date", value: formValues.receptionDate },
    { label: "Agreement Place", value: formValues.agreementAddress },
    { label: "Agreement Hall", value: formValues.agreementHall },
    { label: "Agreement City", value: formValues.agreementCity },
    { label: "Reception Place", value: formValues.receptionAddress },
    { label: "Reception Hall", value: formValues.receptionHall },
    { label: "Reception City", value: formValues.receptionCity },
    { label: "Scripture Quotes", value: formValues.scriptureQuotes },
  ];

  return (
    <table className="table table-zebra">
      <tbody>
        {reviewData.map((item) => (
          <tr key={item.label}>
            <td>{item.label}</td>
            <td>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
