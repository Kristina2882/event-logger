import React from "react";
import Event from "./Event";
import PropTypes from "prop-types";

function EventsList(props) {
    return (
        <React.Fragment>
         {props.eventList.map((event) => {
            <Event
            name = {event.name} 
            description={event.description}
            key = {event.id}
            id = {event.id}/>
         })}
        </React.Fragment>
    );
}

EventsList.propTypes = {
    eventList: PropTypes.array
}

export default EventsList;