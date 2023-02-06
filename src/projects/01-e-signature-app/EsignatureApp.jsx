import React, { useState } from "react";
import Title from "../components/Title";

export default function EsignatureApp() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const inputStyle = {
    border: "none",
    borderBottom: "2px",
    outline: "none",
    padding: ".35rem 0",
  };
  document.body.style.background = "#eee";
  return (
    <div className='container text-container'>
      <Title classes={"title"} text={name} />
      <Title classes={"main-title mb-4"} text={!date ? "Dob" : date} />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam tempore
        tenetur, minus laborum corrupti quo, molestias illo recusandae
        accusantium iure quidem odio, perferendis nisi! Quae eius saepe hic
        corporis modi!
      </p>
      <footer
        className='d-flex'
        style={{
          justifyContent: "space-around",
          position: "relative",
          top: "40vh",
        }}
      >
        <input
          type='date'
          value={date}
          style={inputStyle}
          onChange={handleDateChange}
        />
        <input
          type='text'
          value={name}
          style={inputStyle}
          onChange={handleNameChange}
        />
      </footer>
    </div>
  );
}
