import React from 'react';

import { FILTERS } from '../constants/filters';
import Select from './partials/Select';

export default ({ filters, setFilters, handleSearch }) => {
  const handleChange = (e) => {
    setFilters({
      ...filters,
      keyword: e.target.value,
    });
  };

  return <div className='searchBox'>
    {FILTERS.map(item => <Select key={item.type} filters={filters} setFilters={setFilters} {...item} />)}
    <input placeholder='Type your key word' onChange={handleChange} />
    <button onClick={handleSearch}>SEARCH</button>
  </div>;
}
