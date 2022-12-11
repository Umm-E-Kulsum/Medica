import React from "react";

import { Slider } from "./Slider/Slider";
import "./index.css";
import { Appointmentfeatures } from "./Content/Appointmentfeatures";

export default (props) => {
  return (
    <div className="Appointment__parent">
      <Slider/>
      <Appointmentfeatures />
    </div>
  );
};
