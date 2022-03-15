// 로컬 스토리지 관련 모듈
function getDataFromStorage({ key }) {
  const data = localStorage.getItem(key);

  if (data) return data;
  return null;
}

function setDataToStorage({ key, value }) {
  localStorage.setItem(key, value);
}
