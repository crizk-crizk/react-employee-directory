// eslint-disable-next-line
import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import Table from "./components/Table.js";
import axios from "axios";
import Search from "./components/Search";
//setEmployeeList function that assigns value
//employeeList contains all the data after the data is assigned
function App() {
  const [employeeList, setEmployeeList] = useState([]);

  const [searchWord, setSearchWord] = useState("");

  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=10")
      .then((response) => {
        // handle success
        setEmployeeList(response.data.results);
        setFilteredEmployees(response.data.results);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);
  const handleClick = (event) => {
    event.preventDefault();
    let results = employeeList.filter((employee) => {
      const firstN = employee.name.first.toLowerCase();
      return firstN.includes(searchWord.toLowerCase());
      // (searchWord===employee.name.first || searchWord===employee.name.last || searchWord===employee.email);
    });
    setFilteredEmployees(results);
  };

  const handleChange = (event) => {
    setSearchWord(event.target.value);
    let results = employeeList.filter((employee) => {
      const firstN = employee.name.first.toLowerCase();
      return firstN.includes(searchWord.toLowerCase());
    });
    setFilteredEmployees(results);
  };

  return (
    <div className="App">
      <Search
        handleChange={handleChange}
        handleClick={handleClick}
        searchWord={searchWord}
        setSearchWord={setSearchWord}
      />
      <Table employeeList={filteredEmployees} />
    </div>
  );
}

export default App;
