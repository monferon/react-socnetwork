import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://photo.mac69.com/JPG-180506/180506_257/Bt9Pq00jEh_small.jpg"></img>
      </div>
      <div className={s.descriptionBlock}>Description</div>
    </div>
  );
};

export default ProfileInfo;
