import React from 'react';

import { LOCATION_ICON, EMPLOYMENT_TYPE_ICON, BOOKMARK_ICON, APPLY_ICON } from '../../constants/icons'

export default ({ title, src, location, employmentType, bookmarked, color }) => <div className='job'>
  <div className='item'>
    <img alt='' src={src}  className='logo' />
    <h3>{title}</h3>
    <img alt='' src={LOCATION_ICON} width='25px' className='middle' />
    <span>{location}</span>
    <img alt='' src={EMPLOYMENT_TYPE_ICON} width='20px' className='middle' />
    <span>{employmentType}</span>
  </div>
  <div className='buttons'>
    <button id='btnBookmark' disabled={bookmarked}>
      <img alt='' id='bookmark' src={BOOKMARK_ICON} />
      {bookmarked ? 'Bookmarked' : 'Bookmark'}
    </button>
    <button id='btnApply' style={{ backgroundColor: `${color}` }}>
      <img alt='' id='apply' src={APPLY_ICON} />
      Apply For This Job
    </button>
  </div>
</div>;
