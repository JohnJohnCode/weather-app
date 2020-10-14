import React, { useEffect, useState } from "react";

import * as classes from "./Main.module.css";
import Search from "../components/UI/Search/Search";
import Header from "../components/UI/Header/Header";
import Items from "../components/Items/Items";
import Spinner from "../components/UI/Spinner/Spinner";
import Modal from "../components/UI/Modal/Modal";
import Switch from "../components/UI/Switch/Switch";

const Main = () => {
  const [data, setData] = useState({});
  const [input, setInput] = useState("London");
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState(false);
  const [showMod, setShowMod] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [units, setUnits] = useState("EU");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const toggleMod = () => {
    setShowMod(false);
    setErrorMsg(null);
  };

  const changeUnits = () => {
    if (units === "EU") {
      setUnits("US");
    } else {
      setUnits("EU");
    }
  };

  const weather = async (loc) => {
    try {
      setShowMod(false);
      setError(false);
      setFetching(true);
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=f23a7c3fafed4d23af1141842201110&q=${loc}`
      );
      const user = await response.json();
      if (response.status !== 200) {
        setError(true);
        setShowMod(true);
        setErrorMsg({
          erMsg: user.error.message,
          erStatText: response.statusText,
          erStat: response.status,
        });
      }
      setData(user);
      setFetching(false);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    weather("London");
  }, []);

  let items = <Spinner />;
  let switchBtn = null;
  if (fetching === false) {
    items = <Items data={data} units={units} />;
    switchBtn = <Switch class={classes.Switch} onChange={changeUnits} />;
  }
  let modalText = null;
  if (errorMsg) {
    modalText = (
      <React.Fragment>
        <p
          style={{ marginBottom: "0.5rem" }}
        >{`${errorMsg.erStat}: ${errorMsg.erStatText}`}</p>
        <p>{errorMsg.erMsg}</p>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Header>
        <div className={classes.InputCont}>
          <Search
            input={input}
            setInput={setInput}
            inputHandler={inputHandler}
          />
          <i
            className={`fas fa-search ${classes.Icon}`}
            onClick={() => weather(input)}
          />
        </div>
      </Header>
      <div className={classes.TitleCont}>
        <span className={classes.Title}>Weather App</span>
      </div>
      <Modal show={showMod} toggleMod={toggleMod}>
        {errorMsg ? modalText : null}
      </Modal>
      {error === true ? null : switchBtn}
      {error === true ? null : items}
    </React.Fragment>
  );
};

export default Main;
