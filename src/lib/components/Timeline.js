import { arrayOf, number, func } from "prop-types";
import React from "react";
import "./styles/style.css";
import { TimelineType } from "../types";

const Timeline = ({ timelineArray, duration, setFocusedAction }) => {
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
      case "TEST": return "blue";
      default: return "white";
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
          </div>
        ))}
    </div>
  );
};

Timeline.propTypes = {
  timelineArray: arrayOf(TimelineType).isRequired,
  duration: number.isRequired,
  setFocusedAction: func.isRequired,
};

export default Timeline;
