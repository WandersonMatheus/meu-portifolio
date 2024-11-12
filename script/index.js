const html = document.getElementById("htmlPage");
const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", ()=>{
    if(checkbox.checked){
        html.setAttribute("data-bs-theme" , "dark");
    }else{
        html.setAttribute("data-bs-theme" , "light");
    }
})
document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
  
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[index].classList.add("active");
      }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const navbarLinks = document.querySelectorAll(".nav-link");
  
    function removeActiveClass() {
      navbarLinks.forEach(link => {
        if (link) {
          link.classList.remove("active");
        }
      });
    }
  
    function highlightSection() {
      const sections = document.querySelectorAll("section");
      let currentSection = "";
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 70;
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute("id");
        }
      });
  

      removeActiveClass();
      navbarLinks.forEach(link => {
        if (link && currentSection && link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active");
        }
      });
    }
  
    window.addEventListener("scroll", highlightSection);
    highlightSection();
  });
  
  
