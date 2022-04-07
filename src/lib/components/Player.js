import React, { useState, useEffect, useRef } from "react";
import { func } from "prop-types";
import { number } from "prop-types";

const Player = ({ update, lastSnapshotIndex, index }) => {
  const [currentSnapInput, setCurrentSnapInput] = useState(index + 1);
  const [runTimer, setRunTimer] = useState(false);
  const timerId = useRef(null);

  const handleOnBlur = () => {
    if (currentSnapInput >= 1 && currentSnapInput <= lastSnapshotIndex + 1) {
      update(currentSnapInput - 1);
    } else {
      setCurrentSnapInput(index + 1);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") handleOnBlur();
  };

  useEffect(() => {
    if (!runTimer) return;
    timerId.current = setInterval(() => {
      update((v) => v + 1);
    }, 500);
    return () => clearInterval(timerId.current);
  }, [index, currentSnapInput, lastSnapshotIndex, runTimer, update]);

  useEffect(() => {
    if (timerId.current && index > lastSnapshotIndex - 1) {
      clearInterval(timerId.current);
      setRunTimer(false);
      timerId.current = null;
    }
  }, [index, lastSnapshotIndex]);

  useEffect(() => {
    setCurrentSnapInput(index + 1);
  }, [index]);

  return (
    <div className="timeline-player">
      <i
        className="first-button fa fa-fast-backward"
        onClick={() => update(0)}
      />
      <i
        className="previous-button fa fa-step-backward"
        onClick={() => update((value) => (value > 0 ? value - 1 : 0))}
      />
      <div className="current-snap">
        <input
          type="number"
          value={currentSnapInput}
          onChange={(e) => {
            const input = e.target.value;
            setCurrentSnapInput(input);
          }}
          onBlur={handleOnBlur}
          style={{
            width: `${`${lastSnapshotIndex}`.length * 10}px`,
          }}
          onKeyDown={handleKeyDown}
        />
        /{lastSnapshotIndex + 1}
      </div>
      {!runTimer ? (
        <i
          className="play-button fa fa-solid fa-play"
          onClick={() => {
            if (index < lastSnapshotIndex) {
              setRunTimer(true);
            }
          }}
        />
      ) : (
        <i
          className="pause-button fa fa-solid fa-pause"
          onClick={() => {
            setRunTimer(false);
            clearInterval(timerId.current);
            timerId.current = null;
          }}
        />
      )}
      <i
        className="next-button fa fa-step-forward
"
        onClick={() =>
          update((value) =>
            value < lastSnapshotIndex ? value + 1 : lastSnapshotIndex
          )
        }
      />
      <i
        className="last-button fa fa-fast-forward
"
        onClick={() => update(lastSnapshotIndex)}
      />
    </div>
  );
};

Player.propTypes = {
  update: func.isRequired,
  lastSnapshotIndex: number.isRequired,
  index: number.isRequired,
};

export default Player;
