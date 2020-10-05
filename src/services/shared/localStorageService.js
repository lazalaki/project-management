export const storeInStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromStorage = (key) => {
  JSON.parse(localStorage.getItem(key));
};

export const removeFromStorage = () => {
  localStorage.clear();
};
