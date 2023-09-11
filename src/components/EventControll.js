import React from "react";
import EventsList from "./EventsList";
import NewEventForm from "./NewEventForm";
import EventDetail from "./EventDetail";

class EventControll extends React.Component {
    constructor(props)  {
      super(props);
      this.state = {
        newEventFormVisible: false,
        mainEventList: [], 
        selectedEvent: null
      };
    }

    handleClick = () => {
      if (this.state.selectedEvent != null) {
         this.setState({
          newEventFormVisible: false,
          selectedEvent: null
         });
      }
 else  
 {this.setState(prevState => ({
    newEventFormVisible: !prevState.newEventFormVisible
  }));
}
    }

    handleAddEvent = (newEvent) =>    {
        const newEventList = this.state.mainEventList.concat(newEvent);
        this.setState({
           mainEventList: newEventList,
           newEventFormVisible: false, 
           selectedEvent: null
        });
      }
    
      handleEventSelection = (id) => {
        const newSelectedEvent = this.state.mainEventList.filter(event => event.id === id)[0];
        this.setState({
         selectedEvent: newSelectedEvent
        });
      }

    render() {
     let currentlyVisible = null;
     let buttonText = "";

     if (this.state.selectedEvent != null) {
      currentlyVisible = <EventDetail event = {this.state.selectedEvent}/>;
      buttonText = "To events list";
     }

     else if (this.state.newEventFormVisible) {
      currentlyVisible = <NewEventForm onNewEventCreation={this.handleAddEvent}/>;
      buttonText = "To events list";
     }
     else {
      currentlyVisible = <EventsList eventList = {this.state.mainEventList} onEventSelection= {this.handleEventSelection}/>
      buttonText="Add event";
     }


     return (
         <React.Fragment>
            {currentlyVisible}
            <button onClick={this.handleClick}>{buttonText}</button>
         </React.Fragment>
     );
    }
}

export default EventControll;