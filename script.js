const menu = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? '關閉選單' : '開啟選單');
  links.classList.toggle('open', open);
});
links.addEventListener('click', event => {
  if (event.target.closest('a')) {
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', '開啟選單');
    links.classList.remove('open');
  }
});
