const hamburgerMenu = document.querySelector(".bars");

const toggleMobileNavigation = () => {
  hamburgerMenu.classList.toggle("active");
};
hamburgerMenu.addEventListener("click", toggleMobileNavigation);

// (function loadAllEventListeners() {
// })();

const changeColorButton = document.getElementById('hex');

const changeColor = () => {
  const colourUi = document.querySelector('.current-color')
  const characters = '0123456789ABCDEF'
  let color = '#'
  for (i = 0; i < 6; i++) {
    color += characters[Math.floor(Math.random() * characters.length)]
  }
  document.body.style.background = color
  colourUi.textContent = color
  console.log(color);
}

changeColorButton.addEventListener('click', changeColor)