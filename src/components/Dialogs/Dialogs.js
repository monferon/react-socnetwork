import React from "react";
import s from "./Dialogs.module.css";
const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>Kit</div>
        <div className={s.dialog}>Kit1</div>
        <div className={s.dialog}>Kit2</div>
        <div className={s.dialog}>Kit3</div>
        <div className={s.dialog}>Kit4</div>
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
