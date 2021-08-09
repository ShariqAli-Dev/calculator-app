import React from "react";
import { Button as UIBUtton } from "@material-ui/core";
import "../styles/Button.css";
class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "shariq",
    };
  }

  render() {
    return (
      <>
        <UIBUtton elevation={10} fullWidth={true} size="small" variant="contained" color="white">
          <h2>{this.props.button.title}</h2>
        </UIBUtton>
      </>
    );
  }
}

export default Button;
