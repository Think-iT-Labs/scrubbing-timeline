import "./styles/style.css"
import React, { useEffect, useState } from "react"
import ReactAce from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";

window.ace.config.set(
    "basePath",
    "https://cdn.jsdelivr.net/npm/ace-builds@1.4.13/src-noconflict/"
);

const Timeline = (props) => {

    const { timelineArray, duration } = props 
    const [focusedAction, setFocusedAction] = useState(null);

    useEffect(()=> {
        if(timelineArray)
            setFocusedAction(timelineArray[0])
    }, [timelineArray])
    

    return (
        <div className="timeline-wrapper">
            <ReactAce
                mode= "text"
                theme= "monokai"
                name="brace-editor"
                data-cy="code-editor"
                style={{width: timelineArray ? "calc(100% + 3px)" : "100%"}}                
                tabSize={4}
                readOnly={true}
                value={focusedAction ? focusedAction.code : ""}
            />
            <div className="timeline-bar">
                {timelineArray && timelineArray.map((ta,i) => (
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