export const getItemFromLocalstorage = name => JSON.parse(localStorage.getItem(name));

export const setItemToLocalstorage = (name, data) => localStorage.setItem(name, JSON.stringify(data));

export const removeItemFromLocalstorage = name => localStorage.removeItem(name);