const Search = ({ searchWord, setSearchWord, handleChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for Employee"
        value={searchWord}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
