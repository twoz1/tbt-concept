"use strict";


function searchDB() {
    let searchType = document.getElementById("searchType").value;
    let keyword = document.getElementById("keyword").value;
    let currentPage = new URLSearchParams(window.location.search).get('page') || 1;

    axios.get(`/productList?page=${currentPage}&searchType=${searchType}&keyword=${keyword}`)
        .then(response => {
            // 응답 처리 로직
            // 예를 들어, 검색 결과를 화면에 업데이트하는 등의 작업 수행
        })
        .catch(error => {
            // 에러 처리 로직
        });
}

function axProductDelete(id) {
	let url = "/master/product/productdelete/" + id;


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

function previewImage(event, targetId) {
	const reader = new FileReader();
	reader.onload = function() {
		const imgElement = document.getElementById(targetId);
		imgElement.src = reader.result;
	}
	reader.readAsDataURL(event.target.files[0]);
}

function resetImg() {

    document.getElementById('img1').src = "/"+document.getElementById('product_img1').value;
    document.getElementById('img2').src = "/"+document.getElementById('product_img2').value;
    document.getElementById('img3').src = "/"+document.getElementById('product_img3').value;
    document.getElementById('img4').src = "/"+document.getElementById('product_img4').value;
}

