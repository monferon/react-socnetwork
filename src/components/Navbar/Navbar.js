import React from "react";
import s from "./Navbar.module.css";

// const s = `${s.item} ${s.active}`;
const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a>Profile</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a>Messages</a>
      </div>
      <div className={s.item}>
        <a>News</a>
      </div>
      <div className={s.item}>
        <a>Contacts</a>
      </div>
    </nav>
  );
};

export default Navbar;