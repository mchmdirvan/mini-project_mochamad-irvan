/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import React from "react";

import NotFound from "../notFound/NotFound";
import FloralTheme from "./FloralTheme";
import GreenTheme from "./GreenTheme";

export default function Index() {
  const { theme } = useParams();

  let selectedThemeComponent;

  switch (theme) {
    case "floral-theme":
      selectedThemeComponent = <FloralTheme />;
      break;
    case "green-theme":
      selectedThemeComponent = <GreenTheme />;
      break;
    default:
      selectedThemeComponent = <NotFound />;
      break;
  }
  return (
    <div>
      <div>{selectedThemeComponent}</div>
    </div>
  );
}
