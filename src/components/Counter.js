import React from "react";
import PropTypes from "prop-types";

function Counter(props) {
    return (
      <h6>Events: {props.eventsNumber}</h6>
    );
}

Counter.propTypes = {
    eventsNumber: PropTypes.number
}

export default Counter;