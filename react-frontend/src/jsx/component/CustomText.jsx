import React from "react";
import { Typography,TextField } from "@mui/material";
import Grid from "@mui/material/Grid";

class CustomText extends React.Component {
  render() {
    return (
              <Typography
                onClick={this.props.onClickText}
                onMouseOver={this.props.onMouseHoverText}
                onMouseOut={this.props.onMouseOutText}
                dataid={this.props.dataid}
                inline
              >
                {this.props.data}
              </Typography>
    );
  }
}

export default CustomText;
