import React from "react";

function WorkList({ props }) {
    return (
        <div className='work'>
            <h3>{props.vacation}</h3>
            <h4>{props.place}</h4>
            <h5>{props.date}</h5>
            <p>{props.text}</p>
        </div>
    );
}
export default WorkList;
