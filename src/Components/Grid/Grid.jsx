import React, { useState } from "react";
import { Card } from "../Card/Card";
import "./Grid.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Grid = ({ numberOfCards }) => {
  const [turn, setTurn] = useState(true);
  //true-0 , false-x

  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  //initial state is the whole array with empty strings

  const [winner, setWinner] = useState(null);

  const [over, setOver] = useState("");

  function play(index) {
    console.log("Move played is:", index);
    if (board[index] === "") {
      board[index] = turn ? "0" : "X";
      setBoard([...board]);
      setTurn(!turn);
      checkWinner(turn ? "0" : "X");
    }
  }

  function isWinner(board, symbol) {
    console.log(board, symbol);
    if (
      (board[0] === symbol && board[1] === symbol && board[2] === symbol) ||
      (board[3] === symbol && board[4] === symbol && board[5] === symbol) ||
      (board[6] === symbol && board[7] === symbol && board[8] === symbol) ||
      (board[0] === symbol && board[3] === symbol && board[6] === symbol) ||
      (board[1] === symbol && board[4] === symbol && board[7] === symbol) ||
      (board[2] === symbol && board[5] === symbol && board[8] === symbol) ||
      (board[0] === symbol && board[4] === symbol && board[8] === symbol) ||
      (board[2] === symbol && board[4] === symbol && board[6] === symbol)
    ) {
      return true;
    }
    return false;
  }

  function checkWinner(symbol) {
    if (isWinner(board, symbol)) {
      setWinner(symbol);
      toast.success(`Congratulations! ${symbol} won the Game!! `);
      setOver("Game Over");
      console.log("Winner is:", symbol);
    } else if (board.every((cell) => cell !== "")) {
      setWinner("It's a Draw");
      console.log("It's a draw!");
    }
  }

  function reset() {
    console.log("Game Reset");
    setBoard(Array(numberOfCards).fill(""));
    setWinner(null);
    setTurn(true);
  }
  return (
    <>
      <strong className="turn">Current turn: {turn ? "0" : "X"}</strong>
      {winner && (
        <span className="last">
          <h1 className="victory"> Winner is: {winner}</h1>
          <h1 className="over">Game Over</h1>
          <button className="reset" onClick={reset}>
            Restart
          </button>
          {/* <ToastContainer position="bottom-center" /> */}
        </span>
      )}
      <div className="grid">
        {board.map((value, id) => {
          return <Card onPlay={play} player={value} key={id} index={id} />;
        })}
      </div>
    </>
  );
};
