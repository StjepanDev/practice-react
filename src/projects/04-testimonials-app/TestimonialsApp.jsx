import React from "react";
import Button from "../components/Button";
import Title from "../components/Title";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";

const handleClick = () => {
  console.log("clicked");
};

export default function TestimonialsApp() {
  return (
    <div className='container m-auto'>
      <Title text={"Testimonials App"} />
      <Button
        text={" Posts"}
        btnClass={"btn-info"}
        icon={<BsFillFileEarmarkPostFill />}
        onClick={handleClick}
      />
      <Button
        text={" Users"}
        btnClass={"btn-info"}
        icon={<FaUserAlt />}
        onClick={handleClick}
      />
      <Button
        text={" Comments"}
        btnClass={"btn-info"}
        icon={<BiCommentDetail />}
        onClick={handleClick}
      />
    </div>
  );
}
