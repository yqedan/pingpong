function pingpong(numberEntered){
  return numberEntered;
};

$(document).ready(function() {
  $("form").submit(function(){
    event.preventDefault();
    $("#tempList").remove();
    var numberEntered = parseInt($("#numberEntered").val());
    alert(numberEntered);
    for (var i = 1; i <= numberEntered; i++) {
        $("#numberList").append("<li id='tempList'>" + pingpong(i) + "</li>");
    }
  });
});
