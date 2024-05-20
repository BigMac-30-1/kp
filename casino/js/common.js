const burger = document.querySelector(".header-burger");
const menu = document.querySelector(".header-nav");

burger.addEventListener("click", () => {
  menu.classList.toggle("opened");
  burger.classList.toggle("opened");
});

// проверка, зарегистрирован ли пользователь
function userExist() {
  const key = "user_data";
  // получение данных пользователя из localStorage
  const userData = localStorage.getItem(key);
  return userData != null;
}
