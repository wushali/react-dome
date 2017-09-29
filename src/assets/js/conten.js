var app = {
    // Application Constructor
     init: function() {

		$('.b_left li .nav_more').each(function(i){
                  var t=i*39+1;

                  $(this).css('top',-t+'px');   
     	});

       this.bindLeftNavHover();

       this.scroll();
     },
   'bindLeftNavHover':function(){
      $('.b_left li').hover(
          function(){
              $('.nav_more').hide();
              $(this).children('.nav_more').show();
              $(this).children('.noline_right').show();
              $(this).children('.cate_list').css('border-bottom','none');


              $(this).prev().children('.cate_list').css('border-bottom','none');
              

             $(this).addClass('list_bd');
          },function(){
              $('.nav_more').hide();

               $(this).children('.noline_right').hide();

               $(this).removeClass('list_bd');



                $(this).children('.cate_list').css('border-bottom',"1px dashed #ccc");

                $(this).prev().children('.cate_list').css('border-bottom',"1px dashed #ccc");

        })
  },
  'scroll':function(){

        // var flag1=true;
        //  var falg2=true;


          // $(window).scroll(function(){
                           
             
          //     if($(this).scrollTop()>300){

          //       if(flag1){
          //            $(".header_hide").animate({
          //          top: 0
          //         }, 500);
          //       }
          //       flag1=false; 
          //       falg2=true;       

          //       console.log($(this).scrollTop())  ; 
             
          //     }else{
          //       flag1=true;

          //       if(falg2){

          //          $(".header_hide").animate({
          //          top: -50
          //         }, 500);

          //       }

          //       falg2=false;

                
          //     }
          // })
  }
   
};




