import SearchInput from './components/SearchInput.js';
import SelectedLanguage from './components/SelectedLanguage.js';
import Suggestion from './components/Suggestion.js';
import { fetchLanguages } from './lib/api.js';

export default function App({ $target }) {
  this.state = {
    fetchedLanguages: [],
    selectedLanguages: [],
  };

  this.setState = (nextState) => {
    this.state = { ...this.state, ...nextState };
    suggestion.setState({ selectedIndex: 0, items: this.state.fetchedLanguages });
    selectedLanguage.setState(this.state.selectedLanguages);
  };

  const selectedLanguage = new SelectedLanguage({ $target, initialState: [] });

  const searchInput = new SearchInput({
    $target,
    initialState: '',
    onChange: async (keyword) => {
      if (keyword.length === 0) {
        this.setState({ fetchedLanguages: [] });
      } else {
        const languages = await fetchLanguages(keyword);
        this.setState({ fetchedLanguages: languages });
      }
    },
  });

  const suggestion = new Suggestion({
    $target,
    initialState: {
      cursor: 0,
      items: [],
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

      this.setState({ ...this.state, selectedLanguages: nextSelectedLanguages });
      console.log(this.state);
    },
  });
}
