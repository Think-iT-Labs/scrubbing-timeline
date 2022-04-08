import { arrayOf, exact, number, oneOf, string } from "prop-types";
import React, { useState } from "react";
import ReactAce from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";
import "./styles/style.css";

window.ace.config.set(
  "basePath",
  "https://cdn.jsdelivr.net/npm/ace-builds@1.4.13/src-noconflict/"
);

const Timeline = ({ timelineArray, duration, language = "javascript" }) => {
  const [focusedAction, setFocusedAction] = useState(timelineArray?.[0]);
  const secondsToTime = (secs) => {
    const hours = Math.floor(secs / (60 * 60));
    const divisorForMinutes = secs % (60 * 60);
    const minutes = Math.floor(divisorForMinutes / 60);
    const seconds = divisorForMinutes % 60;
    return hours + ":" + minutes + ":" + seconds;
  };
  const getColor = (actionType) => {
    switch (actionType){
      case "PASTE": return "red";
      case "TYPE" : return "white";
      case "TEST": return "blue"
      default: return "white"
    }
  };
  return (
    <div className="timeline-wrapper">
      <ReactAce
        mode={focusedAction?.lang ?? language} // if there's no lang in focusedAction or language it will default to javascript
        theme="monokai"
        name="brace-editor"
        style={{ width: timelineArray ? "calc(100% + 3px)" : "100%" }}
        tabSize={4}
        readOnly
        highlightActiveLine={false}
        value={focusedAction?.code ?? ""}
        markers={focusedAction?.markers ?? []}
      />
      <div className="timeline-bar">
        {timelineArray &&
          timelineArray.map((ta, i) => (
            <div
              className={`timeline-item ${
                getColor(ta.actionType)}`}
              key={`${ta.lang}-${i}`}
              style={{ left: (ta.time / duration) * 100 + "%" }}
              onClick={() => setFocusedAction(timelineArray[i])}
            >
              <div className="timeslot">
                <p>{secondsToTime(ta.time)}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

const MarkersType = exact({
  startRow: number.isRequired,
  endRow: number.isRequired,
  startCol: number.isRequired,
  endCol: number.isRequired,
  className: string.isRequired,
  type: oneOf(["text", "fullLine", "screenLine"]),
});

const TimelineType = exact({
  actionType: oneOf(["PASTE", "TEST", "TYPE"]).isRequired,
  code: string.isRequired,
  time: number.isRequired,
  lang: string,
  markers: arrayOf(MarkersType),
});

Timeline.propTypes = {
  timelineArray: arrayOf(TimelineType).isRequired,
  duration: number.isRequired,
  language: string,
};

export default Timeline;
