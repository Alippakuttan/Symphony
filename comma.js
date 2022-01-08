// To add a comma after three places

var numberOfInstrumentPrices = document.getElementsByClassName("instrument-price").length;

for (var i = 0; i < numberOfInstrumentPrices; i++) {
  addCommas(i);
}

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
