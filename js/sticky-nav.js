
//For Search Bar
$(document).on("click", ".search", () => {
  $(".search-bar").addClass("search-bar-active");
});

$(document).on("click", ".search-cancel", () => {
  $(".search-bar").removeClass("search-bar-active");
});
// for fix menu when scroll
$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $(".nav").addClass("sticky-nav");
  } else {
    $(".nav").removeClass("sticky-nav");
  }
});


// for-responsive menu
$(document).ready(function() {
  $(".toggle").click(function() {
    $(".toggle").toggleClass("active");
    $(".nav").toggleClass("active");
  });
});
