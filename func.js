/*
this is my first time using jquery, not for the purpose of learning it through and through but instead to be able to read and understand others websites
*/

//backstretch is a jquery library that allows for a responsive background
$("body").backstretch("Landing page/img/background.jpg")

$("#imageSlideshow > div:gt(0)").hide();

//this function goes through each element and fades each element out after 3 seconds
setInterval(function(){
    $("#imageSlideshow > div:first")
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#imageSlideshow');
}, 3000);


//map slide is just a copy of the function above
$("#mapSlide > div:gt(0)").hide();
setInterval(function(){
    $("#mapSlide > div:first")
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo("#mapSlide");
}, 5000);
