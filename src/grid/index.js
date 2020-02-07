import React from "react";
import GridComponent from "../ui/grid";
import createGrid from "../utils/create-grid";
import updateGrid from "../utils/update-grid";

class GridContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: createGrid(10, 10, 10)
    };
  }
  render() {
    return (
      <GridComponent
        grid={this.state.grid}
        onClick={this.handleClick.bind(this)}
      />
    );
  }
  handleClick(collY, collX) {
    this.setState({
      grid: updateGrid(collY, collX, this.state.grid)
    });
  }
}

export default GridContainer;
