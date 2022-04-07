import _Timeine from "./components/Timeline";
import { arrayOf, number, string } from "prop-types";
import React, { useState } from "react";
import Editor from "./components/Editor";
import { TimelineType } from "./types";
import Player from "./components/Player";

const Timeline = React.memo(_Timeine);

const ScrubbingTimeLine = ({
  timelineArray,
  duration,
  language = "javascript",
}) => {
  const [focusedActionIndex, setFocusedActionIndex] = useState(0);

  return (
    <div className="timeline-wrapper">
      <Editor
        defaultLanguage={language}
        action={timelineArray[focusedActionIndex]}
      />
      <Timeline
        duration={duration}
        timelineArray={timelineArray}
        setFocusedActionIndex={setFocusedActionIndex}
      />
      <Player
        lastIndex={timelineArray?.length - 1 ?? 0}
        index={focusedActionIndex}
        update={setFocusedActionIndex}
      />
    </div>
  );
};

ScrubbingTimeLine.propTypes = {
  timelineArray: arrayOf(TimelineType).isRequired,
  duration: number.isRequired,
  language: string,
};

export default ScrubbingTimeLine;
