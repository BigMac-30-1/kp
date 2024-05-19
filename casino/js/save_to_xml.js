function saveData(formData, key) {
  try {
    const xmlData = convertFormDataToXML(formData);

    // сохранение xml в виде строки в localStorage
    localStorage.setItem(key, xmlData);
    return true;
  } catch (error) {
    console.error("Ошибка при сохранении xml:", error);
    return false;
  }
}

// создание xml с данными из формы
function convertFormDataToXML(formData) {
  const xml = document.createElement("xml");
  // для каждого поля в форме создаётся тег xml
  for (const pair of formData.entries()) {
    // название тега в xml [key] - имя инпута в форме.
    // содержимое тега [value] - содержимое инпута
    const [key, value] = pair;
    const node = document.createElement(key);
    node.textContent = value;
    xml.appendChild(node);
  }
  // console.log(xml);
  console.log(formData);
  return xml.outerHTML;
}
