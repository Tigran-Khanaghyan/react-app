import React from "react";
import withStyles from "./withStyles";

const DynamicButton = (props) => {
    return <button style={props.styles}>Next</button>
}

export default withStyles(DynamicButton)