import React, { Fragment, useState } from 'react';

import { PLUS_ICON, MINUS_ICON } from '../../constants/icons';
import { CATEGORIES, EMPLOYMENT_TYPES, LOCATIONS } from '../../constants/filters';
import { getItemFromLocalstorage, setItemToLocalstorage } from "../../utils/local-storage-helpers";
import Checkbox from '../partials/Checkbox';

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

const mockEmploymentTypes = [
    {
        id: 'fullTime',
        name: 'Full Time',
    },
    {
        id: 'partTime',
        name: 'Part Time',
    },
    {
        id: 'contractor',
        name: 'Contractor',
    },
    {
        id: 'intern',
        name: 'Intern',
    },
    {
        id: 'seasonalTemp',
        name: 'Seasonal/Temp',
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

export default ({ title, type, advancedFilters, setAdvancedFilters }) => {
  const [visible, setVisible] = useState(false);
  let filter = getItemFromLocalstorage(type);

  const handleClick = () => {
    setVisible(!visible);
    if (!filter) {
      // TODO Get data from the API
      switch (type) {
        case CATEGORIES: filter = mockCategories; break;
        case EMPLOYMENT_TYPES: filter = mockEmploymentTypes; break;
        case LOCATIONS: filter =  mockLocations; break;
        default: break;
      }
      setItemToLocalstorage(type, filter);
    }
  };

  const onChange = (value) => {
    setAdvancedFilters({
      ...advancedFilters,
      [type]: value,
    });
  };
  const noData = <p>No {title} Available</p>;
  const data = (filter || []).map(item => <Checkbox key={item.id} filter={advancedFilters[type]} onChange={onChange} {...item} />);

  return <Fragment>
    <div className='title'>
      <span>{title}</span>
      <img alt='' src={visible ? PLUS_ICON : MINUS_ICON} width='20px' onClick={handleClick} />
    </div>
    {visible && <div className='filter'>{filter.length ? data : noData}</div>}
  </Fragment>;
}
