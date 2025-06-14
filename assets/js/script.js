const navLinkElement = document.querySelectorAll(".nav-bar-link");
const sections = document.querySelectorAll(".main-content > div");

navLinkElement.forEach(link => {
  link.addEventListener("click", () => {

    navLinkElement.forEach(item => item.classList.remove("active"));
    
    link.classList.add("active");

    const target = link.value.substring(1);

    sections.forEach(section => {
      if (section.id === target) {
        section.classList.remove("hidden");
        section.classList.add("fade-in")

        setTimeout(() => {
           section.classList.remove("fade-in");
        }, 500);

      } else {
        section.classList.add("hidden");
        section.classList.remove("fade-in");
      }
    });
  });
});
