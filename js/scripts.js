function pingpong(numberEntered){
  if (numberEntered % 15 == 0)
    return "ping-pong";
  else if(numberEntered % 3 == 0)
    return "ping";
  else if (numberEntered % 5 == 0)
    return "pong";
  else
    return numberEntered;
};

$(document).ready(function() {
  $("form").submit(function(){
    event.preventDefault();
    $(".tempList").remove();
    var numberEntered = parseInt($("#numberEntered").val());
    alert(numberEntered);
    for (var i = 1; i <= numberEntered; i++) {
        $("#numberList").append("<li class='tempList'>" + pingpong(i) + "</li>");
    }
  });
});
