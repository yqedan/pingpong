function pingpomng(){};

$(document).ready(function() {
  $("form").submit(function(){
    event.preventDefault();
    $("#tempList").remove();
    var numberEntered = parseInt($("#numberEntered").val());
    alert(numberEntered);
    $("#numberList").append("<li id='tempList'>" + numberEntered + "</li>");
    // for (var i = 0; i < numberEntered; i++) {
    //
    // }
  });
});
