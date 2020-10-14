import React from "react";

import * as classes from "./Switch.module.css";

const Switch = (props) => {
  return (
    <div className={props.class}>
      <input
        onChange={props.onChange}
        id="Toggle-on"
        className={`${classes.Toggle} ${classes.Toggleleft}`}
        name="toggle"
        value="false"
        type="radio"
        defaultChecked
      />
      <label htmlFor="Toggle-on" className={classes.Btn}>
        °C
      </label>
      <input
        onChange={props.onChange}
        id="Toggle-off"
        className={`${classes.Toggle} ${classes.Toggleright}`}
        name="toggle"
        value="true"
        type="radio"
      />
      <label htmlFor="Toggle-off" className={classes.Btn}>
        °F
      </label>
    </div>
  );
};

export default Switch;
