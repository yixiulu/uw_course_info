/* global $ */
$(".fa-plus").click(function(){
    $(".classInfo").fadeToggle(500, function(){
        $(this).toggleClass("detailsDisplay");
    });
});

$(".fa-plus-circle").click(function(){
    $(".details").fadeToggle(500, function(){
        $(this).toggleClass("detailsDisplay");
    });
});