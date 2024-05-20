// метод вызывается, когда загрузилась страница
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");
  const submitBtn = document.getElementById("submitBtn");
  const logoutButton = document.getElementById("logoutButton");
  const userDataKey = "user_data";

  updatePageElements();

  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const birthDateInput = document.getElementById("birthday");
    const birthDate = birthDateInput.value;
    const nicknameInput = document.getElementById("nickname");
    const emailInput = document.getElementById("email");
    const sexRadio = document.querySelector('input[name="sex"]:checked');

    if (
      !nicknameInput.value ||
      !emailInput.value ||
      !birthDateInput.value ||
      !sexRadio
    ) {
      showCustomAlert("Пожалуйста, заполните все поля!", false);
      return;
    }

    if (!validateEmail(emailInput.value)) {
      showCustomAlert("Электронная почта некоректна!", false);
      return;
    }

    if (!validateAge(birthDate)) {
      console.log("not 18");

      return;
    }

    const formData = new FormData(form);
    // сохранение xml в localStorage
    const successful = saveData(formData, userDataKey);
    if (successful) {
      showCustomAlert("Регистрация прошла успешно", successful);
    } else {
      showCustomAlert("Упс, ошибочка вышла", successful);
    }
    form.reset();
    updatePageElements();
  });

  // удаление данных пользователя
  logoutButton.addEventListener("click", function () {
    localStorage.removeItem(userDataKey);
    updatePageElements();
  });

  function updatePageElements() {
    if (userExist()) {
      // если пользователь зарегистрирован, видна кнопка выйти
      logoutButton.style.display = "flex";
      form.style.display = "none";
    } else {
      // если пользователь не зарегистрирован, видна форма регистрации
      logoutButton.style.display = "none";
      form.style.display = "block";
    }
  }
});

function validateAge(birthDate) {
  const today = new Date();

  const birthDateParts = birthDate.split("-");
  const birthYear = parseInt(birthDateParts[0]);
  const birthMonth = parseInt(birthDateParts[1]) - 1;
  const birthDay = parseInt(birthDateParts[2]);

  const ageInMilliseconds =
    today.getTime() - new Date(birthYear, birthMonth, birthDay).getTime();

  const ageInYears = Math.floor(
    ageInMilliseconds / (1000 * 60 * 60 * 24 * 365)
  );

  if (ageInYears < 18) {
    alert(
      "Вы не можете зарегистрироваться. Минимальный возраст для регистрации - 18 лет."
    );
    return false;
  }

  return true;
}
function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
