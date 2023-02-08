import React, { useContext } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import { ThemeContext, themes } from "./contexts/theme-contex";

export default function Blog() {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <div className='container p-1'>
      <Title text={`My Blog => ${theme} Theme `} />
      <span style={{ position: "absolute", top: 10, right: 10 }}>
        <Button
          text={theme === "dark" ? "Light" : "Dark"}
          onClick={changeTheme}
          btnClass={`${theme === "dark" && "btn-light"} btn-sm`} //dodavanje jos css clasa  ustring templejt btn-sm
        />
      </span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit fuga
        dolor commodi deserunt soluta incidunt corporis. Itaque voluptatum quod,
        autem, natus, minus id molestias dolorum repellat aut necessitatibus
        esse accusantium.
      </p>
    </div>
  );
}
