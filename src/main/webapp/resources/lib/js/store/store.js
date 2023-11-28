"use strict";

window.onload = function(){
    document.getElementById("store_address").addEventListener("click", function(){
        document.getElementById("store_address_detail").value="";
        new daum.Postcode({
            oncomplete: function(data) {
                document.getElementById("store_address").value = data.address;
                document.getElementById("store_address_detail").focus();
            }
        }).open();
    });
}

function storeDelete(id) {
	let url = "/master/store/storedelete/" + id;

	if (confirm("삭제하시겠습니까?")) {
		axios.delete(url
		).then(response => {
			alert("삭제되었습니다.");
			location.reload();
			
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