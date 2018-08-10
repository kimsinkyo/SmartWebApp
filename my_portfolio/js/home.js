$(document).ready(function(){
  var sfx1 = document.getElementById('login_sfx');
  var sfx2 = document.getElementById('click_sfx');
  $('.enter_homepage').click(function(){
    sfx1.play();
    setTimeout(function(){
      window.location.href="main.html"
    }, 1500);
  });
  $('#instagram_icon').click(function(){
    sfx2.play();
    setTimeout(function(){
      window.location.href="https://www.instagram.com/anthemgame/"
    }, 1200);
  });
  $('#facebook_icon').click(function(){
    sfx2.play();
    setTimeout(function(){
      window.location.href="https://www.facebook.com/AnthemGame/"
    }, 1200);
  });
  $('#tumbler_icon').click(function(){
    sfx2.play();
    setTimeout(function(){
      window.location.href="https://www.tumblr.com/tagged/anthem-game"
    }, 1200);
  });
  $('#twitter_icon').click(function(){
    sfx2.play();
    setTimeout(function(){
      window.location.href="https://twitter.com/anthemgame"
    }, 1200);
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


