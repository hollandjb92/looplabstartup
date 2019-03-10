//Get Current Year for Copyright
$("#year").text(new Date().getFullYear());

//Initialize Scroll Spy
$("body").scrollspy({
  target: "#main-nav"
});



//Smooth Scroll
$("#main-nav a").on('click', function (e) {
  //check for id value
  if (this.hash !== "") {
    //prevent default behavior of anchor tag
    e.preventDefault();

    //store # in variable
    const hash = this.hash;

    //Animation smooth scrolling
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function () {
      //add # to url after scroll
      window.location.hash = hash;
    });
  }
});