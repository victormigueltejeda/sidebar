const sidebar_menubutton = document.querySelector(".sidebar_menu-button");
const header_sidebar = document.querySelector(".header_sidebar");
const sidebar_brant = document.querySelector(".sidebar_brant");
const sidebar_categori = document.querySelector(".sidebar_categori");
const sidebar_link = document.querySelectorAll(".sidebar_link");
const sidebar = document.querySelector(".sidebar");
const sidebar_text = document.getElementById("text");

sidebar_menubutton.addEventListener("click", function () {
  sidebar.classList.toggle("active");
  sidebar_brant.classList.toggle("img_hide");
  sidebar_text.classList.toggle("title_hide");
  sidebar_link.forEach((item) => {
    item.classList.toggle("hide__element");
  });
});
