function scrollToSectionNav(event) {
    event.preventDefault();
  
    const sectionId = event.currentTarget.getAttribute("data-section");
  
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  document.querySelectorAll("[data-section]").forEach((link) => {
    link.addEventListener("click", scrollToSectionNav);
  });