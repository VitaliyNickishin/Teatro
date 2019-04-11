/*Кнопка меню*/
$('.navbar-toggler').on('click', function(e) {
 e.preventDefault();//для отмены действия при нажатии кнопки
 $(this).toggleClass('navbar-toggler_active');//находим.navbar-toggler и создаем класс navbar-toggler_active для переварачивания полосок
 
});

/* activate wow.js*/
new WOW().init();

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