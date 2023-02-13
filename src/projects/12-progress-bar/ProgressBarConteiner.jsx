import React, { useRef, useEffect, useState } from "react";
import Title from "../components/Title";
import { Progressbar } from "../components/Progressbar";

export default function ProgressBarConteiner() {
  const [completed, setCompleted] = useState();
  const [status, setStatus] = useState({
    ui: 55,
    ux: 43,
    data: 87,
  });

  const projectData = [
    { bgColor: "pink", completed: status.ui },
    { bgColor: "orange", completed: status.ux },
    { bgColor: "crimson", completed: status.data },
  ];

  const inputStyle = {
    width: 50,
    border: "none",
    outline: "none",
    textAlign: "center",
    borderBottom: "1px solid gray",
  };

  const uiInput = useRef(null);

  useEffect(() => {
    uiInput.current.focus();

    //   return () => {

    //   }
  }, []);

  return (
    <div className='container -container-sm mx-auto text-center'>
      <Title text={"Progress Bar"} />
      <h2>Project Status : {""}</h2>
      <ul>
        <li>
          UI STATUS
          <input
            type='number'
            ref={uiInput}
            style={inputStyle}
            value={status.ui}
            onChange={(e) => setStatus({ ...status, ui: e.target.value })}
          />
        </li>
        <li>
          UX STATUS
          <input
            type='number'
            style={inputStyle}
            value={status.ux}
            onChange={(e) => setStatus({ ...status, ux: e.target.value })}
          />
        </li>
        <li>
          DATA STATUS
          <input
            type='number'
            style={inputStyle}
            value={status.data}
            onChange={(e) => setStatus({ ...status, data: e.target.value })}
          />
        </li>
      </ul>
      {/* {progress bars} */}

      {projectData.map((d, i) => (
        <Progressbar bgColor={d.bgColor} key={i} completed={d.completed} />
      ))}
    </div>
  );
}
