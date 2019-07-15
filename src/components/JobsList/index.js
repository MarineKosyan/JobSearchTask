import React from 'react';

import Item from './Item';

export default ({ jobs, color }) => <div className='jobs'>
  {jobs.map(item => <Item key={item.id} color={color} {...item} />)}
</div>;
