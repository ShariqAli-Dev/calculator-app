import React from "react";
import buttonData from "./buttonData";
import Button from "./components/Button";
import { Grid, TextField } from "@material-ui/core";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonData: buttonData,
    };
  }

  //TODO: Assign the different color themes to state. So 3 themes could be 1 2 or 3. Depending on the number, the state will be set to theme white, blue, or black. And that theme wil be passed on to className for each component

  render() {
    return (
      <>
        <div className="container">
          {/* calculator top with calc title and theme switcher */}
          {/* calculator form */}
          {/* buttons are within a div */}
          {/* buttons */}
          {/* create an array of objects, which represent the buttons and their functions. Render buttons inside of the forms component */}
          <TextField fullWidth variant="outlined" textAlign="right" />

          <Grid container justifyContent="space-around" spacing={3}>
            {this.state.buttonData.map((button, index) => {
              return (
                <>
                  <Grid key={index} item xs={3} sm={3} md={3} lg={3}>
                    <Button button={button} />
                  </Grid>
                </>
              );
            })}
          </Grid>
        </div>
      </>
    );
  }
}

export default App;
