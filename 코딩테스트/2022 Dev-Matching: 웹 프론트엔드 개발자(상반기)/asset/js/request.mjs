// prettier-ignore
const baseURL = 'https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev';
const cache = {};

export const requestAPI = async ({ path, query }) => {
  if (cache[query]) return cache[query];
  else {
    const response = await fetch(`${baseURL}${path}?keyword=${query}`);
    const languages = await response.json();
    cache[query] = languages;
    return languages;
  }
};
