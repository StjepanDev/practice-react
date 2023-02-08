import React, { useState } from "react";
import Button from "../components/Button";

export default function TempControllerApp() {
  const [temp, setTemp] = useState(0);

  const increaseTemp = () => {
    setTemp(temp + 1);
  };
  const decreaseTemp = () => {
    setTemp(temp - 1);
  };

  return (
    <div className='container mt-3 text-center'>
      <div className='card bg-light m-auto' style={{ width: 200 }}>
        <h1
          className={`text-light card border-50 ${
            temp > 0 ? "bg-danger" : "bg-info"
          }`}
          style={{ height: 150, width: 150, border: "2px solid red" }}
        >
          {temp}° C
        </h1>
        <div className='d-flex my-2'>
          <Button text={"-"} btnClass={"btn-lg"} onClick={decreaseTemp} />
          <Button text={"+"} btnClass={"btn-lg"} onClick={increaseTemp} />
        </div>
      </div>
    </div>
  );
}
