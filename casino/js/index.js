// метод вызывается, когда загрузилась страница
document.addEventListener("DOMContentLoaded", function () {
  const jackpotLink = document.getElementById("jackpot");

  if (userExist()) {
    // если пользователь зарегистрирован, кнопка активна
    jackpotLink.removeEventListener("click", noAction);
  } else {
    jackpotLink.addEventListener("click", (event) => {
      noAction(event);
      showCustomAlert(
        "Доступно только зарегистрированным пользователям",
        false
      );
    });
  }
});

// удаление любых действий после клика
function noAction(event) {
  event.preventDefault();
  event.stopPropagation();
}
