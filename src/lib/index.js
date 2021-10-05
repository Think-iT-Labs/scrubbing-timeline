import "./style.css"
import ReactAce from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";
import { useState } from "react";

const Timeline = (props) => {

    const { timelineArray, duration } = props 
    const [focusedAction, setFocusedAction] = useState(timelineArray[0]);
    

    return (
        <div className="timeline-wrapper">
            <ReactAce
                theme= "monokai"
                name="brace-editor"
                data-cy="code-editor"
                style={{width: "calc(100% + 3px)"}}                
                tabSize={4}
                readOnly={true}
                value={focusedAction.code}
            />
            <div className="timeline-bar">
                {timelineArray.map((ta,i) => (
                    <div className={`timeline-item ${ta.actionType != "PASTE" ? "white" : "red"}`} key={i} style={{left: (ta.time/duration)*100+"%"}} onClick={() => setFocusedAction(timelineArray[i])}>
                        <div className="timeslot">
                            <p>{ta.time}s</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Timeline;