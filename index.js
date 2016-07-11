var hours, mins, secs, time, totalTime;

var getTime = function () {                         
    hours = parseInt(($(".hours").val()), 10) || 0; 
    mins = parseInt(($(".mins").val()), 10) || 0;   
    secs = parseInt(($(".secs").val()), 10) || 0;
    time = (hours * 3600) + (mins * 60) + secs;
};

var timer = function () {
    if (time > 0) {
        time--;
        $(".animation").css("width", ((time / totalTime) * 100) + "%");
        $(".hours").val(Math.floor(time / 3600) || "--");
        $(".mins").val(Math.floor((time % 3600) / 60) || "--");
        $(".secs").val(time % 60);
    }
    else {
        timeUp();
    }
};

var timerpause = function () {
    $(".animation").removeClass("active");
    $(".clock").removeClass("clock-animation");
};

var timerStart = function () {
    $(".message").html("")
    $(".animation").addClass("active");
    $(".clock").addClass("clock-animation");
    $(".pause").attr("disabled", false);
    var tStart = setInterval(timer, 1000);
    $("body").on("click", ".pause", function () {
        clearInterval(tStart)
        timerpause();
        setTimeout(function () {
            $(".pause").html("Resume").addClass("resume").removeClass("pause");
            $(".reset").attr("disabled", false)
        }, 0);
    });
};

var timeUp = function () {
    $(".message").html("Time up!");
    timerpause();
}

$(".start").on("click", function () {
    getTime();
    totalTime = time;
    $(".start, .reset").attr("disabled", true);
    setTimeout(timerStart(), 0);
})

$(".reset").on("click", function () {
    $(".hours").val("00");
    $(".mins").val("25");
    $(".secs").val("00");
    $(".animation").removeClass("active").css("width", "100%");
    $(".start").attr("disabled", false);
    $(".resume").html("Pause").addClass("pause").attr("disabled", true).removeClass("resume");
});

$("body").on("click", ".resume", function () {
    timerStart();
    setTimeout(function () {
        $(".resume").html("Pause").addClass("pause").removeClass("resume");
        $(".reset").attr("disabled", true);
    }, 0);
});