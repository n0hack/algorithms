// DOM
const elApp = document.querySelector('.App');
const elSearchForm = document.querySelector('.SearchInput');
const elSearchInput = elSearchForm.querySelector('input');
const elSelectedLanguageList = document.querySelector('.SelectedLanguage ul');
let elSuggestion = document.querySelector('.Suggestion');

let selectedList = [];
let suggestionIndex = 0;

// -------- 이벤트 리스너
/**
 * SearchForm 이벤트 리스너 (submit)
 * 폼 전송 시 새로고침 되는 것 방지
 */
const handleSearchFormSubmit = (e) => {
  e.preventDefault();
};

/**
 * SearchForm 이벤트 리스너 (keydown)
 * 키 입력을 처리하기 위한 용도
 */
const handleSearchFormKeyDown = (e) => {
  // 입력값이 없는 경우 함수 종료
  if (elSearchInput.value === 0) return;

  // 키보드 입력 처리
  if (e.key === 'Enter') {
    const items = elSuggestion.querySelectorAll('li');
    makeSelectedList({ selectItem: items[suggestionIndex].innerText });
  } else if (e.key === 'ArrowUp') changeSelectItemIndex(-1);
  else if (e.key === 'ArrowDown') changeSelectItemIndex(1);
};

/**
 * SearchInput 이벤트 리스너 (input)
 * 검색어 입력을 처리하기 위한 용도
 */
const handleSearchInput = async (e) => {
  const keyword = e.target.value;
  suggestionIndex = 0;

  // 입력값이 없는 경우 요청을 보내지 않음
  if (keyword !== '') {
    const languages = await requestAPI({ path: '/languages', query: keyword });
    makeSuggestion(languages, keyword);
  } else {
    clearSuggestion();
  }
};

/**
 * 검색 결과 목록의 아이템을 클릭했을 때 처리하기 위한 용도
 */
const handleSuggestionList = (event) => {
  if (!event.target.innerText) return;
  makeSelectedList({ selectItem: event.target.innerText });
};

// -------- 기타 함수
/**
 * 검색 결과 목록 아이템의 하이라이트 변경 (현재 선택 중인 아이템으로)
 */
const changeSelectItemIndex = (value) => {
  const items = elSuggestion.querySelectorAll('li');
  suggestionIndex += value;
  // 화살표 키로 조정한 인덱스 범위 체크
  if (suggestionIndex < 0) suggestionIndex = items.length - 1;
  else if (suggestionIndex >= items.length) suggestionIndex = 0;

  // 하이라이트 요소 변경
  items.forEach((item, index) => {
    // prettier-ignore
    if (index !== suggestionIndex) item.classList.remove('Suggestion__item--selected');
    else item.classList.add('Suggestion__item--selected');
  });
};

/**
 * 검색 결과 목록을 만들어 주는 함수
 * @param {object} languages 언어 리스트가 담긴 배열
 * @param {string} keyword 검색값
 */
const makeSuggestion = (languages, keyword) => {
  clearSuggestion();
  // 결과 배열의 크기가 0이라면, 별도의 작업을 하지 않고 종료
  if (languages.length === 0) return;

  // prettier-ignore
  // 검색어와 일치하는 부분에 하이라이트를 주기 위한 작업
  languages = languages.map((language) => {
    const regex = RegExp(`(${keyword})`, 'i');
    return language.replace(regex, '<span class="Suggestion__item--matched">$1</span>');
  });

  // 검색어와 일치하는 언어 리스트 생성
  elSuggestion = document.createElement('div');
  elSuggestion.className = 'Suggestion';
  const elSuggestionList = document.createElement('ul');
  languages.forEach((language, index) => {
    const item = document.createElement('li');
    if (index === 0) item.className = 'Suggestion__item--selected';
    item.innerHTML = language;
    elSuggestionList.append(item);
  });
  elSuggestionList.addEventListener('click', handleSuggestionList);
  elSuggestion.append(elSuggestionList);
  elApp.append(elSuggestion);
};

/**
 * 검색 결과 목록을 비우는 함수
 */
const clearSuggestion = () => {
  if (document.querySelector('.Suggestion')) {
    elApp.removeChild(elSuggestion);
  }
};

/**
 * 목록 내에서 선택한 언어를 SelectedLanguage에 렌더링하는 함수
 * @param {string} { selectItem } 선택한 언어
 */
const makeSelectedList = ({ selectItem }) => {
  alert(selectItem);

  // 리스트 중복 체크
  if (selectedList.includes(selectItem)) {
    selectedList = selectedList.filter((item) => item !== selectItem);
  }
  selectedList = [...selectedList, selectItem];
  // 리스트의 길이가 6 이상이 되면 맨 앞의 요소 Shift
  if (selectedList.length >= 6) selectedList.shift();

  // 재구성된 리스트를 화면에 렌더링
  clearSelectedLanguage();
  selectedList.forEach((item) => {
    const li = document.createElement('li');
    li.innerText = item;
    elSelectedLanguageList.append(li);
  });

  // 로컬 스토리지 저장
  // localStorage.set('selectedList', JSON.stringify(selectedList));
};

/**
 * SelectedLanguage 목록을 비우는 함수
 */
const clearSelectedLanguage = () => {
  while (elSelectedLanguageList.hasChildNodes()) {
    elSelectedLanguageList.removeChild(elSelectedLanguageList.firstChild);
  }
};

// 이벤트 리스너 연결
elSearchForm.addEventListener('submit', handleSearchFormSubmit);
elSearchForm.addEventListener('keydown', handleSearchFormKeyDown);
elSearchInput.addEventListener('input', debounce(handleSearchInput, 300));

// 렌더링
const render = () => {
  // 초기 화면 정리
  clearSuggestion();
  clearSelectedLanguage();

  // 로컬 스토리지 확인
  // if(localStorage.getItem('selectedList')){
  //   selectedList = JSON.parse(localStorage.getItem('selectedList'));
  // }

  // 최초 접속 시 입력 폼에 포커스
  elSearchInput.focus();
};

render();
