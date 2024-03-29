import SearchInput from './components/SearchInput.js';
import SelectedLanguage from './components/SelectedLanguage.js';
import Suggestion from './components/Suggestion.js';
import { fetchLanguages } from './lib/api.js';

const MAX_DISPLAY_COUNT = 5;

function saveStateToStorage({ key, value }) {
  const convertedData = JSON.stringify(value);
  localStorage.setItem(key, convertedData);
}

function getStateFromStorage({ state, key }) {
  const initialState = localStorage.getItem(key);
  if (initialState) return { ...state, ...JSON.parse(initialState) };
  else return state;
}

export default function App({ $target }) {
  this.state = {
    fetchedLanguages: [],
    selectedLanguages: [],
    keyword: '',
    cursor: 0,
  };

  this.setState = (nextState) => {
    this.state = { ...this.state, ...nextState };
    suggestion.setState({
      selectedIndex: this.state.cursor,
      keyword: this.state.keyword,
      items: this.state.fetchedLanguages,
    });
    selectedLanguage.setState(this.state.selectedLanguages);
    saveStateToStorage({ key: 'app-state', value: this.state });
  };

  this.state = getStateFromStorage({ state: this.state, key: 'app-state' });

  const selectedLanguage = new SelectedLanguage({
    $target,
    initialState: this.state.selectedLanguages,
    onDoubleClick: (e) => {
      const index = parseInt(e.target.dataset.index);
      const nextState = this.state.selectedLanguages.filter((_, idx) => idx !== index);

      this.setState({ selectedLanguages: nextState });
    },
  });

  const searchInput = new SearchInput({
    $target,
    initialState: this.state.keyword,
    onChange: async (keyword) => {
      if (keyword.length === 0) {
        this.setState({ fetchedLanguages: [], keyword: '' });
      } else {
        const languages = await fetchLanguages(keyword);
        this.setState({ fetchedLanguages: languages, keyword });
      }
    },
    MAX_DISPLAY_COUNT,
  });

  const suggestion = new Suggestion({
    $target,
    initialState: {
      cursor: this.state.cursor,
      keyword: this.state.keyword,
      items: this.state.fetchedLanguages,
    },
    onKeyup: (selectedIndex) => {
      this.setState({ cursor: selectedIndex });
    },
    onSelect: (language) => {
      alert(language);

      // 이미 선택된 언어는 맨 뒤로 보내버림
      const nextSelectedLanguages = [...this.state.selectedLanguages];

      const index = nextSelectedLanguages.findIndex((selectedLanguage) => selectedLanguage === language);
      if (index > -1) {
        nextSelectedLanguages.splice(index, 1);
      }
      nextSelectedLanguages.push(language);

      if (nextSelectedLanguages.length > MAX_DISPLAY_COUNT) nextSelectedLanguages.splice(0, 1);

      this.setState({ ...this.state, selectedLanguages: nextSelectedLanguages });
    },
  });
}
