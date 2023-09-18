import React from "react";
import Event from "./Event";
import PropTypes from "prop-types";

function EventsList(props) {
    return (
        <React.Fragment>
         {Object.values(props.eventList).map((event) => 
            <Event
            whenEventClicked= {props.onEventSelection}
            name = {event.name}
            description={event.description}
            key = {event.id}
            id = {event.id}
            numberOfEvent={event.numberOfEvent}/>
         )}
        </React.Fragment>
    );
}

EventsList.propTypes = {
    eventList: PropTypes.object,
    onEventSelection: PropTypes.func
}

export default EventsList;