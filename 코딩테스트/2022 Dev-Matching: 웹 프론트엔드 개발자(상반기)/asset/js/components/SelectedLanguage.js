export default function SelectedLanguage({ $target, initialState, onDoubleClick, MAX_DISPLAY_COUNT }) {
  this.$element = document.createElement('div');
  this.$element.className = 'SelectedLanguage';
  this.state = initialState;

  $target.append(this.$element);

  this.setState = (nextState) => {
    this.state = nextState;

    if (this.state.length > MAX_DISPLAY_COUNT) {
      const startPosition = this.state.length - MAX_DISPLAY_COUNT;
      this.state = this.state.slice(startPosition, MAX_DISPLAY_COUNT + startPosition);
    }
    this.render();
  };

  this.render = () => {
    while (this.$element.hasChildNodes()) {
      this.$element.removeChild(this.$element.firstElementChild);
    }

    this.state.map((item, index) => {
      const li = document.createElement('li');
      li.textContent = item;
      li.dataset.index = index;
      li.addEventListener('dblclick', onDoubleClick);
      this.$element.append(li);
    });
  };

  this.render();
}
