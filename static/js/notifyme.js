$(document).ready(function(){!0===isNewVisitor()&&($(document).ready(function(){$(this).notifyMe("top","info","",$("#notify").html())}),function(a){a.fn.notifyMe=function(b,c,f,g,d,h){a(".notify").remove();c="<section class='notify' data-position='"+b+"' data-notify='"+c+"'><div class='container'><div class='row'><div class='col-md-10' style='padding:10px'><span class='sp_title'>"+f+"</span><span class='notify-content'>"+(g+"</span></div><div class='col-md-2 text-center' style='line-height: 63px;'><a class='notify-close'>OK</a></div></div></div></section>");
a("body").prepend(c);a(".fih-main").after("<div class='accepr_box'><p class='accept_to_chat'>Need support? Please accept cookies and refresh the page :-)</p></div>");var e=a(".notify").outerHeight();"top"==b&&(a(".notify").css("top","-"+e),a(".notify").animate({top:"0px"},d));a(".notify-close").click(function(){"top"==b&&(a(".navbar-fixed-top").animate({top:"0px"}),a(this).parent(".notify").animate({top:"-"+e},d));setTimeout(function(){a(".notify").remove();setCookie("gznotes-visited","true",432E3)},
d+200)})}}(jQuery))});function isNewVisitor(){return!1===getCookie("gznotes-visited")};
