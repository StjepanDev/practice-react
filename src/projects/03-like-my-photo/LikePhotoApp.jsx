import React from "react";
import Title from "../components/Title";
import {
  BsFillEmojiSmileFill,
  BsFillSuitHeartFill,
  BsSuitHeart,
} from "react-icons/bs";
import { AiOutlineComment } from "react-icons/ai";
import Doggy from "./img/images.jpg";

export default function LikePhotoApp() {
  let like = true;
  return (
    <div className='container text-center'>
      <Title text={"Like My Photo"} />
      <Title classes={"subtitle"} text={"Likes"} />
      <div
        className='card card-dark m-auto'
        style={{ width: 300, cursor: "pointer" }}
      >
        <div className='card-header fs-xl'>
          <BsFillEmojiSmileFill className='mr-2' />
          <small>Doggy</small>
        </div>
        <img src={Doggy} alt='' style={{ height: "fit-content" }} />
        <div
          className='card-footer fs-xl d-flex'
          style={{ justifyContent: "space-between" }}
        >
          <AiOutlineComment />{" "}
          {like ? (
            <BsFillSuitHeartFill className='text-danger' />
          ) : (
            <BsSuitHeart />
          )}
        </div>
      </div>
    </div>
  );
}
