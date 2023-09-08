import React from "react";
//import EventsList from "./EventsList";
import NewEventForm from "./NewEventForm";

class EventControll extends React.Component {
    constructor(props)  {
      super(props);
      this.state = {};
    }

    render() {
     let currentlyVisible = <NewEventForm/>;

     return (
         <React.Fragment>
            {currentlyVisible}
            <button>Important</button>
         </React.Fragment>
     );
    }
}

export default EventControll;