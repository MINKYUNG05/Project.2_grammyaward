// onscroll = function() {
//     var nVScroll = document.documentElement.scrollTop || document.body.scrollTop;
//     if(nVScroll > 1335 && nVScroll < 4275) $("#aside").css("position", "fixed"); 
//     else $("#aside").css("position", "absolute");
//   };

// mobile menu
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

//팝업열기&닫기
$(function () {
  $('.popup-open').click(function () {
      $('#wrap').css('display', 'block', );
  });

  $('#popup-close').click(function () {
      $('#wrap').css('display', 'none');
  
  });
});


//뉴스&팟캐스트바
  $(document).ready(function(){
    $("#news").click(function(){
      $("#blog-news").fadeIn("slow");
      $("#blog-podcast").hide();
      $(this).addClass("btline");
      $("#podcast").removeClass("btline");
    });

    $("#podcast").click(function(){
      $("#blog-podcast").fadeIn("slow");
      $("#blog-news").hide();
      $(this).addClass("btline");
      $("#news").removeClass("btline");
    });
  });


//사이드바 고정(모바일X)
  $(document).ready(function () {
    $(window).scroll(function () {
        $('#footer3tit').each(function () {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1' }, 700);
            }
        });
    });
});


//마우스오버설정_아티클1
$(document).ready(function(){
  $("#article1").hover(function(){
    $('#article1 img').css('opacity', '0.7');
    $('#article1 span').css('text-decoration', 'underline');

  },function(){
    $('#article1 img').css('opacity', '1');
    $('#article1 span').css('text-decoration', 'none');
  });
});

//마우스오버설정_아티클2
$(document).ready(function(){
  $("#article2").hover(function(){
    $('#article2 img').css('opacity', '0.7');
    $('#article2 span').css('text-decoration', 'underline');

  },function(){
    $('#article2 img').css('opacity', '1');
    $('#article2 span').css('text-decoration', 'none');
  });
});