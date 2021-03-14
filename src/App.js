// eslint-disable-next-line
// import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import EmployeeTable from "./components/EmployeeTable.js";
import axios from "axios";
import Search from "./components/Search";
import sortBy from "lodash/sortBy";
import "bootstrap/dist/css/bootstrap.min.css";
//setEmployeeList function that assigns value
//employeeList contains all the data after the data is assigned
function App() {
  const [employeeList, setEmployeeList] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=20&nat=us,gb,ca,au")
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

  const handleChange = (event) => {
    const inputSearch = event.target.value;
    setSearchWord(inputSearch);
    let results = employeeList.filter((employee) => {
      const firstN = employee.name.first.toLowerCase();
      return firstN.includes(inputSearch.toLowerCase());
    });
    setFilteredEmployees(results);
  };

  const handleSort = (columnName) => {
    const sortedEmployees = sortBy(filteredEmployees, [columnName]);
    setFilteredEmployees(sortedEmployees);
  };

  return (
    <div className="App">
      <Search
        handleChange={handleChange}
        searchWord={searchWord}
        setSearchWord={setSearchWord}
      />
      <EmployeeTable handleSort={handleSort} employeeList={filteredEmployees} />
    </div>
  );
}

export default App;
