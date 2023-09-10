import React from "react";
import EventsList from "./EventsList";
import NewEventForm from "./NewEventForm";

class EventControll extends React.Component {
    constructor(props)  {
      super(props);
      this.state = {
        newEventFormVisible: false,
        mainEventList: []
      };
    }

    handleClick = () => {
  this.setState(prevState => ({
    newEventFormVisible: !prevState.newEventFormVisible
  }));
    }

    handleAddEvent = (newEvent) =>    {
        const newEventList = this.state.mainEventList.concat(newEvent);
        this.setState({
           mainEventList: newEventList,
           newEventFormVisible: false
        })
      }
    

    render() {
     let currentlyVisible = null;
     let buttonText = "";

     if (this.state.newEventFormVisible) {
      currentlyVisible = <NewEventForm onNewEventCreation={this.handleAddEvent}/>;
      buttonText = "To events list";
     }
     else {
      currentlyVisible = <EventsList eventList = {this.state.mainEventList}/>
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