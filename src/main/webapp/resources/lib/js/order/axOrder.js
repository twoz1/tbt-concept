"use strict";

function axOrderDelete(id) {
	let url = "/order/orderlistdelete/" + id;


	if (confirm("삭제하시겠습니까?")) {
		axios.delete(url
		).then(response => {
			alert("취소되었습니다. =>" + response.data);
			location.reload();
			console.log(response.data);
		}).catch(err => {
			if (err.response && err.response.status === 502) {
				alert("[취소 오류]" + err.response.data);
			} else {
				alert("[시스템 오류]" + err.message);
			}
		});
	} else {
		alert("취소되었습니다.");
	}
}
