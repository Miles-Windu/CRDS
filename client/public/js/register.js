var $ = require('jquery')

var name = $('#nameInput').val();
var email = $("#emailInput").val();


$('#submit-btn').on('click', function(){
    console.log(name + email);
})

