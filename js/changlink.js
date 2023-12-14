// call back function example
// $('body').hide().fadeIn(4000,function(){alert("done");});
/* how jquery event working */
$('h1').click(function(){
    $(this).text("Hide the image");
    $('img').hide();
    $('body').children('p').slideToggle();
});

// play with  jQuery .each function

// update the image link 
$('img').each(function(){
var path = $(this).attr('src');
var newpath = "img/" + path;
$(this).attr("src",newpath);
console.log(newpath);
});
// update the anchor link ---- all links go to google.com
$('a').each(function(){
$(this).css("text-decoration","line-through");
});