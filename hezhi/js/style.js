// JavaScript Document
$(document).ready(function(){
	/*banner切换*/
	var widthb=$("#list").width();
	var pageb=1;
	var ib=1;
	var numb=$("#listcon img").length;
	var pagemaxb=Math.ceil(numb/ib);
	$("#right").click(function(){
		if(!$("#listcon").is(":animated")){
		if(pageb==pagemaxb){
			$("#listcon").animate({"left":"0"},500);
			pageb=1;
		}else{
			$("#listcon").animate({"left":"-="+widthb+"px"},500);
			pageb++;
			}
		}
	});
	$("#left").click(function(){
		if(!$("#listcon").is(":animated")){
		if(pageb==1){
			$("#listcon").animate({"left":-widthb*(pagemaxb-1)+"px"},500);
			pageb=pagemaxb;
		}else{
			$("#listcon").animate({"left":"+="+widthb+"px"},500);
			pageb--;
			}
		}
	});
	$(".fbspan span").eq(0).addClass("current");
	$(".fbcon").eq(0).show().siblings(".fbcon").hide();
	$(".fbspan span").click(function(){
		numaa=$(this).index();
		$(this).addClass("current").siblings("span").removeClass("current");
		$(".fbcon").eq(numaa).show().siblings(".fbcon").hide();
		});
	$(".alspan span").eq(0).addClass("current");
	$(".anli").eq(0).show().siblings(".anli").hide();
	$(".alspan span").click(function(){
		numbb=$(this).index();
		$(this).addClass("current").siblings("span").removeClass("current");
		$(".anli").eq(numbb).show().siblings(".anli").hide();
		});
});

$(document).ready(function(){
	//var height=$(".smamidcon").height();
	var page=1;
	var i=7;
	var num=$(".xqlist span").length;
	var pagemax=num-i+1;
	$(".xqyou").click(function(){
		if(!$(".xqlist").is(":animated")){
		if(page==pagemax){
			$(".xqlist").animate({"left":"0"},500);
			page=1;
		}else{
			$(".xqlist").animate({"left":"-="+94+"px"},500);
			page++;
			}
		}
	});
	$(".xqzuo").click(function(){
		if(!$(".xqlist").is(":animated")){
		if(page==1){
			$(".xqlist").animate({"left":-94*(pagemax-1)+"px"},500);
			page=pagemax;
		}else{
			$(".xqlist").animate({"left":"+="+94+"px"},500);
			page--;
			}
		}
	});
	$(".xqbigimg img:first").show().siblings("img").hide();
	$(".xqlist span").mouseover(function(){
		number=$(this).index();
		$(".xqbigimg").find("img").eq(number).show().siblings("img").hide();
		});
});


