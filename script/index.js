const html = document.getElementById("htmlPage");
const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", ()=>{
    if(checkbox.checked){
        html.setAttribute("data-bs-theme" , "dark");
    }else{
        html.setAttribute("data-bs-theme" , "light");
    }
})


document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  function highlightSection() {
    let currentSectionId = "";


    sections.forEach(section => {
      const sectionTop = section.offsetTop - 70;
      const sectionBottom = sectionTop + section.offsetHeight;
      
      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${currentSectionId}`);
    });
  }

  window.addEventListener("scroll", highlightSection);
  highlightSection(); 
});

  
  
