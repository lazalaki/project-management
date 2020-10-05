export const getFromStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const storeInStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeFromStorage = () => {
  localStorage.clear();
};
