"use strict";

function axUserDelete(id) {
	let url = "/master/user/userdelete/" + id;


	if (confirm("삭제하시겠습니까?")) {
		axios.delete(url
		).then(response => {
			alert("삭제되었습니다.");
			location.reload();
			console.log(response.data);
		}).catch(err => {
			if (err.response && err.response.status === 502) {
				alert("[삭제 오류]" + err.response.data);
			} else {
				alert("[시스템 오류]" + err.message);
			}
		});
	} else {
		alert("취소되었습니다.");
	}
}
function axWishDelete(user_id, product_id) {

	let url = `/master/user/wishDelete/${user_id}/${product_id}`;

	if (confirm("삭제하시겠습니까?")) {
		axios.delete(url)
			.then(response => {
				if (response.status === 200) {
					alert("삭제되었습니다.");
					location.reload();
				} else {
					alert("[관심상품 삭제 오류] 삭제 실패");
				}
			})
			.catch(err => {
				if (err.response && err.response.status === 502) {
					alert("[관심상품 삭제 오류] " + err.response.data);
				} else {
					alert("[관심상품 시스템 오류] " + err.message);
				}
			});
	} else {
		alert("취소되었습니다.");
	}
}
