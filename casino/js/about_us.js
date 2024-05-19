loadXML();
// загрузка xml файла
function loadXML() {
  var xmlhttp = new XMLHttpRequest();
  // обработка ответа
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var xmlDoc = this.responseXML;

      processXML(xmlDoc);
    }
  };
  // параметры запроса
  xmlhttp.open("GET", baseUrl + "/xml/about_us.xml", true);
  // запрет на сохранение в кэше
  xmlhttp.setRequestHeader(
    "Cache-Control",
    "no-cache, no-store, must-revalidate"
  );
  // отправка запроса
  xmlhttp.send();
}
// добавление данных из файла на страницу
function processXML(xmlDoc) {
  var sectionElement = xmlDoc.documentElement;

  var targetDiv = document.getElementById("about-us-data");

  var childElements = sectionElement.children;
  for (var i = 0; i < childElements.length; i++) {
    var childElement = childElements[i];
    childElement.classList.forEach(function (className) {
      targetDiv.classList.add(className);
    });
    targetDiv.appendChild(childElement);
  }
}
