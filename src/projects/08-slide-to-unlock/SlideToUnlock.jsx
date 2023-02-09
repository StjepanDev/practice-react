import React, { useState } from "react";
import LockSlider from "./LockSlider";
import { AiFillUnlock } from "react-icons/ai";
import LockScreenImg from "./img/lock.jpg";
import HomeScreenImg from "./img/home.jpg";

export default function SlideToUnlock() {
  const [uiProps, setUiprops] = useState({
    uiText: "Unlock Screeen",
    uiColor: "#eee",
    uiBg: `url(${LockScreenImg})center/cover`,
  });
  const [showLockSlider, setShowLockSlider] = useState(true);
  const [lockSliderVal, setLockSliderVal] = useState("");

  const handleLockSliderInput = (e) => {
    setLockSliderVal(e.target.value);
    console.log(e.target.value);
    setShowLockSlider(false);
  };

  return (
    <div
      className='container text-center d-flex flex-column border-20'
      style={{
        height: "70vh",
        marginTop: "15vh",
        width: 340,
        border: "4px solid red",
        background: uiProps.uiBg,
      }}
    >
      <h1 style={{ color: uiProps.uiColor }} className='title'>
        {uiProps.uiText}
      </h1>
      {showLockSlider ? (
        <LockSlider
          width={"250px"}
          handleInput={handleLockSliderInput}
          value={lockSliderVal}
        />
      ) : (
        <AiFillUnlock className='unlockIcon' />
      )}
    </div>
  );
}
