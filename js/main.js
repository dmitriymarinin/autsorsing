"use strict";

let vacationRight = document.querySelector(".vacancion__right");
let currentVacationImage;
findCurrentVacationImage();

var liElems = document.querySelectorAll(".vacancion__item");
// let output = document.querySelector('.vacancion__img');
// output.src = "img/vacancion/vacancion1.png";

for (var i = 0; i < liElems.length; i++) {
  liElems[i].addEventListener("mouseenter", function(e) {
    // output.src = this.dataset.img;
    // output.classList.add("vacancion__img--hidden")
    appendNewVacationImage(vacationRight, e.target.dataset.img);
    hideAndRemove(currentVacationImage);
    findCurrentVacationImage();
  });
}



function findCurrentVacationImage() {
  currentVacationImage = document.querySelector(".vacancion__img--current");
}


function hideAndRemove(current) {
  current.classList.remove("vacancion__img--current");
  current.classList.add("vacancion__img--hidden");

  setTimeout(() => {
    current.remove();
  }, 1000) 
}


function appendNewVacationImage(targetElem, src) {
  let img = document.createElement("img");
  img.src = src;
  img.classList.add("vacancion__img");
  img.classList.add("vacancion__img--current");

  targetElem.prepend(img);
}



// form
// $( document ).ready(function() {
//   $("#btn").click(
//   function(){
//     sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');
//     return false; 
//   }
// );
// });

// function sendAjaxForm(result_form, ajax_form, url) {
//   $.ajax({
//       url:     url, //url страницы (action_ajax_form.php)
//       type:     "POST", //метод отправки
//       dataType: "html", //формат данных
//       data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
//       success: function(response) { //Данные отправлены успешно
//         result = $.parseJSON(response);
//         $('#result_form').html('Имя: '+result.name+'<br>Телефон: '+result.phonenumber);
//     },
//     error: function(response) { // Данные не отправлены
//           $('#result_form').html('Ошибка. Данные не отправлены.');
//     }
//  });
// }