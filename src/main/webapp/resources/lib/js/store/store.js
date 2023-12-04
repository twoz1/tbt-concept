"use strict";
/*
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
*/

window.onload = function(){
    document.getElementById("store_address").addEventListener("click", function(){
    	document.getElementById("store_address").value="";
        document.getElementById("store_address_detail").value="";
        document.getElementById("store_x").value="";
        document.getElementById("store_y").value="";
        new daum.Postcode({
        oncomplete: function(data) {
            Promise.resolve(data).then(o => {
                const { address } = data;
                
                document.getElementById("store_address").value = address;

                return new Promise((resolve, reject) => {
                    const geocoder = new daum.maps.services.Geocoder();

                    geocoder.addressSearch(address, (result, status) =>{
                        if(status === daum.maps.services.Status.OK){
                            const { x, y } = result[0];

                            resolve({ lat: y, lon: x })
                        }else{
                            reject();
                        }
                    });
                })
            }).then(result => {
            
            	document.getElementById("store_x").value = result.lon;
            	document.getElementById("store_y").value = result.lat;
            });
        },
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