import React, { Component } from "react";
import { TbCircle } from "react-icons/tb";

const ColorsList = [
  "#ffb400",
  "#ff5a5f",
  "#8ce071",
  "#00d1c1",
  "#007a87",
  "#7b0051",
];
const listObj = {
  selectedColors: [null, null, null, null],
  results: [0, 0, 0, 0], // 0 color not selected, 1 for black correct & same position & 2 for correct but incorrect postion
};
const createDefautlList = () => {
  let l = [];
  for (let i = 0; i < 10; i++) {
    l.push({ ...listObj });
  }
  return l;
};
export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: 0, list: createDefautlList() };
  }

  change = (p1) => {
    this.setState({ selected: p1 });
  };
  fillColor = (index, position) => {
    // index: 0-9, positon: 0-3
    const { list, selected } = this.state;

    let tempList = [...list];
    tempList[index].selectedColors[position] = ColorsList[selected - 1];
    this.setState({ list: tempList });
  };

  render() {
    const peg = {
      marginTop: "3px",
      marginLeft: "28px",
    };

    const colorpicker = {
      fontSize: "30px",
      marginLeft: "20%",
    };
    const { list, selected } = this.state;

    return (
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {list.map((item, index) => (
            <div style={{ display: "flex" }}>
              <div style={{ fontSize: "40px" }}>
                <TbCircle
                  style={{
                    fill: item.selectedColors[0],
                  }}
                  onClick={() => this.fillColor(index, 0)}
                />
                <TbCircle
                  id="color2"
                  style={{
                    fill: item.selectedColors[1],
                  }}
                  onClick={() => this.fillColor(index, 1)}
                />
                <TbCircle
                  id="color3"
                  style={{
                    fill: item.selectedColors[2],
                  }}
                  onClick={() => this.fillColor(index, 2)}
                />
                <TbCircle
                  id="color4"
                  style={{
                    fill: item.selectedColors[3],
                  }}
                  onClick={() => this.fillColor(index, 3)}
                />
              </div>

              <div style={peg}>
                <TbCircle />
                <TbCircle />
                <br />
                <TbCircle />
                <TbCircle />
              </div>
            </div>
          ))}
        </div>

        <div style={colorpicker}>
          <TbCircle
            id="color1"
            onClick={() => this.change(1)}
            style={{
              fill: "#ffb400",
              color: `${selected === 1 ? "black" : "white"}`,
              cursor: "pointer",
            }}
          />
          <br />
          <TbCircle
            onClick={() => this.change(2)}
            style={{
              fill: "#ff5a5f",
              color: `${selected === 2 ? "black" : "white"}`,
              cursor: "pointer",
            }}
          />
          <br />
          <TbCircle
            onClick={() => this.change(3)}
            style={{
              fill: "#8ce071",
              color: `${selected === 3 ? "black" : "white"}`,
              cursor: "pointer",
            }}
          />
          <br />
          <TbCircle
            onClick={() => this.change(4)}
            style={{
              fill: "#00d1c1",
              color: `${selected === 4 ? "black" : "white"}`,
              cursor: "pointer",
            }}
          />
          <br />
          <TbCircle
            onClick={() => this.change(5)}
            style={{
              fill: "#007a87",
              color: `${selected === 5 ? "black" : "white"}`,
              cursor: "pointer",
            }}
          />
          <br />
          <TbCircle
            onClick={() => this.change(6)}
            style={{
              fill: "#7b0051",
              color: `${selected === 6 ? "black" : "white"}`,
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    );
  }
}

export default Game;
