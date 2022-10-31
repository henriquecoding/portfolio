const navMenu = document.querySelector('.menu'),
toggleMenu = document.querySelector('.toggle-menu'), 
closeMenu = document.querySelector('.close-menu')

toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu')
})

closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('show-menu')
})