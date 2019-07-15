import React, { Fragment, useState } from 'react';

import SearchBox from './SearchBox';
import Filters from './AdvancedFilters/index';
import JobsList from './JobsList';
import Header from './Header';

const jobs = [
  {
    id: 1,
    src: 'https://d1qb2nb5cznatu.cloudfront.net/startups/i/420277-ad10836bfb5b321c0f6a2290f77614fc-medium_jpg.jpg?buster=1512471852',
    title: 'Senior Web Developer',
    location: 'Yerevan, Armenia',
    employmentType: 'Full Time',
    bookmarked: false,
  },
  {
    id: 2,
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/1200px-Dell_logo_2016.svg.png',
    title: 'Software Engineer',
    location: 'San Francisco, CA, US',
    employmentType: 'Full Time',
    bookmarked: false,
  },
  {
    id: 3,
    src: 'https://d1qb2nb5cznatu.cloudfront.net/startups/i/420277-ad10836bfb5b321c0f6a2290f77614fc-medium_jpg.jpg?buster=1512471852',
    title: 'Senior Full-stack developer',
    location: 'Yerevan, Armenia',
    employmentType: 'Part Time',
    bookmarked: false,
  },
  {
    id: 4,
    src: 'https://d1qb2nb5cznatu.cloudfront.net/startups/i/420277-ad10836bfb5b321c0f6a2290f77614fc-medium_jpg.jpg?buster=1512471852',
    title: 'Junior QA Engineer',
    location: 'Yerevan, Armenia',
    employmentType: 'Full Time',
    bookmarked: true,
  },
  {
    id: 5,
    src: 'https://f00ij2o5t0w3uu7f93ropi5q-wpengine.netdna-ssl.com/wp-content/uploads/2014/11/IBM.jpg',
    title: 'CTO',
    location: 'San Francisco, CA, US',
    employmentType: 'Full Time',
    bookmarked: false,
  }
];

export default () => {
  // TODO Get jobs data from the API
  const [filters, setFilters] = useState({});
  const [color, setColor] = useState('#87bf46');
  const [advancedFilters, setAdvancedFilters] = useState({});

  const handleSearch = () => {
    console.log(filters, advancedFilters);
  };

  const setButtonsColor = (color) => {
    setColor(color);
  };

  return <Fragment>
    <Header setButtonsColor={setButtonsColor} />
    <div className='main'>
      <SearchBox filters={filters} setFilters={setFilters} handleSearch={handleSearch} />
      <Filters advancedFilters={advancedFilters} setAdvancedFilters={setAdvancedFilters} />
      <JobsList jobs={jobs} color={color} />
    </div>
  </Fragment>;
}
