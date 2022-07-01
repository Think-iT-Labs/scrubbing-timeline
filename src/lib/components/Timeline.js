import { arrayOf, number, func } from "prop-types";
import React from "react";
import "./styles/style.css";
import { TimelineType } from "../types";

const Timeline = ({
  timelineArray,
  duration,
  setFocusedActionIndex,
  focusedActionIndex,
}) => {
  const secondsToTime = (secs) => {
    const hours = Math.floor(secs / (60 * 60));
    const divisorForMinutes = secs % (60 * 60);
    const minutes = Math.floor(divisorForMinutes / 60);
    const seconds = divisorForMinutes % 60;
    return hours + ":" + minutes + ":" + seconds;
  };

  const getColor = (actionType) => {
    switch (actionType) {
      case "PASTE":
        return "red";
      case "TYPE":
        return "white";
      case "TEST":
        return "blue";
      default:
        return "white";
    }
  };
  return (
    <div className="timeline-bar">
      {timelineArray &&
        timelineArray.map((ta, i) => (
          <div
            className={`timeline-item ${getColor(ta.actionType)}`}
            key={`${ta.lang}-${i}`}
            style={{ left: `calc(${(ta.time / duration) * 100}% - 3px)` }}
            onClick={() => setFocusedActionIndex(i)}
          >
            <div className="timeslot">
              <p>{secondsToTime(ta.time)}</p>
            </div>
            {focusedActionIndex === i && (
              <div className={`pointer ${getColor(ta.actionType)}`} />
            )}
          </div>
        ))}
    </div>
  );
};

Timeline.propTypes = {
  timelineArray: arrayOf(TimelineType).isRequired,
  duration: number.isRequired,
  setFocusedActionIndex: func.isRequired,
  focusedActionIndex: number.isRequired,
};

export default Timeline;
