import { exact, number, oneOf, string, arrayOf, bool } from "prop-types";

export const MarkersType = exact({
  startRow: number.isRequired,
  endRow: number.isRequired,
  startCol: number.isRequired,
  endCol: number.isRequired,
  className: string.isRequired,
  type: oneOf(["text", "fullLine", "screenLine"]),
});

export const TestType = exact({
  testId: number.isRequired,
  testInput: string.isRequired,
  testOutput: string.isRequired,
  expectedOutput: string.isRequired,
  result: bool.isRequired,
  reason: string,
});

export const TimelineType = exact({
  actionType: oneOf(["PASTE", "TEST", "TYPE"]).isRequired,
  code: string.isRequired,
  time: number.isRequired,
  lang: string,
  markers: arrayOf(MarkersType),
  test: arrayOf(TestType),
});
