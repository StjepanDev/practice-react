import React from "react";

export const Progressbar = ({ bgColor, completed }) => {
  const containerStyles = {
    height: 25,
    backgroundColor: "#e8e8e8",
    borderRadius: 50,
    margin: 50,
  };
  const fillerStyles = {
    backgroundColor: bgColor,
    height: "100%",
    width: `${completed}`,
    borderRadius: "inherit",
    textAlign: "right",
    transition: "width 1s ease-in-out",
  };
  const labelStyles = {
    padding: 18,
    margin: 10,
    color: "#fff",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};
