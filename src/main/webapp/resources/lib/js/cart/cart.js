"use strict";

function searchDB() {
	self.location = 'cartList' + '${pageMaker.makeQuery(1)}'
		+ '&searchType=' + document.getElementById('searchType').value
		+ '&keyword=' + document.getElementById('keyword').value;
} //searchDB()

function keywordClear() {
	if (document.getElementById('searchType').value == 'search_all')
		document.getElementById('keyword').value = '';
}