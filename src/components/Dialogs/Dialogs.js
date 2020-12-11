import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div> {props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Kit1" id="1" />
        <DialogItem name="Kit2" id="2" />
        <DialogItem name="Kit3" id="3" />
        <DialogItem name="Kit4" id="4" />
        <DialogItem name="Kit5" id="5" />
        <DialogItem name="Kit6" id="6" />
      </div>
      <div className={s.messages}>
        <Message message="Hi" />
        <Message message="How is yout course?" />
        <Message message="Yo!" />
        <Message message="Yo!" />
      </div>
    </div>
  );
};

export default Dialogs;
