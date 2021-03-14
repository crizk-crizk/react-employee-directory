import "./Search.css";

const Search = ({ searchWord, setSearchWord, handleChange }) => {
  return (
    <div className="searchContainer">
      <div id="header">
        <div className="apptitle">
          <span className="title"> Employee Directory</span>
          <span className="instructions">
            Search an employee by typing the employee's name in the search bar
            below <br></br>
            Sort in alphabetical order by clicking on the either Name, Surname,
            or Email
          </span>
        </div>
      </div>
      <div className="bardiv">
        <input
          className="searchbar"
          type="text"
          placeholder="Enter employee's name"
          value={searchWord}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Search;
