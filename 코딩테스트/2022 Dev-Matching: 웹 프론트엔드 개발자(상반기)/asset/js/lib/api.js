export const API_END_POINT = 'https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev';

const cache = {};

// 재사용성을 고려하여 fetch를 사용하는 함수 별도 정의
const request = async (url) => {
  if (cache[url]) {
    return cache[url];
  }

  const res = await fetch(url);

  if (res.ok) {
    const json = await res.json();
    // 캐시는 어떻게 만료시킬 것인지도 고민해야 함
    cache[url] = json;
    return json;
  }

  throw new Error('요청 실패');
};

export const fetchLanguages = (keyword) => request(`${API_END_POINT}/languages?keyword=${keyword}`);
