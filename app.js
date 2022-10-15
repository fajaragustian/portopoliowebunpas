// $(window).scroll(function () {
//   $('nav').toggleClass('scrolled', $(this).scrollTop() > 0);
// });
// Navbar Scroll sticky
// mengambil [0] index nav pertama  pada element tag nav
const navbar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function () {
  console.log(window.scrollY);
  if (window.scrollY > 1) {
    navbar.classList.replace('nav-bg', 'nav-color');
  } else if (this.window.scrollY <= 0) {
    navbar.classList.replace('nav-color', 'nav-bg');
  }
});
