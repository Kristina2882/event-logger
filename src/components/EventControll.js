import React from "react";
import EventsList from "./EventsList";
import NewEventForm from "./NewEventForm";
import EventDetail from "./EventDetail";
import EditEventForm from "./EditEventForm";
import Counter from "./Counter";
import { Container, Col, Row } from "react-bootstrap";
import {connect} from 'react-redux';

class EventControll extends React.Component {
    constructor(props)  {
      super(props);
      this.state = {
        newEventFormVisible: false,
        selectedEvent: null, 
        editing: false,
        eventNumberCounter: 0
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
        const {dispatch} = this.props;
        const {name, description, numberOfEvent, id} = newEvent;
        const action = {
         type: 'ADD_EVENT',
         name: name,
         description: description,
         numberOfEvent: numberOfEvent,
         id: id
        }
        dispatch(action);
        this.setState({
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
        let updatedEventNumberCounter = this.state.eventNumberCounter;
        // let numberToDelete = this.state.mainEventList.filter(event => event.id === id)[0].numberOfEvent;
        // updatedEventNumberCounter -= numberToDelete;
        const {dispatch} = this.props;
        const action = {
          type: 'DELETE_EVENT',
          id: id
        }
        dispatch(action);
        this.setState({
          selectedEvent: null,
          eventNumberCounter: updatedEventNumberCounter
        });
      }

      handleEditClick = () => {
        this.setState({
         editing: true
        });
      }

      handleEditEvent = (editedEvent) => {
        const {dispatch} = this.props;
        const {name, description, numberOfEvent, id} = editedEvent;
        const action = {
          type: 'ADD_EVENT',
          name: name,
          description: description,
          numberOfEvent: numberOfEvent,
          id: id
        }
        dispatch(action);
        this.setState({
          selectedEvent:null,
          editing: false
        })
      }

      handlePlusClick = () => {
         let eventCounter = this.state.selectedEvent.numberOfEvent;
         eventCounter++;
         let updatedEvent = this.state.selectedEvent;
         updatedEvent.numberOfEvent = eventCounter;
         let updatedMainEventList = this.state.mainEventList.filter(event => event.id !== this.state.selectedEvent.id).concat(updatedEvent);
         let updatedEventNumberCounter = this.state.eventNumberCounter;
         updatedEventNumberCounter++;
        this.setState({
          selectedEvent: updatedEvent,
          mainEventList: updatedMainEventList,
          eventNumberCounter: updatedEventNumberCounter
        });
      }

      handleMinusClick = () => {
        let eventCounter = this.state.selectedEvent.numberOfEvent;
        eventCounter--;
        if (eventCounter < 0) {
          this.setState({
          selectedEvent: null
          });
        }
        else {
        let updatedEvent = this.state.selectedEvent;
        updatedEvent.numberOfEvent = eventCounter;
        let updatedMainEventList = this.state.mainEventList.filter(event => event.id !== this.state.selectedEvent.id).concat(updatedEvent);
        let updatedEventNumberCounter = this.state.eventNumberCounter;
         updatedEventNumberCounter--;
       this.setState({
         selectedEvent: updatedEvent,
         mainEventList: updatedMainEventList,
         eventNumberCounter: updatedEventNumberCounter
       });
      }
     }

    render() {
     let currentlyVisible = null;
     let buttonText = "";

     if (this.state.editing) {
       currentlyVisible = <EditEventForm event={this.state.selectedEvent} onEditEvent={this.handleEditEvent}/>
       buttonText="To events list";
     }

     else if (this.state.selectedEvent != null) {
      currentlyVisible = <EventDetail event = {this.state.selectedEvent} 
      onClickDelete = {this.handleDeleteClick} 
      onEditClick = {this.handleEditClick} 
      onPlusClick = {this.handlePlusClick}
      onMinusClick = {this.handleMinusClick}/>;
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
          <Container>
            <Row>
           <Col>
            {currentlyVisible}
            <button onClick={this.handleClick}>{buttonText}</button>
            </Col>
            <Col> <Counter eventsNumber={this.state.eventNumberCounter}/></Col>
            </Row>
            </Container>
         </React.Fragment>
     );
    }
}

EventControll = connect()(EventControll);

export default EventControll;