$(function () {
    $('#global').click(function () {
        $('#box9 ul li').removeClass("active");
        $(this).addClass("active");
        
        $("#b91").fadeIn("slow");
        $("#b92").hide();
        $("#b93").hide();
        $("#b94").hide();

    });


    $('#internet').click(function () {
        $('#box9 ul li').removeClass("active");
        $(this).addClass("active");
        
        $("#b92").fadeIn("slow");
        $("#b91").hide();
        $("#b93").hide();
        $("#b94").hide();

    });

    $('#users').click(function () {
        $('#box9 ul li').removeClass("active");
        $(this).addClass("active");                
        $("#b93").fadeIn("slow");
        $("#b91").hide();
        $("#b92").hide();
        $("#b94").hide();

    });

    $('#grammys').click(function () {
        $('#box9 ul li').removeClass("active");
        $(this).addClass("active");
        $("#b91").hide();
        $("#b92").hide();
        $("#b93").hide();
        $("#b94").fadeIn("slow");

    });
});

//*스크롤에 따 나타나는 요소 1슬라이더
$(document).ready(function(){
    $(window).scroll(function(){
        $('.mySwiper').each(function(){
            var bottom_of_element=$(this).offset().top+$(this).outerHeight()/2;
            var bottom_of_window=$(window).scrollTop()+$(window).height();

            if(bottom_of_window>bottom_of_element){
                $(this).animate({'opacity':'1'},700);
            }
        });
    });
});


//*스크롤에 따 나타나는 요소 2슬라이더
$(document).ready(function(){
    $(window).scroll(function(){
        $('#box3_slider').each(function(){
            var bottom_of_element=$(this).offset().top+$(this).outerHeight()/2;
            var bottom_of_window=$(window).scrollTop()+$(window).height();

            if(bottom_of_window>bottom_of_element){
                $(this).animate({'opacity':'1'},700);
            }
        });
    });
});


//*스크롤에 따 나타나는 요소 3슬라이더
$(document).ready(function(){
    $(window).scroll(function(){
        $('#box4_slider').each(function(){
            var bottom_of_element=$(this).offset().top+$(this).outerHeight()/2;
            var bottom_of_window=$(window).scrollTop()+$(window).height();

            if(bottom_of_window>bottom_of_element){
                $(this).animate({'opacity':'1'},700);
            }
        });
    });
});


//*스크롤에 따 나타나는 요소
$(document).ready(function(){
    $(window).scroll(function(){
        $('#box6_slider').each(function(){
            var bottom_of_element=$(this).offset().top+$(this).outerHeight()/2;
            var bottom_of_window=$(window).scrollTop()+$(window).height();

            if(bottom_of_window>bottom_of_element){
                $(this).animate({'opacity':'1'},700);
            }
        });
    });
});


//*스크롤에 따 나타나는 요소
$(document).ready(function(){
    $(window).scroll(function(){
        $('#box5_title').each(function(){
            var bottom_of_element=$(this).offset().top+$(this).outerHeight()/2;
            var bottom_of_window=$(window).scrollTop()+$(window).height();

            if(bottom_of_window>bottom_of_element){
                $(this).animate({'opacity':'1'},700);
            }
        });
    });
});


//*스크롤에 따 나타나는 요소
$(document).ready(function(){
    $(window).scroll(function(){
        $('#box7_title').each(function(){
            var bottom_of_element=$(this).offset().top+$(this).outerHeight()/2;
            var bottom_of_window=$(window).scrollTop()+$(window).height();

            if(bottom_of_window>bottom_of_element){
                $(this).animate({'opacity':'1'},700);
            }
        });
    });
});
