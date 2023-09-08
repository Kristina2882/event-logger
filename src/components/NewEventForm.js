import React from "react";
import ReusableForm from "./ReusableForm";

function NewEventForm() {

    function newFormSubmissionHandler(event) {
        event.preventDefault();
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

export default NewEventForm;