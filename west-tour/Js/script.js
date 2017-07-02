$(function(){
	$(".tab-list .tab1 a").click(function(e){
		e.preventDefault();
		$(".tabs .active").removeClass("active");
		$(".tab1").addClass("active");
	});

	$(".tab-list .tab2 a").click(function(e){
		e.preventDefault();
		$(".tabs .active").removeClass("active");
		$(".tab2").addClass("active");
	});

	$(".tab-list .tab3 a").click(function(e){
		e.preventDefault();
		$(".tabs .active").removeClass("active");
		$(".tab3").addClass("active");
	});
});