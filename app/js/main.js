/*Кнопка меню*/
$('.navbar-toggler').on('click', function(e) {
 e.preventDefault();//для отмены действия при нажатии кнопки
 $(this).toggleClass('navbar-toggler_active');//находим.navbar-toggler и создаем класс navbar-toggler_active для переварачивания полосок
 
});

/* activate wow.js*/
new WOW().init();

/* Initialize and add the map */
function initMap() {
  // The location of Uluru
  var uluru = {lat: 50.0228413, lng: 36.2869263};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 16, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}

/*Проворачивание треугольника*/
document.addEventListener("click", function(e) {
  var elem = e.target.tagName == "A" ? e.target.parentNode : e.target;
  //console.log(elem.classList.contains("menu_design_drop"));
  if (elem.classList.contains("menu_design_drop")) {
      elem.classList.toggle("show")
  }
});
/*Проворачивание стрелки*/
$(document).ready(function(){
  $("#navi").click(function(){
    $("#navi .fa-chevron-down").toggleClass("rtoate180");
    $("#navigation").stop().slideToggle(500);
  });
});
/*
windows.onload = function(){

 document.getElementsByClassName('navbar-toggler').onclick = function() {
  document.getElementByClassName('navbar-toggler').classList.add('navbar-toggler_active');
 }

}*/
/*
var btns = document.getElementsByClassName('navbar-toggler');
var par = document.getElementsByClassName('navbar-toggler');
btns[0].onclick = function() {
  par[0].classList.add("navbar-toggler_active");
  
}

*/
/*
var elCollection = document.getElementsByClassName('navbar-toggler');
  for(var i = 0; i < elCollection.length; i++) {
    var elem = elCollection[i];
    elem.onclick = function(){
        this.classList.add("navbar-toggler_active");
    }
  }
  elem.classList.remove("navbar-toggler_active");
  */