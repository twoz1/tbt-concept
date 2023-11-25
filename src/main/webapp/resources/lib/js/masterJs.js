"use strict";

/*
function loadPage(page) {
	$.ajax({
		url: page,
		type: 'GET',
		success: function(data) {
			$('#master_main').html(data);
			window.history.replaceState({}, '', page);
		},
		error: function() {
			$('#master_main').html('요청을 처리할 수 없습니다.');
		}
	});
}
*/

$(function slide(){
	
	$(".master_gnb > li").mouseenter(function(){
		$(this).children("ul").stop().slideDown();
	});
	
	$(".master_gnb > li").mouseleave(function(){
		$(this).children("ul").stop().slideUp();
	});

});
	
