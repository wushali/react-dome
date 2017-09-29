function index(){
    /*购物车滑过效果*/
    var timer = "";
    $(".cart_info_wrap").mouseover(function(){
        $(".empty_cart").show();
    });
    $(".cart_info_wrap").mouseout(function(){
            timer = setTimeout(function(){
            $(".empty_cart").hide();
        },1000); 
    });
    $(".empty_cart").mouseover(function(){
        clearTimeout(timer);
        $(".empty_cart").show();
    });
    $(".empty_cart").mouseout(function(){
        $(".empty_cart").hide();
    });
    
    /*客户服务效果*/
    $("#custom_item").hover(
        function(){
           $(this).find(".ext_mode").show();
        },function(){
           $(this).find(".ext_mode").hide();
        }
    );
    $("#myshop").hover(
        function(){
           $(this).find(".ext_mode").show();
        },function(){
           $(this).find(".ext_mode").hide();
        }
    );
    
    
    /*click事件考虑用toggle*/
    /*$(".selectbox").click(function(){
        $(this).find("ol").toggle(); 
    });*/
    
    
    /*商品*/
   $(".selectbox").hover(
        function(){
           $(this).find("ol").show();
        },function(){
           $(this).find("ol").hide();
        }
    );
   $(".selectbox ol li").hover(function(){
       $(this).css("background","#CECECE");
   },function(){
       $(this).css("background","#fff");
   });
   
   
     /*获取焦点  需做判断，否则失去焦点*/
    
    $(".ts_txt").focus(function(){
    	$(".history-search").show();
        var search_value=$(this).val();
        if(search_value=="夏季时尚套装"){
            $(this).val("");
        }
    });
    $(".ts_txt").blur(function(){
    	$(".history-search").hide();
        var search_value=$(this).val();
        if(search_value==""){
            $(this).val("夏季时尚套装");
        }else{
        	var lihtml = "<li>"  + search_value + "</li>";
        	$(".history-list").append(lihtml);
        }
        
    });
    $(".history-list li").click(function(){
    	$(".ts_txt").val() = $(this).html();
    	$(".history-list").remove(this);
    })
    
    
    /*右侧菜单栏*/
    $(".cloth").hover(function(){
       clearTimeout(timer);
       navhide();
       /*显示*/
       $(this).find("i").show();//边框显示
       var num = $(this).index();
       $(this).parents(".main-left-nav").find(".cloth-more").eq(num).show();//悬浮导航显示
       $(this).css("padding","12px 10px 7px 20px");//动态
    },function(){
        timer = setTimeout(function(){
            navhide();
        },1000);
    });
    
    $(".cloth-more").hover(function(){
        clearTimeout(timer);
    },function(){
        navhide();
    })
    
    function navhide(){
        $(".cloth").find("i").hide();
        $(".cloth").parents(".main-left-nav").find(".cloth-more").hide();
        $(".cloth").css("padding","9px 10px 10px 20px");
    }
    
  	
  	

    /*Initialize Swiper */

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 150,
        centeredSlides: true,
        keyboardControl: true,
        autoplay: 1000,
        autoplayDisableOnInteraction: false,
        
        /*鼠标滑过，动画停止，移出动画继续*/
        hover:$('.swiper-container').hover(function(){
            swiper.stopAutoplay();
            },function(){
            swiper.startAutoplay();
        }),
    });

     
     
     /*倒计时*/
    
    var intDiff = parseInt(600);//倒计时总秒数量
    countdown(intDiff);
    
    /*顶部悬窗*/
    
    $(window).scroll(function(){
        var flag1 = true;
        var flag2 = true;
        var topLine = $(".special_con").offset().top;
        var current = $(this).scrollTop();
        if(current > topLine){
            if(flag1){
                $(".top-stock").slideDown();
            }
            flag1 = false;
            flag2 = true;
        }else{
            if(flag2){
                $(".top-stock").slideUp();
            }
            flag2 = false;
            flag1 = true;
        }
    })
    
    /*右侧悬浮窗*/

    $(window).resize(function(){
        
        
        if(document.body.clientWidth<1100){
            $(".right-stock").addClass("right-stock-active");
            $(".shopping-bar").css("right","30px");
            $(".top-bar").css("right","30px");
        }else{
            $(".right-stock").removeClass("right-stock-active");
            $(".shopping-bar").css("right","0");
            $(".top-bar").css("right","0");
        }
        
        
    })
    

     
     
   
}



/*倒计时函数*/
function countdown(intDiff){
    window.setInterval(function(){
    var day=0,
        hour=0,
        minute=0,
        second=0;//时间默认值        
    if(intDiff > 0){
        //day = Math.floor(intDiff / (60 * 60 * 24));
        hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
        minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
        second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
    }
    if (hour <= 9) hour = '0' + hour;
    if (minute <= 9) minute = '0' + minute;
    if (second <= 9) second = '0' + second;
    //$('#day_show').html(day+"天");
    $('#hour_show').html('<s id="h"></s>'+hour);
    $('#minute_show').html('<s></s>'+minute);
    $('#second_show').html('<s></s>'+second);
    intDiff--;
    }, 1000);
}








