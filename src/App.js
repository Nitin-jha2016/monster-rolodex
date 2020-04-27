// https://jsonplaceholder.typicode.com/users

import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/cardlist/card-list.component";
import { SearchBox } from "./components/searchbar/search-bar.component";
export class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log(" filteredMonsters ", filteredMonsters);
    return (
      <div className="App">
        <h1>Search Monster</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />
        {filteredMonsters.length > 0 ? (
          <CardList monsters={filteredMonsters} />
        ) : (
          <div>
            <h2>No Result Found!!</h2>
          </div>
        )}
      </div>
    );
  }
}

export default App;
