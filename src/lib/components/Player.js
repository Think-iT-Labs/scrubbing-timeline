import React from "react";
import { func } from "prop-types";
import { number } from "prop-types";

const Player = ({ update, lastIndex, index }) => {
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
        {index + 1}/{lastIndex + 1}
      </div>
      {/* <i class="play-button fa-solid fa-play" /> */}
      <i
        className="next-button fa fa-step-forward
"
        onClick={() =>
          update((value) => (value < lastIndex ? value + 1 : lastIndex))
        }
      />
      <i
        className="last-button fa fa-fast-forward
"
        onClick={() => update(lastIndex)}
      />
    </div>
  );
};

Player.propTypes = {
  update: func.isRequired,
  lastIndex: number.isRequired,
  index: number.isRequired,
};

export default Player;
