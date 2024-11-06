(() => {
    const refs = {
      activeLink: document.querySelector("[nav-link]"),  // Знаходимо лінк за атрибутом nav-link
    };
  
    refs.activeLink.addEventListener("click", toggleActiveClass);
  
    function toggleActiveClass() {
      refs.activeLink.classList.toggle("active");  // Додаємо/видаляємо клас active
    }
})();
