import React from 'react';
import './TodoSearch.css'

function TodoSearch() {
    const [search,setSearch] = React.useState('');
  
    const onSearchChange = (event)=> {
      console.log(event.target.value);
      //cambia el estado
      setSearch(event.target.value);
    }

    return[
      <input 
        className='search' 
        placeholder="Enter the TODO to search"
        value={search}
        onChange={onSearchChange}
      />,
      <p>{search}</p>
    ];
}

export {TodoSearch};