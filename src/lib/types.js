import { exact, number, oneOf, string, arrayOf } from "prop-types";

export const MarkersType = exact({
  startRow: number.isRequired,
  endRow: number.isRequired,
  startCol: number.isRequired,
  endCol: number.isRequired,
  className: string.isRequired,
  type: oneOf(["text", "fullLine", "screenLine"]),
});

export const TimelineType = exact({
  actionType: oneOf(["PASTE", "TEST", "TYPE"]).isRequired,
  code: string.isRequired,
  time: number.isRequired,
  lang: string,
  markers: arrayOf(MarkersType),
});
