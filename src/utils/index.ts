export const saveToLocalStorageArray = (key: string, value: string): void => {
  const availableOptions = JSON.parse(localStorage.getItem(key) || "[]");

  if (!availableOptions.find((el: string) => el === value)) {
    localStorage.setItem(key, JSON.stringify([...availableOptions, value]));
  }
};
