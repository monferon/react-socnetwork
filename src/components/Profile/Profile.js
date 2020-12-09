import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://photo.mac69.com/JPG-180506/180506_257/Bt9Pq00jEh_small.jpg"></img>
      </div>
      <div>Description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
