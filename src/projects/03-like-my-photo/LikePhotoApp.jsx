import React from "react";
import Title from "../components/Title";

export default function LikePhotoApp() {
  return (
    <div className='container text-center'>
      <Title text={"Like My Photo"} />
      <Title classes={"subtitle"} text={"Likes"} />
      <div
        className='card card-dark m-auto'
        style={{ width: 300, cursor: "pointer" }}
      >
        <div className='card-header fs-xl'>
          <small>Doggy</small>
        </div>
        <img src='' alt='' style={{ height: "fit-content" }} />
        <div
          className='card-footer fs-xl d-flex'
          style={{ justifyContent: "space-between" }}
        ></div>
      </div>
    </div>
  );
}
