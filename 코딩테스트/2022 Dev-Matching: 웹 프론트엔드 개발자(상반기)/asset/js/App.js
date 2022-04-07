import SearchInput from './components/SearchInput.js';

export default function App({ $target }) {
  this.state = {
    fetchedLanguages: [],
    selectedLanguages: [],
  };

  this.setState = (nextState) => {};

  const searchInput = new SearchInput({ $target, initialState: '' });
}
