// To show the navbar when the burger is clicked

document.querySelector(".burger").addEventListener("click", function (){
  document.querySelector(".link-div").classList.toggle("link-div-show");
  document.querySelector("main").classList.toggle("blur");
  document.querySelector("footer").classList.toggle("blur");
  document.querySelector("h1").classList.toggle("blur");
});

// To close the offer on the shop page

document.querySelector(".offer-close-btn").addEventListener("click", function() {
  document.querySelector(".offer").classList.add("offer-hidden");
  document.querySelector(".offer-close-btn").classList.add("offer-hidden");
  var shopBtnNumber = document.getElementsByClassName("shop-btn").length;
  for (var i = 0; i < shopBtnNumber; i++) {
    document.querySelectorAll(".shop-btn")[i].classList.toggle("offer-lift");
  }
});

// To add a comma after three places from the verylightpurple
var numberOfInstrumentPrices = document.getElementsByClassName("instrument-price").length;
var j = 0;
while (j < numberOfInstrumentPrices) {
  addCommas(j);
  j++;
};

function addCommas(j) {
  var value = document.querySelectorAll(".instrument-price")[j].innerHTML;
  var newValue = 0;
  var cutValue;
  while (value.length > 3) {
    cutValue = value.slice(value.length-3 , value.length);
    cutValue = "," + cutValue;
    newValue = cutValue + newValue;
    value = value.slice(0, value.length - 3);
  }
  newValue = value + newValue;
  newValue = newValue.slice(0, newValue.length - 1);
  document.querySelectorAll(".instrument-price")[j].innerHTML = newValue;
}
