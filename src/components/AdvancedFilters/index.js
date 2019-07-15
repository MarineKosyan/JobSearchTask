import React from 'react';

import { ADVANCED_FILTERS } from '../../constants/filters';
import Filter from './Filter';

export default ({ advancedFilters, setAdvancedFilters }) => <div className='filters'>
  {ADVANCED_FILTERS.map(item => <Filter
    key={item.type}
    advancedFilters={advancedFilters}
    setAdvancedFilters={setAdvancedFilters}
    {...item}
  />)}
</div>;
