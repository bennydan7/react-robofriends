import React from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
// import { robots } from "./robot";
import "./App.css";
import Scroll from "../Components/Scroll";

class App extends React.Component {
  constructor() {
    super();
    this.state = { robots: [], searchfields: "" };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfields: event.target.value });
  };

  render() {
    const { robots, searchfields } = this.state;
    const filteredRobots = robots.filter((robots) => {
      return robots.name.toLowerCase().includes(searchfields.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
