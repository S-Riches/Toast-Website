/*
this is my first time using jquery, using some very basic code here to display two slideshows.
*/

$("#imageSlideshow > div:gt(0)").hide();
$("#mapSlide > div:gt(0)").hide();
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
setInterval(function(){
    $("#mapSlide > div:first")
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo("#mapSlide");
}, 5000);
