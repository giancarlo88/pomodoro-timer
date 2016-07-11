var hours, mins, secs, time, totalTime
leadzero = "0"


var timerStop = function (){
  $(".makeInactive").attr("disabled", false);
$("#stop").attr("disabled", true); $("#animation").removeClass("active");
}

var leadZero = function (unit){
  if (unit < 10){
    return "0";
  } else {
    return ""
}
}



var timeUp = function (){
  $("#message").html("Time up!");
  timerStop();
}


var timer = function (){

if (time >0) {
  time --;
  $("#animation").css("width", ((time/totalTime)*100)+"%")
 $("#hours").val(Math.floor(time/3600));
  $("#mins").val(Math.floor((time%3600)/60));
  $("#secs").val(time%60);
 
 
} else {
  timeUp();
} 
  
  /*if (msecs !== 0){
    msecs -= 1
      } else {
        msecs = 100; 
        if (secs !== 0){
          secs -= 1;
          } else {
            secs = 59;
            if (mins !== 0){
            mins -= 1; 
            } else {
              mins = 59;
              if (hours !== 0){
              hours -= 1;
              }
            }  
      }*/
      



//var totalSecs = (hours*3600)+(mins*60)+secs;
}

//console.log(hours+"+"+mins+"+"+secs+"+"+msecs)


$("#start").on("click", function(){
 hours = parseInt(($("#hours").val()), 10) || 0;
  mins = parseInt(($("#mins").val()), 10) || 0; 
  secs = parseInt(($("#secs").val()), 10) || 0; 
   time = (hours*3600)+(mins*60)+secs;
totalTime = time;
$("#message").html("")

$("#animation").addClass("active");
$(".makeInactive").attr("disabled", true);
$("#stop").attr("disabled", false);
  
var tStart = setInterval(timer, 1000);
  $("#stop").on("click", function(){
    clearInterval(tStart);
    $("#start").attr("disabled", false);
    timerStop();
   
});
  $("#reset").on("click", function (){
 $("#hours").val("00");
 $("#mins").val("25");
 $("#secs").val("00"); $("#animation").removeClass("active");
    $("#start").attr("disabled", false);
    clearInterval(tStart);

})

});
  




$(document).ready(function(){


;})
