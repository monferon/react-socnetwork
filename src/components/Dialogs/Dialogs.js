import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>
          <NavLink to="/dialogs/1">Kit</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">Kit1</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">Kit2</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/4">Kit3</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/5">Kit4</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}> hi</div>
        <div className={s.message}>How is yout course?</div>
        <div className={s.message}>Yo!</div>
      </div>
    </div>
  );
};

export default Dialogs;
