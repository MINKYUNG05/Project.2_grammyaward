onscroll = function() {
    var nVScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if(nVScroll > 40) $("#aside").css("position", "absolute"); 
    else $("#aside").css("position", "relative");
  };