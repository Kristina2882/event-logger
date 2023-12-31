import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
    return (
      <React.Fragment>
        <form onSubmit={props.formSubmissionHandler}>
            <input
            type="text"
            name="name"
            placeholder="Event name"
             />

           <input
            type="text"
            name="description"
            placeholder="Short description"
             />
          <button type="submit">{props.buttonText}</button>
        </form>
      </React.Fragment>
    );
} 

ReusableForm.propTypes = {
    formSubmissionHandler: PropTypes.func,
    buttonText: PropTypes.string
}

export default ReusableForm;