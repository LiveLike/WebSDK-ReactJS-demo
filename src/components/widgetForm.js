import classes from "../pages/home.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function WidgetForm() {
  const chatInputRef = React.useRef();
  const selectRef = React.useRef();
  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();
    const enteredProgramId = chatInputRef.current.value;
    //console.log("vlaue of : " + enteredProgramId);
    const selectedMode = selectRef.current.value;
    //console.log("vlaue of : " + selectedMode);

    const WidgetFormData = {
      programId: enteredProgramId,
      mode: selectedMode,
    };
    //  console.log("vlaue of : " + env_value);
    navigate("/widget_only", { state: WidgetFormData });
  }
  return (
    <div>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="widget_mode">Select the mode for widget: </label>
          <select name="mod" required id="widget_mode" ref={selectRef}>
            <option value="pop-up">pop-up</option>
            <option value="interactive-timeline">Interactive-timeline</option>
            <option value="timeline">Timeline</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="program">Enter the program id: </label>
          <input type="text" required id="program" ref={chatInputRef}></input>
        </div>
        <div className={classes.actions}>
          <button>Submit!</button>
        </div>
      </form>
    </div>
  );
}

export default WidgetForm;
