$(function(){
    $('.bot-img ul li').click(function(){
        var _this=$(this);
        _this.addClass('active').siblings('li').removeClass('active');
        var int=_this.index();
        $('.activeimg').animate({left:int*-500},"slow");
    });
    var list=$('.bot-img ul li').length;
    $('.activeimg').css({
        width:list*500,
    });
    $('.right').click(function(){
        next(list)

    })
    $('.left').click(function(){
        prev(list)
    });

    //自动播放 2秒播放一次 无限循环
    var timer='';
    var num=0;
    timer=setInterval(function(){ //打开定时器
        num++;
        if(num>parseFloat(list)-1){
            num=0;
            $('.activeimg').animate({left:num*-500},"slow");
        }else{
            $('.activeimg').animate({left:num*-500},"slow");
        }
    },2000);
})

