const burger = document.querySelector('[data-selector="burger"]');
const navigation = document.querySelector('[data-selector="navigation"]');

function transformBurgerIcon() {
  // more about classList:
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  burger.classList.toggle("is-active");
}

function toggleNavigation() {
  navigation.classList.toggle("is-open");
}

// adding an eventlistener and defining
// an anonymous function which is executed on click
burger.addEventListener("click", () => {
  transformBurgerIcon();
  toggleNavigation();
});
