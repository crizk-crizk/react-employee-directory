const Search = ({ handleClick, searchWord, setSearchWord, handleChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for Employee"
        value={searchWord}
        onChange={handleChange}
      />
      <button onClick={handleClick}>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default Search;
