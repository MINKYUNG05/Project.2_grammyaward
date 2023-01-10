onscroll = function() {
    var nVScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if(nVScroll > 1335 && nVScroll < 4275) $("#aside").css("position", "fixed"); 
    else $("#aside").css("position", "absolute");
  };



  $(document).ready(function(){
    $("#news").click(function(){
      $("#blog-news").fadeIn("slow");
      $(this).addClass("btline");
      $("#podcast").removeClass("btline");
    });

    $("#podcast").click(function(){
      $("#blog-podcast").fadeIn("slow");
      $(this).addClass("btline");
      $("#news").removeClass("btline");
    });
  });