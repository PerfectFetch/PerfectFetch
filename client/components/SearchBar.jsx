import React, { useState } from 'react'

const SearchBar = () => {
  const [search, setSearch] = useState('');

  return (
    <div>
      <form>
        <input
          name='search'
          type="text"
          className="search"
          placeholder="Search through tags..."
          onChange={event => setSearch(event.target.data)}
          value={search}
        />
      </form>
    </div>
  )
}; 

export default SearchBar; 