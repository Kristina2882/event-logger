import React from "react";
import PropTypes from "prop-types";

function Event(props) {
return (
    <React.Fragment>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <hr />
    </React.Fragment>

);
}

Event.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string
}

export default Event;