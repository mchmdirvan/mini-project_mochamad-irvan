/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function Table({ formValues=[] }) {
  const reviewData = [
    { label: "Bride's First Name", value: formValues.brideFirstName },
    { label: "Groom's First Name", value: formValues.groomFirstName },
    { label: "Bride's Full Name", value: formValues.brideFullName },
    { label: "Groom's Full Name", value: formValues.groomFullName },
    { label: "Bride's Bio", value: formValues.brideBio },
    { label: "Groom's Bio", value: formValues.groomBio },
    { label: "Bride's Contact", value: formValues.brideContact },
    { label: "Groom's Contact", value: formValues.groomContact },
    { label: "Agreement Date", value: formValues.agreementDate },
    { label: "Reception Date", value: formValues.receptionDate },
    { label: "Agreement Place", value: formValues.agreementAddress },
    { label: "Agreement Hall", value: formValues.agreementHall },
    { label: "Agreement City", value: formValues.agreementCity },
    { label: "Reception Place", value: formValues.receptionAddress },
    { label: "Reception Hall", value: formValues.receptionHall },
    { label: "Reception City", value: formValues.receptionCity },
    { label: "First Meet Stories", value: formValues.firstMeetStory },
    { label: "Love Stories", value: formValues.loveStory },
    { label: "Decide to Marry Stories", value: formValues.decideToMarryStory },
    { label: "Selected Theme", value: formValues.selectedTheme },
    { label: "Scripture Quotes", value: formValues.scriptureQuotes },
  ];

  return (
    <table className="table table-zebra">
      <tbody>
        {reviewData.map((item) => (
          <tr key={item.label}>
            <td className="bg-white">{item.label}</td>
            <td className="bg-white">{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
