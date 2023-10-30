/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import { getWeddings } from "../utils/apis/weddings/api";
import { useTitle } from "../utils/hooks/customHooks";
import Swal from "../utils/swal";

export default function ViewIntitation() {
  const [weddings, setWeddings] = useState(null);
  const title =
    weddings === null
      ? "The Wedding of"
      : `The Wedding of ${weddings[0].brideName} & ${weddings[0].groomName}`;
  useTitle(title);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getWeddings();
      setWeddings(result);
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Failed to fetch wedding data",
        showCancelButton: false,
      });
    }
  }

  return (
    <div>
      {weddings === null ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>Username: {weddings[0].username}</p>
        </div>
      )}
    </div>
  );
}
