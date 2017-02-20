$(document).ready(function(){
  $('#button1').on('click', function(){
    $.ajax({
      url: 'http://localhost:3000/book',
      method: 'GET'
    }).done(function(r){
      console.log(r);
    })
  })
});
