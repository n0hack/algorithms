import { debounce } from '../lib/lazy.js';

export default function SearchInput({ $target, initialState, onChange }) {
  this.$element = document.createElement('form');
  this.$element.className = 'SearchInput';
  this.state = initialState;

  $target.append(this.$element);

  // 컴포넌트 렌더링
  this.render = () => {
    this.$element.innerHTML = `<input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요." value="${this.state}"/>`;
  };

  this.render();

  // 화면 렌더링 즉시 포커스 (커서 맨 뒤)
  this.$element[0].focus();
  this.$element[0].setSelectionRange(this.state.length, this.state.length);

  this.$element.addEventListener(
    'keyup',
    debounce((e) => {
      const actionIgnoreKey = ['Enter', 'ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'];

      if (!actionIgnoreKey.includes(e.key)) {
        onChange(e.target.value);
      }
    }, 100)
  );

  this.$element.addEventListener('submit', (e) => {
    e.preventDefault();
  });
}
