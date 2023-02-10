import React, { useState } from "react";
import SliderComp from "./SliderComp";
import Title from "../components/Title";

export default function SliderApp() {
  const [slideVal, setSlideVal] = useState(0);
  const handleSliderValChange = (e) => {
    setSlideVal(e.target.value);
  };

  let bgColor;
  let textColor;

  if (slideVal < 25) {
    bgColor = "red";
    textColor = "red";
  }
  if (slideVal < 25 && slideVal <= 50) {
    bgColor = "blue";
    textColor = "red";
  }
  if (slideVal > 51 && slideVal <= 75) {
    bgColor = "green";
    textColor = "white";
  }

  if (slideVal > 75) {
    bgColor = "orange";
    textColor = "red";
  }

  if (slideVal === 100) {
    bgColor = "red";
  }
  return (
    <div className='container text-center'>
      <Title text={"Slide To Grow"} />
      <SliderComp
        setValue={slideVal}
        handleInput={handleSliderValChange}
        bgColor={bgColor}
        textColor={textColor}
      />
    </div>
  );
}
