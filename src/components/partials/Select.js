import React, { useState } from 'react';

import { CATEGORIES, LOCATIONS } from '../../constants/filters';
import { getItemFromLocalstorage, setItemToLocalstorage } from '../../utils/local-storage-helpers';

const mockCategories = [
  {
      id: 'softwareDevelopment',
      name: 'Software Development',
  },
  {
      id: 'marketing',
      name: 'Marketing',
  },
  {
      id: 'financeManagment',
      name: 'Finance Managment',
  },
  {
      id: 'economics',
      name: 'Economics',
  },
  {
      id: 'artDesign',
      name: 'Art/Design',
  }
];

const mockLocations = [
  {
      id: 'yerevanArmenia',
      name: 'Yerevan, Armenia',
  },
  {
      id: 'sanFranciscoCAUS',
      name: 'San Francisco, CA, US',
  },
  {
      id: 'viennaAustralia',
      name: 'Vienna, Australia',
  },
  {
      id: 'helsinkiFinland',
      name: 'Helsinki, Finland',
  },
];

export default ({ type, title, filters, setFilters }) => {
  const [data, setData] = useState(getItemFromLocalstorage(type));
  const [selectedValue, setSelectedValue] = useState('default');

  const handleClick = () => {
    let filter;
    if (!data) {
        // TODO Get data from the API
      switch (type) {
        case CATEGORIES: filter = mockCategories; break;
        case LOCATIONS: filter =  mockLocations; break;
        default: break;
      }
      setData(filter);
      setItemToLocalstorage(type, filter);
    }
  };

  const handleChange = ({ target: { value }}) => {
    setSelectedValue(value);
    setFilters({
      ...filters,
      [type]: value,
    });
  };

  return <select value={selectedValue} onClick={handleClick} onChange={handleChange}>
    <option value='default' disabled>{title}</option>
    {(data || []).map(({ id, name }) => <option key={id} value={id}>{name}</option> )}
  </select>;
}
