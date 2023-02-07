import React, { useState } from "react";
import Title from "../components/Title";
import {
  BsFillEmojiSmileFill,
  BsFillSuitHeartFill,
  BsSuitHeart,
} from "react-icons/bs";
import { AiOutlineComment } from "react-icons/ai";
import Doggy from "./img/images.jpg";

export default function LikePhotoApp() {
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(false);

  const toggleLike = () => {
    if (!like) {
      setLike(true);
      setCount(count + 1);
    } else {
      setLike(false);
      setCount(count - 1);
    }
  };
  return (
    <div className='container text-center'>
      <Title text={"Like My Photo"} />
      <Title classes={"subtitle"} text={`Likes ${count}`} />
      <div
        className='card card-dark m-auto shadow-sm'
        style={{ width: 300, cursor: "pointer" }}
      >
        <div className='card-header fs-xl'>
          <BsFillEmojiSmileFill className='mr-2' />
          <small>Doggy</small>
        </div>
        <img
          src={Doggy}
          alt='dog'
          style={{ height: "fit-content" }}
          onDoubleClick={toggleLike}
        />

        <div
          className='card-footer fs-xl d-flex'
          style={{ justifyContent: "space-between" }}
        >
          <AiOutlineComment />{" "}
          {like ? (
            <BsFillSuitHeartFill onClick={toggleLike} className='text-danger' />
          ) : (
            <BsSuitHeart onClick={toggleLike} />
          )}
        </div>
      </div>
    </div>
  );
}
