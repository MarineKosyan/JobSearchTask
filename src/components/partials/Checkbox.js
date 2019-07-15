import React from 'react';

export default ({ id, name, filter = [], onChange }) => {
  const handleChange = (e) => {
    const { checked, name } = e.target;
    onChange(name);
    if (checked) {
      onChange([...filter, name]);
    } else {
      const tmpFilter = [...filter];
      tmpFilter.splice(tmpFilter.indexOf(name), 1);
      onChange(tmpFilter);
    }
  };

  return <label><input type='checkbox' name={id} onChange={handleChange} />{name}</label>;
}
