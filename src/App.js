import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robot";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { robots: [], searchfields: "" };
  }

  onSearchChange = (event) => {
    this.setState({ searchfields: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfields.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.searchChnge} />

        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
