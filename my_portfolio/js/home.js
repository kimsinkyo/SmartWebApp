$(document).ready(function(){
  var sfx = document.getElementById('login_sfx');
  $('.enter_homepage').click(function(){
    sfx.play();
    setTimeout(function(){
      window.location.href="main.html"
    }, 1500);
  });
  $('.front_cube').click(function(){
    window.location.href="home.html"
  });
});    

VanillaTilt.init(document.querySelector(".main-title"),{
	max: 30,
	speed: 600,
  scale: 1,
  transition: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  perspective: 400,
});

VanillaTilt.init(document.querySelectorAll(".box"),{
	max: 30,
	speed: 600,
  scale: 1,
  transition: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  perspective: 600,
  glare: true
});


