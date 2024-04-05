const secondaryTitles = document.querySelectorAll("h2");

secondaryTitles.forEach((title) => {
  title.addEventListener("click", ({ target }) => {
    target.style.color = "red";
  });
});
