import React from "react";

export const Options = ({ question, dispatch, answer }) => {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => {
        return (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnswered ? (question.correctOption === index ? "correct" : "wrong") : ""
            }`}
            disabled={hasAnswered}
            key={option}
            onClick={() => {
              dispatch({ type: "newAnswer", payload: index });
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};
