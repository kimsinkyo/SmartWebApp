$(document).ready(function(){
  var sfx = document.getElementById('click_sfx');
  
  $('.cube_face').click(function(){
    var id =  $(this).getElementById('');
    sfx.play();
    switch(id){
      case home_cube:
      setTimeout(function(){
      window.location.href="home.html"},1000);
      break;

      case anthem_cube:
      setTimeout(function(){
      window.location.href="#"},1000);
      break;
          
      case faction_cube:
      setTimeout(function(){
      window.location.href="#"},1000);
      break;
           
      case javelin_cube:
      setTimeout(function(){
      window.location.href="#"},1000);
      break;
             
      case info_cube:
      setTimeout(function(){
      window.location.href="#"},1000);
      break;
             
      case trailer_cube:
      setTimeout(function(){
      window.location.href="#"},1000);
      break;

      default:
      alert("에러발생");
    }
  });
});    