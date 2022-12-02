import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModelContent,
  ModalFooter,
} from "reactstrap";
import { Link } from "react-router-dom";

import { TbCircle } from "react-icons/tb";
import { TiTick } from "react-icons/ti";

export default function Try2({
  selectColor,
  isDisable,
  setActive,
  active,
  circleArray,
}) {
  const randomNum = [1, 4, 5, 0];

  const [result, setResult] = useState([9, 9, 9, 9]);
  const [tryy, setTry] = useState(0);
  const [tryyArray, setTryArray] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [modal, setModal] = useState(false);
  const [win, setWin] = useState(false);

  const toggle = (e) => {
    setModal(!modal);
    setWin(e);
  };

  const [circleBar, setCircleBar] = useState([
    "white",
    "white",
    "white",
    "white",
  ]);

  const CircleHandler = (i) => {
    circleBar[i] = selectColor;
    setCircleBar([...circleBar]);
  };

  const compare = () => {
    randomNum.map((e, i) => {
      if (e === 0) {
        randomNum[i] = "#ffb400";
      } else if (e === 1) {
        randomNum[i] = "#ff5a5f";
      } else if (e === 2) {
        randomNum[i] = "#8ce071";
      } else if (e === 3) {
        randomNum[i] = "#00d1c1";
      } else if (e === 4) {
        randomNum[i] = "#007a87";
      } else if (e === 5) {
        randomNum[i] = "#7b0051";
      }
      const abc = JSON.stringify(randomNum) === JSON.stringify(circleBar);

      if (abc === false) {
        setActive(active + 1);
        if (active === circleArray.length - 1) {
          toggle(false);
        }
      } else {
        toggle(true);
      }
    });

    randomNum.map((e, i) => {
      const test = circleBar.includes(e);
      if (test === false) {
        result[i] = 0;
      }
      if (test === true) {
        const a = randomNum[i] === circleBar[i];

        if (a === true) {
          result[i] = 1;
        } else {
          result[i] = 2;
        }
      }
    });

    setTry((e) => e + 1);
    setTryArray([...tryyArray]);
    setResult([...result]);
  };
  return (
    <>
      <div style={{ backgroundColor: "red" }} class="model-content">
        <Modal style={{ marginTop: "20%" }} isOpen={modal} toggle={toggle}>
          <div style={{ backgroundColor: "#00c653" }}>
            {
              //Check if message failed
              win === true ? (
                <ModalBody
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: "40px",
                  }}
                >
                  CONGRATULATIONS!!
                </ModalBody>
              ) : (
                <ModalBody
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: "40px",
                  }}
                >
                  You Loose
                </ModalBody>
              )
            }

            <Button
              style={{
                margin: "0 auto",
                display: "flex",
                marginBottom: "10px",
              }}
              color="primary"
              onClick={() => window.location.reload()}
            >
              <Link
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
                to="/"
              >
                {" "}
                PLAY AGAIN
              </Link>
            </Button>
          </div>
        </Modal>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          opacity: isDisable ? 0.6 : 1,
        }}
      >
        <div style={{ display: "flex" }}>
          <div style={{ fontSize: "40px", cursor: "pointer" }}>
            {circleBar.map((e, i) => {
              return (
                <>
                  <TbCircle
                    onClick={() => (!isDisable ? CircleHandler(i) : {})}
                    fill={e}
                  />
                </>
              );
            })}
          </div>

          {!circleBar.includes("white") ? (
            <TiTick
              aria-disabled={isDisable}
              onClick={compare}
              style={{ fontSize: "40px" }}
            />
          ) : null}

          <div style={{ width: "32px", marginTop: "12px", marginLeft: "32px" }}>
            {result.map((e) => {
              if (e === 0) {
                return <TbCircle fill="red" />;
              } else if (e === 1) {
                return <TbCircle fill="green" />;
              } else if (e === 2) {
                return <TbCircle fill="black" />;
              } else {
                return <TbCircle />;
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}
