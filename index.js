const optionMenu = document.querySelector(".select-btn"),
  optionMenuCompany = document.querySelector(".select-btn-company");  

optionMenu.addEventListener("click", () => optionMenu.classList.toggle("active"));

optionMenuCompany.addEventListener("click", () => optionMenuCompany.classList.toggle("active"));

