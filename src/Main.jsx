/** @format */

import React, { useState } from "react";
import rock from "./images/icon-rock.svg";
import paper from "./images/icon-paper.svg";
import scissors from "./images/icon-scissors.svg";
import "./Main.css";

const Main = () => {
  const [data, setData] = useState({
    img1: rock,
    img2: paper,
    resultText: "Play",
    score: 0,
  });

  let rps = ["rock", "paper", "scissor"];

  let handlePlay = () => {
    let randomNumber1 = Math.floor(Math.random() * 3);
    let personal = rps[randomNumber1];
    let randomNumber2 = Math.floor(Math.random() * 3);
    let computer = rps[randomNumber2];
    console.log(personal);
    console.log(computer);
    if (personal == computer) {
      if (personal == "rock") {
        setData({ ...data, img1: rock, img2: rock, resultText: "IT IS A TIE" });
      } else if (personal == "paper") {
        setData({
          ...data,
          img1: paper,
          img2: paper,
          resultText: "IT IS A TIE",
        });
      } else if (personal == "scissors") {
        setData({
          ...data,
          img1: scissors,
          img2: scissors,
          resultText: "IT IS A TIE",
        });
      } else if (personal == "paper" && computer == "rock") {
        setData({
          ...data,
          score: data.score + 1,
          img1: paper,
          img2: rock,
          resultText: "YOU WIN",
        });
      } else if (personal == "scissors" && computer == "paper") {
        setData({
          ...data,
          score: data.score + 1,
          img1: scissors,
          img2: paper,
          resultText: "YOU WIN",
        });
      }
    } else if (personal == "rock" && computer == "scissors") {
      setData({
        ...data,
        score: data.score + 1,
        img1: rock,
        img2: scissors,
        resultText: "YOU WIN",
      });
    } else if (computer == "paper" && personal == "rock") {
      setData({
        ...data,
        score: data.score - 1,
        img1: paper,
        img2: rock,
        resultText: "YOU LOSE",
      });
    } else if (personal == "scissors" && computer == "paper") {
      setData({
        ...data,
        score: data.score - 1,
        img1: scissors,
        img2: paper,
        resultText: "YOU LOSE",
      });
    } else if (personal == "rock" && computer == "scissors") {
      setData({
        ...data,
        score: data.score - 1,
        img1: rock,
        img2: scissors,
        resultText: "YOU LOSE",
      });
    } else {
      setData({
        ...data,
        score: data.score + 1,
        img1: rock,
        img2: scissors,
        resultText: "YOU WIN",
      });
    }
  };

  return (
    <div className="main">
      <div className="nav">
        <h1>
          ROCK <br /> PAPAER <br /> SCISSORS
        </h1>
        <div className="navp">
          <h5>SCORE</h5>
          <h4>{data.score}</h4>
        </div>
      </div>

      <div className="result">
        <div className="img1">
          <img src={data.img1} alt="" />
          <h4>YOU PICKED</h4>
        </div>
        <div className="img2">
          <img src={data.img2} alt="" />
          <h4>THE HOUSE PICKED</h4>
        </div>
      </div>

      <div className="you">
        <h1>{data.resultText}</h1>
        <button
          onClick={() => {
            handlePlay();
          }}
        >
          PLAY AGAIN
        </button>
      </div>

      <div className="last">
        <a href="https://www.pgpedia.com/r/rock-paper-scissors#:~:text=Rock%20wins%20against%20scissors%3B%20paper,there%20is%20a%20clear%20winner.">"RULES"</a>
      </div>
    </div>
  );
};

export default Main;
