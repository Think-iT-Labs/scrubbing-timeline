import React, { useState, useEffect, useRef } from "react";
import {
  SkipBackwardIcon,
  PlayIcon,
  SkipIcon,
  SkipToBeginningIcon,
  PauseIcon,
  SkipToEndIcon,
} from "../icons";
import { func } from "prop-types";
import { number } from "prop-types";

const Player = ({
  updateFocusedActionIndex,
  lastActionIndex,
  focusedActionIndex,
}) => {
  const [focusedActionInput, setFocusedActionInput] = useState(
    focusedActionIndex + 1
  );
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const setIntervalId = useRef(null);

  const handleOnBlur = () => {
    if (focusedActionInput >= 1 && focusedActionInput <= lastActionIndex + 1)
      updateFocusedActionIndex(focusedActionInput - 1);
    else setFocusedActionInput(focusedActionIndex + 1);
  };

  // play the snapshots in .5 untervals
  useEffect(() => {
    if (!isTimerRunning) return;
    setIntervalId.current = setInterval(
      () => updateFocusedActionIndex((v) => v + 1),
      500
    );
    return () => clearInterval(setIntervalId.current);
  }, [isTimerRunning, updateFocusedActionIndex]);

  // watch to clear the setInterval
  useEffect(() => {
    if (setIntervalId.current && focusedActionIndex > lastActionIndex - 1) {
      clearInterval(setIntervalId.current);
      setIsTimerRunning(false);
      setIntervalId.current = null;
    }
  }, [focusedActionIndex, lastActionIndex]);

  // sync the setCurrentSnapInput with the index prop
  useEffect(() => {
    setFocusedActionInput(focusedActionIndex + 1);
  }, [focusedActionIndex]);

  return (
    <div className="timeline-player">
      <SkipToBeginningIcon
        className="player-icon first-button"
        onClick={() => updateFocusedActionIndex(0)}
      />
      <SkipBackwardIcon
        className="player-icon previous-button"
        onClick={() =>
          updateFocusedActionIndex((value) => (value > 0 ? value - 1 : 0))
        }
      />
      <div className="current-snap">
        <input
          type="number"
          value={focusedActionInput}
          onChange={(e) => {
            const input = e.target.value;
            setFocusedActionInput(input);
          }}
          onBlur={handleOnBlur}
          style={{
            width: `${`${lastActionIndex}`.length * 10}px`,
          }}
          onKeyDown={(event) => event.key === "Enter" && handleOnBlur()}
        />
        /{lastActionIndex + 1}
      </div>

      {!isTimerRunning ? (
        <PlayIcon
          className="player-icon play-button"
          onClick={() => {
            if (focusedActionIndex < lastActionIndex) {
              setIsTimerRunning(true);
            }
          }}
        />
      ) : (
        <PauseIcon
          className="player-icon pause-button"
          onClick={() => {
            setIsTimerRunning(false);
            clearInterval(setIntervalId.current);
            setIntervalId.current = null;
          }}
        />
      )}
      <SkipIcon
        className="player-icon next-button"
        onClick={() =>
          updateFocusedActionIndex((value) =>
            value < lastActionIndex ? value + 1 : lastActionIndex
          )
        }
      />
      <SkipToEndIcon
        className="player-icon last-button"
        onClick={() => updateFocusedActionIndex(lastActionIndex)}
      />
    </div>
  );
};

Player.propTypes = {
  updateFocusedActionIndex: func.isRequired,
  lastActionIndex: number.isRequired,
  focusedActionIndex: number.isRequired,
};

export default Player;
