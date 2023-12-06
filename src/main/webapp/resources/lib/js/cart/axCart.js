"use strict";

/*================== searchDB ==================*/
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

/*================== keywordClear ==================*/
function keywordClear() {
	if (document.getElementById('searchType').value == 'search_all')
		document.getElementById('keyword').value = '';
}

/*================== Cart Delete ==================*/
function axCartDelete(user_id, product_id) {
	let url = "/master/cart/cartDelete/" + user_id + "/" + product_id;

	if (confirm("삭제하시겠습니까?")) {
		axios.delete(url
		).then(response => {
			alert("삭제되었습니다.");
			location.reload();
		}).catch(err => {
			if (err.response && err.response.status === 502) {
				alert("[FAQ 삭제 오류]" + err.response.data);
			} else {
				alert("[FAQ 시스템 오류]" + err.message);
			}
		});
	} else {
		alert("취소되었습니다.");
	}
}

