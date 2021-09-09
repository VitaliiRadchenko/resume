import React from "react";

function EducationBlock({ props }) {
    return (
        <div className='edu-block'>
            <h3>{props.institut}</h3>
            <h4>{props.speciality}</h4>
            <h5>{props.date}</h5>
            <p>{props.text}</p>
        </div>
    );
}
export default EducationBlock;
