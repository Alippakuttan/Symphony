// To calculate the new price using the dicount and initial value

var numberOfCards = document.getElementsByClassName("shop-card").length;
for (var i = 0; i < numberOfCards; i++){
    findOfferPrice(i);
};

function findOfferPrice (i) {
  var originalPrice = document.querySelectorAll(".original-price")[i].textContent;
  var offerPercent = document.querySelectorAll(".card-offer-text")[i].textContent;
  document.querySelectorAll(".offer-price")[i].textContent = originalPrice - ((originalPrice * offerPercent) / 100);
};
