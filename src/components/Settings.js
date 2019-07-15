import React, { useState } from 'react';

import { SETTINGS_ICON } from '../constants/icons'

export default ({ setButtonsColor }) => {
  const [visible, setVisible] = useState(false);
  const colors = ['green', 'orange', 'blue', 'purple' ];

  const handleClick = (e) => {
    setButtonsColor(e.target.getAttribute('color'));
  };

  return <div className='settings' onClick={() => setVisible(!visible)}>
    {visible && <div className="dropdown">
      SITE STYLE
      <div className="dropdown-content">
        {colors.map(item => <div className='colors' style={{ backgroundColor: `${item}` }} color={item} onClick={handleClick} />)}
      </div>
    </div>}
    <img alt='' src={SETTINGS_ICON} />
  </div>;
};
