import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { BsFillEmojiFrownFill, BsFillEmojiSmileFill } from "react-icons/bs";
import "./Bounce.css";

export default function DialogBox({ width = 350 }) {
  const [icon, setIcon] = useState();

  const [subscription, setSubscription] = useState({
    title: "Hello",
    desc: "Would You Like To Subscribe?",
    state: null,
    justifyContent: "space-between",
  });

  let iconStyle = {
    fontSize: "80px",
    justifySelf: "center",
    color:
      subscription.state === "Subscribed"
        ? "rgba(59,123,90,0.6)"
        : "rgba(25,118,160,0.7)",
  };

  useEffect(() => {
    if (subscription.state === "Subscribed") {
      setIcon(<BsFillEmojiSmileFill style={iconStyle} />);
      document.body.style.background = "rgba(59,123,90,0.6)";
    }

    if (subscription.state === "Unsubscribed") {
      setIcon(<BsFillEmojiFrownFill style={iconStyle} />);
      document.body.style.background = "rgba(25,118,160,0.7)";
    }

    // return () => {

    // }
  }, [subscription.state]);

  const handleSubscribe = () => {
    setSubscription({
      title: "Thank you",
      desc: "For subscription",
      state: "Subscribed",
      justifyContent: "flex-end",
    });
  };

  const handleUnsubscribe = () => {
    setSubscription({
      title: "Sorry",
      desc: "To see you go",
      state: "Unsubscribed",
      justifyContent: "flex-end",
    });
  };

  const [bounce, setBounce] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setBounce("");
    }, 500);

    return () => setBounce("bounce");
  }, [subscription.state]);

  return (
    <div className={`card bg-light m-auto mt-4 ${bounce}`} style={{ width }}>
      <div className='card-body'>
        <div
          className='d-grid'
          style={{
            gridTemplateColumns: "2fr 1fr",
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          <section>
            <h2 className='card-title'>{subscription.title}</h2>
            <h3 className='card-text'>{subscription.desc}</h3>
          </section>
          <div>{icon}</div>
        </div>
        Dbox
      </div>
      {/* <hr /> */}
      <div
        className='d-flex mb-2 px-1 text-end'
        style={{
          width: "100%",
          justifyContent: `${subscription.justifyContent}`,
        }}
      >
        {subscription.state === null && (
          <Button text={"Cancel"} btnClass={"btn-light"} />
        )}
        {subscription.state === "Subscribed" ? null : (
          <Button
            text={"Subscribe"}
            btnClass={"btn-danger"}
            onClick={handleSubscribe}
          />
        )}
        {subscription.state === "Subscribed" ? (
          <Button
            text={"Unsubscribe"}
            btnClass={"btn-danger btn-block"}
            onClick={handleUnsubscribe}
          />
        ) : null}
      </div>
    </div>
  );
}
