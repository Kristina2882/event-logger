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
        <button onClick={() => props.onEditClick(event)}>Edit</button> <button onClick={() => props.onClickDelete(event.id)}>Delete</button>
        </React.Fragment>

    );
}

EventDetail.propTypes = {
    event: PropTypes.object,
    onClickDelete: PropTypes.func,
    onEditClick: PropTypes.func
}

export default EventDetail;