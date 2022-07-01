import React from "react";
import { useLocation } from "react-router-dom";

function WidgetOnly() {
  let location = useLocation();
  console.log(
    "value of program and mode are: " + location.state.programId,
    location.state.mode
  );
  return (
    <div>
      <livelike-widgets
        programid={location.state.programId}
        mode={location.state.mode}
      ></livelike-widgets>
    </div>
  );
}

export default WidgetOnly;
