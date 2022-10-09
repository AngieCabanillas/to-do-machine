import React from 'react';
import './TodoSearch.css'

function TodoSearch() {
    const onSearchChange = (event)=> {
      console.log(event.target.value);
    }

    return(
      <input 
        className='search' 
        placeholder="Enter the TODO to search"
        onChange={onSearchChange}
      />
    );
}

export {TodoSearch};