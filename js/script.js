$(function(){
    // Code 
    // Hide 
    $("#hide").click(function(){
        $(".box").hide(1000)
    })
    // Show 
    $("#show").click(function(){
        $(".box").show(1000)
    })
    // Hide-show 
    $("#hideShow").click(function(){
        $(".box").toggle(1000)
    })
    // FadeIn 
    $("#fadeIn").click(function(){
        $(".box").fadeIn(1000)
    })
    // FadeOut
    $("#fadeOut").click(function(){
        $(".box").fadeOut(1000)
    })
    // SlideUp
    $("#slideUp").click(function(){
        $(".box").slideUp(1000)
    })
    // SlideOut
    $("#slideDown").click(function(){
        $(".box").slideDown(1000)
    })
    // SlideUpDown
    $("#slideUpDown").click(function(){
        $(".box").toggle(1000)
    })
    // AddClass 
    $("#addClass").click(function(){
        $(".box").addClass("boxTwo")
    })
    // RemoveClass 
    $("#removeClass").click(function(){
        $(".box").removeClass("boxTwo")
    })
    // RemoveClass 
    $("#addRemoveClass").click(function(){
        $(".box").toggle("boxTwo")
    })
})
// Countdown
(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "04/22/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());
    ///
    // CounterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });