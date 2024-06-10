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


let currentIndex = 0;

const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    const newTransform = `translateX(-${currentIndex * 100}%)`;
    document.querySelector('.carousel-images').style.transform = newTransform;
}

setInterval(showNextImage, 3000);
