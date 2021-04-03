import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://regnum.ru/uploads/pictures/news/2021/01/23/regnum_picture_1611384947151260_normal.jpg"></img>
      </div>
      <div className={s.descriptionBlock}>Description</div>
    </div>
  );
};

export default ProfileInfo;
