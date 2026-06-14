const config = window.NEXO_CONFIG || {};
const copyByOrg = config.copyByOrg || {};
const buttons = document.querySelectorAll("[data-org]");
const heroCopy = document.querySelector("#heroCopy");
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

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedOrg = button.dataset.org;
    heroCopy.textContent = copyByOrg[selectedOrg];

    buttons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
  });
});

const defaultOrg = config.defaultOrg || "general";
const defaultButton = document.querySelector(`[data-org="${defaultOrg}"]`);

if (copyByOrg[defaultOrg] && heroCopy && defaultButton) {
  heroCopy.textContent = copyByOrg[defaultOrg];
  buttons.forEach((item) => item.classList.remove("active"));
  defaultButton.classList.add("active");
}
