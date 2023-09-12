import React from "react";
import EventsList from "./EventsList";
import NewEventForm from "./NewEventForm";
import EventDetail from "./EventDetail";
import EditEventForm from "./EditEventForm";

class EventControll extends React.Component {
    constructor(props)  {
      super(props);
      this.state = {
        newEventFormVisible: false,
        mainEventList: [], 
        selectedEvent: null, 
        editing: false
      };
    }

    handleClick = () => {
      if (this.state.selectedEvent != null) {
         this.setState({
          newEventFormVisible: false,
          selectedEvent: null,
          editing: false
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

      handleDeleteClick = (id) => {
        const newMainEventList = this.state.mainEventList.filter(event => event.id !== id);
        this.setState({
          selectedEvent: null,
          mainEventList: newMainEventList
        });
      }

      handleEditClick = () => {
        this.setState({
         editing: true
        });
      }

      handleEditEvent = (editedEvent) => {
        const newMainEventList = this.state.mainEventList.filter(event => event.id !== this.state.selectedEvent.id).concat(editedEvent);
        this.setState({
          selectedEvent:null,
          editing: false,
          mainEventList: newMainEventList
        })
      }

    render() {
     let currentlyVisible = null;
     let buttonText = "";

     if (this.state.editing) {
       currentlyVisible = <EditEventForm event={this.state.selectedEvent} onEditEvent={this.handleEditEvent}/>
       buttonText="To events list";
     }

     else if (this.state.selectedEvent != null) {
      currentlyVisible = <EventDetail event = {this.state.selectedEvent} onClickDelete = {this.handleDeleteClick} onEditClick = {this.handleEditClick}/>;
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