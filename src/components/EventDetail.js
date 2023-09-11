import React from "react";
import PropTypes from "prop-types";

function EventDetail(props) {
    const {event} = props;
    return (
        <React.Fragment>
         <h4>{event.name}</h4>
        <p>{event.description}</p>
        <p>Occurence: {event.numberOfEvent}</p>
        <button>+</button>  <button>-</button>
        <hr />
        <button>Edit</button> <button>Delete</button>
        </React.Fragment>

    );
}

EventDetail.propTypes = {
    event: PropTypes.object
}

export default EventDetail;