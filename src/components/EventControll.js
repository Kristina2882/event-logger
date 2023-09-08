import React from "react";
import EventsList from "./EventsList";

class EventControll extends React.Component {
    constructor(props)  {
      super(props);
      this.state = {};
    }

    render() {
     let currentlyVisible = <EventsList/>;

     return (
         <React.Fragment>
            {currentlyVisible}
            <button>Important</button>
         </React.Fragment>
     );
    }
}

export default EventControll;