let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // 向下滚动，隐藏导航栏
    navbar.classList.add('hidden');
  } else {
    // 向上滚动，显示导航栏
    navbar.classList.remove('hidden');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // 确保 lastScrollTop 不会小于 0
});
