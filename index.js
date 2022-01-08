// To show the navbar when the burger is clicked

$(".burger").click(function () {
  $(".link-div").toggleClass("link-div-show");
  $("main").toggleClass("blur");
  $("footer").toggleClass("blur");
  $("h1").toggleClass("blur");
});

$("main").click(function () {
  $(".link-div").removeClass("link-div-show");
  $("main").removeClass("blur");
  $("footer").removeClass("blur");
  $("h1").removeClass("blur");
});

// To close the offer on the shop page

$(".offer-close-btn").click(function() {
  $(".offer").addClass("offer-hidden");
  $(".offer-close-btn").addClass("offer-hidden");
  $(".shop-btn").removeClass("offer-lift");
});

// To calculate the new price using the dicount and initial value

var numberOfCards = document.getElementsByClassName("shop-card").length;
for (var o = 0; o < numberOfCards; o++){
  findOfferPrice(o);
}

function findOfferPrice (o) {
  var originalPrice = document.querySelectorAll(".original-price")[o].textContent;
  var offerPercent = document.querySelectorAll(".card-offer-text")[o].textContent;
  document.querySelectorAll(".offer-price")[o].textContent = originalPrice - ((originalPrice * offerPercent) / 100);
}

$(document).scroll(function() {
  if (window.scrollY > 400) {
    $(".up-btn").removeClass("up-btn-invisible");
  } else {
    if ($(".up-btn").hasClass("up-btn-invisible") === false) {
      $(".up-btn").addClass("up-btn-invisible");
    }
  }
});

$(".up-btn").click(function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});
