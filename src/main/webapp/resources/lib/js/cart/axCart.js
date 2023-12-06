"use strict";

/*function searchDB() {
	let url = "/cart/searchCartListA/";

	if (document.getElementById("searchType").value == "search_userId") {
		url = "/cart/searchCartListU/"
	} else if (document.getElementById("searchType").value == "search_prodId") {
		url = "/cart/searchCartListP/"
	}

	url += document.getElementById("keyword").value;

	axios({
		url: url,
		method: 'Get'
	}).then(response => {
		location.reload();
	}).catch(err => {
		if (err.response && err.response.status === 502) {
			alert("[입력 오류]" + err.response.data);
		} else {
			alert("[시스템 오류]" + err.message);
		}
	});

} //searchDB()*/


function keywordClear() {
	if (document.getElementById('searchType').value == 'search_all')
		document.getElementById('keyword').value = '';
}

