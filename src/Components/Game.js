import React, { useState } from "react";
import { TbCircle } from "react-icons/tb";

import Try2 from "./Try2";

export const Game = () => {
  const [selectColor, setSelectColor] = useState("#ffb400");
  const [selectIndex, setSelectIndex] = useState(0);

  const circleArray = new Array(10).fill(Math.floor(Math.random() * 10));

  const [active, setActive] = useState(0);

  const ChangeHandler = (color, number) => {
    setSelectColor(color);
    setSelectIndex(number);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          {circleArray.map((_, i) => {
            // if (e === tryy) {
            return (
              <Try2
                selectColor={selectColor}
                active={active}
                isDisable={active !== i}
                setActive={setActive}
                circleArray={circleArray}
              />
            );
          })}
        </div>

        <div style={{ fontSize: "31px", marginLeft: "10%" }}>
          <TbCircle
            onClick={() => ChangeHandler("#ffb400", 0)}
            style={{
              fill: "#ffb400",
              color: `${selectIndex === 0 ? "black" : "white"}`,
              cursor: "pointer",
            }}
          />

          <br />
          <TbCircle
            onClick={() => ChangeHandler("#ff5a5f", 1)}
            style={{
              fill: "#ff5a5f",
              color: `${selectIndex === 1 ? "black" : "white"}`,
              cursor: "pointer",
            }}
          />
          <br />
          <TbCircle
            onClick={() => ChangeHandler("#8ce071", 2)}
            style={{
              fill: "#8ce071",
              color: `${selectIndex === 2 ? "black" : "white"}`,
              cursor: "pointer",
            }}
          />
          <br />
          <TbCircle
            onClick={() => ChangeHandler("#00d1c1", 3)}
            style={{
              fill: "#00d1c1",
              color: `${selectIndex === 3 ? "black" : "white"}`,
              cursor: "pointer",
            }}
          />
          <br />
          <TbCircle
            onClick={() => ChangeHandler("#007a87", 4)}
            style={{
              fill: "#007a87",
              color: `${selectIndex === 4 ? "black" : "white"}`,
              cursor: "pointer",
            }}
          />
          <br />
          <TbCircle
            onClick={() => ChangeHandler("#7b0051", 5)}
            style={{
              fill: "#7b0051",
              color: `${selectIndex === 5 ? "black" : "white"}`,
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Game;
