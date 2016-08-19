var formDivHeight = 250;
var submitDivHeightSmall = 150;
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
function reverse(word){
  var reverseword = "";
  var wordArr = word.split("");
  var wordArrReverse = [];
  for (var i = (wordArr.length-1); i >= 0; i--) {
    wordArrReverse.push(wordArr[i]);
  }
  reverseName = wordArrReverse.join("");
  return reverseName;
}
$(document).ready(function() {
  $(window).resize(function(){
      $("#myHeading").text("Welcome to the ping pong web page!");
    if($(window).width() <= 400){
      $("#myHeading").text("Page not supported at this window size!");
    }
    else if($(window).width() <= 720){
      $("#mysidebarBackground").css("height", submitDivHeightSmall);
    }
    else{
       $("#mysidebarBackground").css("height", formDivHeight);
     }
  });
  $("form#arrayForm").submit(function(){
    event.preventDefault();
    var word = $("#word").val().replace(/\s/g,"");
    word = reverse(word);
    $("#reverseWord").text(word);
  });
  $("form#myForm").submit(function(){
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
      if($(window).width() <= 719){
        $("#mysidebarBackground").css("height", submitDivHeightSmall);
      }
      else{
        $("#mysidebarBackground").css("height", formDivHeight);
      }
      $("#numberList").slideDown(1000);
    }
    else{
      $("#numberList").slideDown(200);
      $("#numberList").append("<p class='tempListItem' style='text-align:center'>" + "Please Enter a positive integer up to 100!" + "</p>");
    }
  });
});
