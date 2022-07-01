import React from "react";
import "./styles/style.css";
import { TimelineType } from "../types";



const TestResult = ({ currentAction }) => {
  return (

   ( currentAction.actionType === "TEST" && currentAction?.test )?
    currentAction?.test.map((test, i) => (
      <div style={{ textAlign: 'center' }}>
        <h4>Input</h4>
        <p className="test-result"> {test.testInput} </p>
        <h4>Output</h4>
        <p className="test-result">{test.testOutput} </p>
        <h4>Expected Output</h4>
        <p className="test-result"> {test.expectedOutput} </p>


      </div>

    ))
    :
    <div></div>
  );
};

TestResult.propTypes = {
  action: TimelineType,
};

export default TestResult;
