import React from "react";

import * as classes from "./Items.module.css";

const Items = (props) => {
  return (
    <div className={classes.Parent}>
      <div className={classes.Div1}>
        <span className={classes.Big}>
          {props.units === "EU"
            ? props.data.current.temp_c
            : props.data.current.temp_f}
        </span>
        <span>{props.units === "EU" ? "°C" : "°F"}</span>
      </div>
      <div className={classes.Div2}>
        <p className={classes.Big}>{props.data.location.country}</p>
      </div>
      <div className={classes.Div3}>
        <p className={classes.Big}>{props.data.location.localtime.slice(10)}</p>
      </div>
      <div className={classes.Div4}>
        <p className={classes.Title}>Cloudiness</p>
        <p>
          <span className={classes.Bold}>{props.data.current.cloud}</span>%
        </p>
      </div>
      <div className={classes.Div5}>
        <p className={classes.Title}>Wind</p>
        <p>
          <span className={classes.Bold}>
            {props.units === "EU"
              ? props.data.current.wind_kph
              : props.data.current.wind_mph}
          </span>
          <span className={classes.Title}>
            {props.units === "EU" ? "km/h" : "mi/h"}
          </span>
        </p>
      </div>
      <div className={classes.Div6}>
        <p className={classes.Title}>Feels like</p>
        <p>
          <span className={classes.Bold}>
            {props.units === "EU"
              ? props.data.current.feelslike_c
              : props.data.current.feelslike_f}
          </span>
          <span className={classes.Title}>
            {props.units === "EU" ? "°C" : "°F"}
          </span>
        </p>
      </div>
      <div className={classes.Div7}>
        <p className={classes.Title}>Pressure</p>
        <p>
          <span className={classes.Bold}>
            {props.units === "EU"
              ? props.data.current.pressure_mb
              : props.data.current.pressure_in}
          </span>
          <span className={classes.Title}>
            {props.units === "EU" ? "mbar" : "inHg"}
          </span>
        </p>
      </div>
      <div className={classes.Div8}>
        <p className={classes.Title}>Humidity</p>
        <p>
          <span className={classes.Bold}>{props.data.current.humidity}</span>
          <span className={classes.Title}>%</span>
        </p>
      </div>
      <div className={classes.Div9}>
        <p className={classes.Title}>Wind dir.</p>
        <p>
          <span className={classes.Bold}>{props.data.current.wind_dir}</span>
        </p>
      </div>
      <div className={classes.Div10}>
        <p>
          <span className={classes.Title}>Condition</span>
        </p>
        <p className={classes.Bold}>{props.data.current.condition.text}</p>
      </div>
      <div className={classes.Div11}>
        <img
          src={`https:${props.data.current.condition.icon}`}
          className={classes.Icon}
          alt="icon"
        />
      </div>
    </div>
  );
};

export default Items;
