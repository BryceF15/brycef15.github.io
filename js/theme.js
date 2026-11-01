/* theme.js: runs in <head>, before the page draws, so a visitor who chose
   dark mode never sees a flash of the light theme. Kept as its own file
   (not inline) so the Content Security Policy can block all inline scripts. */
(function () {
  try {
    if (localStorage.getItem("bf-theme") === "dark") document.documentElement.dataset.theme = "dark";
  } catch (e) {}
})();
