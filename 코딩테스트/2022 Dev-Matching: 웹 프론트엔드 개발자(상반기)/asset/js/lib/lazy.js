export const debounce = (callback, delay) => {
  let timer = null;

  return (e) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(callback, delay, e);
  };
};
