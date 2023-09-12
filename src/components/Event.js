import React from "react";
import PropTypes from "prop-types";

function Event(props) {
return (
    <React.Fragment>
        <div onClick={() => props.whenEventClicked(props.id)}>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <p>Occurence: {props.numberOfEvent}</p>
        <hr />
        </div>
    </React.Fragment>

);
}

Event.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    numberOfEvent: PropTypes.number,
    whenEventClicked: PropTypes.func,
    id: PropTypes.string
}

export default Event;