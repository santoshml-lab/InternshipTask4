const themeButton = document.querySelector(".theme-button");

themeButton.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");

  if (currentTheme === "dark") {
    document.documentElement.removeAttribute("data-theme");
    themeButton.textContent = "Toggle Dark Theme";
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    themeButton.textContent = "Toggle Light Theme";
  }
});
