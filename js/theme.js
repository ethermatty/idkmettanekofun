// Выбираем кнопку
const btn = document.querySelector(".btntoggle");
// Выбираем таблицу стилей
const theme = document.querySelector("#theme-link");
// Отслеживаем щелчок по кнопке
btn.addEventListener("click", function() {
  // Если текущий адрес содержит "light-theme.css"
  if (theme.getAttribute("href") == "lighttheme.css") {
    // …то переключаемся на "dark-theme.css"
    theme.href = "darktheme.css";
    // В противном случае… 
  } else {
    // …переключаемся на "light-theme.css"
    theme.href = "lighttheme.css";
  }
});