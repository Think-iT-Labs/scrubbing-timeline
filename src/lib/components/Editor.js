import React from "react";
import ReactAce from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";
import "./styles/style.css";
import { string } from "prop-types";
import { TimelineType } from "../types";

window.ace.config.set(
  "basePath",
  "https://cdn.jsdelivr.net/npm/ace-builds@1.4.13/src-noconflict/"
);

const Editor = ({ action, language }) => {
  return (
    <ReactAce
      mode={action?.lang ?? language} // if there's no lang in action or language it will default to javascript
      theme="monokai"
      name="brace-editor"
      style={{ width: "calc(100% + 3px)" }}
      tabSize={4}
      readOnly
      highlightActiveLine={false}
      value={action?.code ?? ""}
      markers={action?.markers ?? []}
    />
  );
};

Editor.propTypes = {
  action: TimelineType,
  defaultLanguage: string.isRequired,
};

export default Editor;
