import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img
        className={s.logo}
        src="https://cdn.worldvectorlogo.com/logos/rockstar-games.svg"
        alt="Nothing"
      />
    </header>
  );
};

export default Header;
