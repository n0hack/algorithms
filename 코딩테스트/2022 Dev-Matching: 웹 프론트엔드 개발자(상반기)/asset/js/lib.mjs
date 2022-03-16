// API 최적화를 위해 Input에 디바운스 적용
export const debounce = (callback, delay) => {
  let timer = null;

  return (e) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(callback, delay, e);
  };
};
