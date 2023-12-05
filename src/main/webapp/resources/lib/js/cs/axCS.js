"use strict";

/*================== QnA1on1 Update ==================*/
function qna1on1Update() {
	alert("수정되었습니다.");
}


/*================== QnA1on1 Delete ==================*/
function axQnA1on1Delete(id) {
	let url = "/master/cs/qna1on1delete/" + id;

	if (confirm("삭제하시겠습니까?")) {
		axios.delete(url
		).then(response => {
			alert("삭제되었습니다.");
			location.reload();

		}).catch(err => {
			if (err.response && err.response.status === 502) {
				alert("[QnA1on1 삭제 오류]" + err.response.data);
			} else {
				alert("[QnA1on1 시스템 오류]" + err.message);
			}
		});
	} else {
		alert("취소되었습니다.");
	}
}

/*================== FAQ Delete ==================*/
function axFaqDelete(id) {
	let url = "/master/cs/faqDelete/" + id;

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

/*================== News Delete ==================*/
function axNewsDelete(id) {
	let url = "/master/cs/newsDelete/" + id;

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

/*================== Pagination ==================*/








