//Global Variables
var formDivHeight = 290;
var submitDivHeightSmall = 150;

//Business Logic
function pingpong(numberEntered){
  if (numberEntered % 15 == 0){
    return "ping-pong";
  }
  else if(numberEntered % 3 == 0){
    return "ping";
  }
  else if (numberEntered % 5 == 0){
    return "pong";
  }
  else{
    return numberEntered;
  }
};
function reverse(word){
  var reverseWord = "";
  var wordArr = word.split("");
  var wordArrReverse = [];
  for (var i = (wordArr.length-1); i >= 0; i--) {
    wordArrReverse.push(wordArr[i]);
  }
  reverseWord = wordArrReverse.join("");
  return reverseWord;
}

function calcDivHeight(numberEntered){
  formDivHeight += (20 * (numberEntered - 1));
}

function validateInput(number){
  if(101 > number && number > 0 ){
    return true;
  }
  else {
    return false;
  }
}
//User interface logic
$(document).ready(function() {
  $(window).resize(function(){
    if(formDivHeight == 290){
      if($(window).width() <= 720){
        $("#mysidebarBackground").css("height", submitDivHeightSmall);
      }
      else{
         $("#mysidebarBackground").css("height", formDivHeight);
       }
   }
   else{
     if($(window).width() <= 703){
       $("#mysidebarBackground").css("height", submitDivHeightSmall);
     }
     else{
        $("#mysidebarBackground").css("height", formDivHeight);
      }
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
    $(".tempListItem").remove();
    $("#numberList").hide();
    $("#myFormBackground").css("height", formDivHeight);
    $("#mysidebarBackground").css("height", formDivHeight);
    var numberEntered = parseInt($("#numberEntered").val());
    var validInput = validateInput(numberEntered);
    if(validInput){
      calcDivHeight(numberEntered);
      for (var i = 1; i <= numberEntered; i++){
        $("#numberList").append("<li class='tempListItem'>" + pingpong(i) + "</li>");
      }
      $("#myFormBackground").css("height", formDivHeight);
      if($(window).width() <= 720){
        $("#mysidebarBackground").css("height", submitDivHeightSmall);
      }
      else{
        $("#mysidebarBackground").css("height", formDivHeight);
      }
      $("#numberList").slideDown(50*numberEntered);
    }
    else{
      $("#numberList").slideDown(200);
      $("#numberList").append("<p class='tempListItem' style='text-align:center'>" + "Please Enter a positive integer up to 100!" + "</p>");
    }
  });
});
