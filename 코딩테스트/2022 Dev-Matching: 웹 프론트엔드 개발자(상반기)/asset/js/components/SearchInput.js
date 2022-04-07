export default function SearchInput({ $target, initialState }) {
  this.$element = document.createElement('form');
  this.$element.className = 'SearchInput';
  this.state = initialState;

  $target.append(this.$element);

  // 컴포넌트 렌더링
  this.render = () => {
    this.$element.innerHTML = `<input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요." value="${this.state}"/>`;
  };

  this.render();
}
