// JavaScript Document
jQuery(document).ready(function(){
	"use strict";
	$('#slider-carousel').caroufredsel({
		responsive:true,
		width:'100%',
		circular:true,
		
		scroll:{
			items:1,
			duration:500,
			pauseOnHover:true
		},
		auto:true,
		item:{
			visible:{
				min:1,
				max:1
			},
			height:"variable"
		},
		pagination:{
			container:".sliderpager",
			pageAnchorBuilder:false
		},
	});
	
	
	$(window).scroll(function(){
		var top = $(window).scrollTop();
			if(top>=60){
				$("header").addClass("second");
			}
			else
				if($("header").addClass("second")){
					$("header").removeClass("second");
				}
	});
	
});