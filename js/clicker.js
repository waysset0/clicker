var clicker = 0;
var c = document.getElementById("c");
var ch = document.getElementById("ch");

document.addEventListener("DOMContentLoaded", function() {
  function click_click() {
    clicker++;

    if(clicker == 100) {
      alert("Вот это ты жёстко кликаешь! Отдохни!)")
    }
    if(clicker == 110) {
      alert("Куда ты так гонишь???")
    }
    if(clicker == 120) {
      alert("Тормози!!!")
    }
    if(clicker == 150) {
      alert("Аккуратней")
    }
    if(clicker == 200) {
      alert("Тебя не остановить...")
    }
    if(clicker == 500) {
      alert("Вот это ты жёсткий тип...")
    }

    c.textContent = `Вы кликнули ${clicker} раз!`;
  }
  ch.addEventListener("click", function() { click_click() });
})
