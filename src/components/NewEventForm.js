import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types"; 
import {v4} from "uuid";

function NewEventForm(props) {

    function newFormSubmissionHandler(event) {
        event.preventDefault();
        props.onNewEventCreation({
            name: event.target.name.value,
            description: event.target.description.value,
            numberOfEvent: 0,
            id: v4()
        });
    }
    return (  
        <React.Fragment>
            <ReusableForm
            formSubmissionHandler={newFormSubmissionHandler}
            buttonText="Save"
            />
        </React.Fragment>
    );
}


NewEventForm.propTypes = {
    onNewEventCreation: PropTypes.func
}

export default NewEventForm;