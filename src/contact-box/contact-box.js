import React from "react";

function ContactBox({ props }) {
    return (
        <li>
            <span>{props.connection}</span>
            &nbsp;{props.data}
        </li>
    );
}
export default ContactBox;
