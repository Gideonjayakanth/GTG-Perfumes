

/* IMAGE GALLERY */
const mainImage = document.getElementById("mainImage");
document.querySelectorAll(".thumbs img").forEach(img => {
  img.addEventListener("click", () => {
    document.querySelector(".thumbs .active")?.classList.remove("active");
    img.classList.add("active");
    mainImage.src = img.src;
  });
});

/* ACCORDION */
document.querySelectorAll(".accordion-header").forEach(header => {
  header.addEventListener("click", () => {
    const body = header.nextElementSibling;

    document.querySelectorAll(".accordion-body").forEach(b => {
      if (b !== body) b.classList.remove("open");
    });

    body.classList.toggle("open");
  });
});
