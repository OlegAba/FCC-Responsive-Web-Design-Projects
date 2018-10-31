function classToggle() {
  const navs = document.querySelectorAll('.nav-bar-items')
  
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}
document.querySelector('.nav-bar-toggle')
  .addEventListener('click', classToggle);