import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditEventForm(props) {
     
    function EditEventFormSubmissionHandler(event) {
        event.preventDefault();
        props.onEditEvent(
            {
                name: event.target.name.value, 
                description: event.target.description.value,
                id: props.event.id, 
                numberOfEvent: props.event.numberOfEvent
            }
        )

    }

    return(
        <React.Fragment>
        <ReusableForm
        formSubmissionHandler={EditEventFormSubmissionHandler}
        buttonText="Update!"/>
        </React.Fragment>
    );
}

EditEventForm.propTypes = {
onEditEvent: PropTypes.func
}

export default EditEventForm;