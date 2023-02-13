import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import Popup from "../components/Popup";
import Title from "../components/Title";

export default function MagicPopup() {
  const [trigger, setTrigger] = useState(false);
  const [timeTrigger, setTimeTrigger] = useState(false);
  const [timeTriggerWarning, setTimeTriggerWarning] = useState(false);
  const triggerPopup = () => {
    console.log("trggerpopup");
    setTrigger(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setTimeTrigger(true);
    }, 3000);
    // return () => {};
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setTimeTriggerWarning(true);
    }, 8000);
    // return () => {};
  }, []);

  return (
    <div className='text-center'>
      <Title text={"Click for popup, or wait 3 seconds"} />
      <Button btnClass={"btn-primary"} onClick={triggerPopup} />
      <Popup
        type={"alert-info"}
        title={"Triggered Popup"}
        text={"Button triggered popup"}
        handleClose={setTrigger}
        trigger={trigger}
      />
      <Popup
        type={"alert-danger"}
        title={"Time Triggered Popup"}
        text={"Delay triggered popup"}
        handleClose={setTimeTrigger}
        trigger={timeTrigger}
      />
      <Popup
        type={"alert-warning"}
        title={"Time Triggered Popup"}
        text={"Delay triggered popup"}
        handleClose={setTimeTriggerWarning}
        trigger={timeTriggerWarning}
      />
    </div>
  );
}
