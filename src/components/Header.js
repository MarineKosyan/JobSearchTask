import React from 'react';

import Settings from './Settings';

export default ({ setButtonsColor }) => <div>
  <div className='breadcrumb'>
    <h4>Home >> Engineer/Architects</h4>
    <h1>Software Engineer</h1>
  </div>
  <Settings setButtonsColor={setButtonsColor} />
</div>
