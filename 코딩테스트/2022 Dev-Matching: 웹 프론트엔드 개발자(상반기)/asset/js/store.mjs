// 로컬 스토리지 관련 모듈
export function getDataFromStorage({ key }) {
  const data = localStorage.getItem(key);

  if (data) return data;
  return null;
}

export function setDataToStorage({ key, value }) {
  localStorage.setItem(key, value);
}
