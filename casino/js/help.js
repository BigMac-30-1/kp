// метод вызывается, когда загрузилась страница
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("supportForm");
  const submitBtn = document.getElementById("submitBtn");

  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const emailInput = document.getElementById("email");

    if (!emailInput.value) {
      showCustomAlert("Пожалуйста, заполните все поля!", false);
      return;
    }

    if (!validateEmail(emailInput.value)) {
      showCustomAlert("Электронная почта некоректна!", false);
      return;
    }

    // к ключу добавляется дата, чтобы у сообщений были разные ключи
    const key = "help_message_" + Date.now();
    const formData = new FormData(form);
    // сохранение xml в localStorage
    const successful = saveData(formData, key);
    if (successful) {
      showCustomAlert(
        "Благодарим за обращение в поддержку. Мы обязательно вас поддержим",
        successful
      );
    } else {
      showCustomAlert("Упс, ошибочка вышла", successful);
    }
    form.reset();
  });
});
function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
