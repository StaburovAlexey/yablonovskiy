"use strict";
const form = document.getElementById("form");

document.addEventListener("DOMContentLoaded", function () {
  form.addEventListener("submit", formSend);
});

async function formSend(e) {
  e.preventDefault();

  let formData = new FormData(form);

  form.classList.add("_sending");
  let response = await fetch("sendmail.php", {
    method: "POST", // or 'PUT'4
    body: formData,
  });

  if (response.ok) {
    let result = await response.json();
    alert(result.message);
    formPreview.innerHTML = "";
    form.reset();
    form.classList.remove("_sending");
  } else {
    alert("ошибка отправки!");
    form.classList.remove("_sending");
  }
}
