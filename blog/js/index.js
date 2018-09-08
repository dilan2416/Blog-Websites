 // 获取第一个图片 节点对象
    var firstImg = $('#ul li').first().clone();
    // 放在 ul 的最后
    $('#ul').append(firstImg).width($('#ul li').length*$('#ul img').width());
 
    var i = 0;
 
    var timer;
 
    autoPlay();
 
    // 下一张
    $('#next').click(function(){
        i++;
        moveImg(i);
    })
 
 
    // 上一张
    $('#prev').click(function(){
        i--;
        moveImg(i);
    })
 
 
    // auto play
    function autoPlay(){
        timer = setInterval(function(){
            i++;
            moveImg(i);
        }, 3000);
 
    }
 
 
    function moveImg(num){
 
        // 如果是最后一张图片我们怎么办
        if(i==$('#ul li').length){
            i = 1;
            $('#ul').css({left:0});
        }
 
        // 是第一张
        if(i==-1){
            i=$('#ul li').length-2;
            $('#ul').css({left:($('#ul li').length-1)*-1040});
        }
 
        // 移动图片
        $('#ul').stop().animate({left:i*-1040},1000);
 
        // 换小点的标记
        if(i==($('#ul li').length-1)){
            $('#ol li').eq(0).addClass('bg').siblings().removeClass('bg');
        }else{
            $('#ol li').eq(i).addClass('bg').siblings().removeClass('bg');
        }
    }
 
 
    $('#disp').mouseover(function(){
        $('#prev').show();
        $('#next').show();
        clearInterval(timer);
    }).mouseout(function(){
        $('#prev').hide();
        $('#next').hide();
        autoPlay();
    })
 
 
    // 点击小图标 跳转到指定的页面
    $('#ol li').click(function(){
        i = $(this).index();   
        moveImg(i);
    })
 