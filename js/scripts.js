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
    $(".tempListItem").remove();
    $("#numberList").hide();
    var numberEntered = parseInt($("#numberEntered").val());
    if(101 > numberEntered && numberEntered > 0 )
      for (var i = 1; i <= numberEntered; i++)
        $("#numberList").append("<li class='tempListItem'>" + pingpong(i) + "</li>");
    else
      $("#numberList").append("<li class='tempListItem'>" + "Please Enter a positive integer up to 100!" + "</li>");
    $("#numberList").slideDown(200);
  });
});
