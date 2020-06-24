$(function(){
    setInterval(function(){
        $('.box-rolling-news').first().animate({'margin-top':'-24px'},700,function(){
            $(this).detach().appendTo('.box-rolling-newlist').css('margin-top','0px').removeAttr('style');
        });
    },2000)
})


