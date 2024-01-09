import React from "react";

export const NextButton = ({ dispatch, answer, numQuestions, index }) => {
  if (answer === null) return;
  return (
    <>
      {index + 1 < numQuestions ? (
        <div className="btn btn-ui" onClick={() => dispatch({ type: "nextQuestion" })}>
          Next
        </div>
      ) : (
        <div className="btn btn-ui" onClick={() => dispatch({ type: "finish" })}>
          Finish
        </div>
      )}
    </>
  );
};
