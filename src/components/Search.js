import Jumbotron from 'react-bootstrap/Jumbotron'

const Search = ({ searchWord, setSearchWord, handleChange }) => {
  return (
    <Jumbotron fluid>
      <input
        type="text"
        placeholder="Search for Employee"
        value={searchWord}
        onChange={handleChange}
      />
    </Jumbotron>
  );
};

export default Search;
