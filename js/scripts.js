var formDivHeight = 250;
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
  $(window).resize(function(){
    if($( window ).width() <= 599){
      $("#mysidebarBackground").css("height", 250);
    }
    else{
      $("#mysidebarBackground").css("height", formDivHeight);
    }
  });
  $("form").submit(function(){
    event.preventDefault();
    formDivHeight = 250;
    var numberEntered = parseInt($("#numberEntered").val());
    $(".tempListItem").remove();
    $("#numberList").hide();
    $("#myFormBackground").css("height", formDivHeight);
    $("#mysidebarBackground").css("height", formDivHeight);
    if(101 > numberEntered && numberEntered > 0 ){
      formDivHeight += (20 * (numberEntered - 1));
      for (var i = 1; i <= numberEntered; i++){
        $("#numberList").append("<li class='tempListItem'>" + pingpong(i) + "</li>");
      }
      $("#myFormBackground").css("height", formDivHeight);
      $("#mysidebarBackground").css("height", formDivHeight);
      $("#numberList").slideDown(1000);
    }
    else{
      $("#numberList").slideDown(200);
      $("#numberList").append("<p class='tempListItem' style='text-align:center'>" + "Please Enter a positive integer up to 100!" + "</p>");
    }
  });
});
