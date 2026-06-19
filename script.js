const config = window.NEXO_CONFIG || {};
const configurableElements = document.querySelectorAll("[data-config]");

configurableElements.forEach((element) => {
  const key = element.dataset.config;
  const value = config[key];

  if (!value) return;

  if (element.tagName === "A") {
    element.href = value;
  } else {
    element.textContent = value;
  }
});
