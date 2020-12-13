import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";
const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog}>
      <img src="https://img.douxie.com/upload/imgs/1211/1352272842946.jpg"></img>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
