// вывод сообщений на экран
function showCustomAlert(message, successful) {
  const alertDiv = document.createElement("div");
  alertDiv.classList.add("alert");
  alertDiv.textContent = message;

  // если это сообщение об ошибке - меняется цвет фона на красный
  if (!successful) {
    alertDiv.style.backgroundColor = "#f44336";
  }

  document.body.appendChild(alertDiv);

  setTimeout(() => {
    alertDiv.style.display = "none";
    document.body.removeChild(alertDiv);
  }, 5000);
}
