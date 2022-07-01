import _Timeine from "./components/Timeline";
import { arrayOf, number, string } from "prop-types";
import React, { useState } from "react";
import Editor from "./components/Editor";
import { TimelineType } from "./types";
import Player from "./components/Player";
import TestResult from "./components/TestResult";

const Timeline = React.memo(_Timeine);

const ScrubbingTimeLine = ({
  timelineArray,
  duration,
  language = "javascript",
}) => {
  const [focusedActionIndex, setFocusedActionIndex] = useState(0);

  return (
    <div className={(timelineArray[focusedActionIndex].actionType === "TEST" && timelineArray[focusedActionIndex]?.test)?"wrapper":""}>
      <div  className="timeline-wrapper">
        <Editor
          defaultLanguage={language}
          currentAction={timelineArray[focusedActionIndex]}
        />
        <Timeline
          focusedActionIndex={focusedActionIndex}
          duration={duration}
          timelineArray={timelineArray}
          setFocusedActionIndex={setFocusedActionIndex}
        />
        <Player
          lastActionIndex={timelineArray?.length - 1 ?? 0}
          focusedActionIndex={focusedActionIndex}
          updateFocusedActionIndex={setFocusedActionIndex}
        /></div>
      <div className="test-wrapper">
        <TestResult
          currentAction={timelineArray[focusedActionIndex]}
        />
      </div>

    </div>
  );
};

ScrubbingTimeLine.propTypes = {
  timelineArray: arrayOf(TimelineType).isRequired,
  duration: number.isRequired,
  language: string,
};

export default ScrubbingTimeLine;
