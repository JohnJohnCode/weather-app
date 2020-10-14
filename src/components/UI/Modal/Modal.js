import React from "react";

import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <React.Fragment>
      <div
        className={classes.Backdrop}
        style={{ visibility: props.show ? "visible" : "hidden" }}
        onClick={props.toggleMod}
      >
        <div
          className={classes.Modal}
          style={{
            transform: props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: props.show ? "1" : "0",
          }}
        >
          {props.children}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
