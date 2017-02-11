$(document).ready(function(){
  $.ajax({
    url:'http://localhost:3000/about',
    method: 'GET',
    dataType: 'json'
  }).done(function(r) {
    console.log(r);
  });
});
