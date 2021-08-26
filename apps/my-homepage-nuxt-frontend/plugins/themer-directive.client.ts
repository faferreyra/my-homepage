import Vue from 'vue';

const setValue = (property, value) => {
  if (value) {
    document.documentElement.style.setProperty(`--${property}`, value);
  }
};

const setValueFromLocalStorage = property => {
  const value = localStorage.getItem(property);
  setValue(property, value)
}


Vue.directive('themer', {
  inserted: () => {
    setValueFromLocalStorage('color-background');
    setValueFromLocalStorage('color-text-pri');
    setValueFromLocalStorage('color-text-acc');
  }
})
