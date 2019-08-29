import React, { useState } from 'react'
import UserDisplay from './UserDisplay';

const SearchBar = () => {
  const [search, setSearch] = useState({ text: '' });
  const enterKey = 13;

  function searchHandler(e) {
    e.preventDefault();
    if (e.keyCode == enterKey) {
      searchTags();
    } else {
      const searchInput = e.target.value.trim()
      setSearch(searchInput);
    }
  }

  // searchQuery creates 
  // const users = [{
  //   Username: 'string',
  //   Bio: 'string',
  //   Zipcode: 10009,
  //   Password: 'string',
  //   Email: 'string',
  //   Tags: ['react', 'node.js']
  // }]

  function searchTags() {
    const usersThatMatchSearch = users.filter(user => user.Tags.includes(searchInput))
    return usersThatMatchSearch;
    // need to re-render the users that match search
  }

return (
  <div>
    <form>
      <input
        type="text"
        className="search"
        value={search.text}
        placeholder="Search through tags..."
        onChange={e => searchHandler(e)}
        value={search}
      />
    </form>
  </div>
)
};

export default SearchBar; 