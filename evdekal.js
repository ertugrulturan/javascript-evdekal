

$(function() {
$(".evdekal").hover(function() {
    
var evdekal = $(".evdekal").text();

var ayni = "#EvdeKAL";

if(evdekal==ayni) {
$(".evdekal").text("#HayatEveSığar");
}

});

$(".evdekal").mouseleave(function() {
    
var evdekal2 = $(".evdekal").text();

var ayni2 = "#HayatEveSığar";

if(evdekal2==ayni2) {
$(".evdekal").text("#EvdeKAL");
}

});
      
var baslik = $("title").text();

$(window).blur(function() {
$("title").text("#EvdeKAL");
});

$(window).focus(function() {
$("title").text(baslik);
});
});
