import React from "react";
import Event from "./Event";

function EventsList() {
    return (
        <React.Fragment>
            <Event
            name="Coding"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet diam in nisi faucibus viverra.  "
            />
            <Event
            name="Cooking"
            description="Sed efficitur tincidunt leo, non commodo erat feugiat vel."
            />
        </React.Fragment>
    );
}

export default EventsList;