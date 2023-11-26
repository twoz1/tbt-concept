"use strict";

window.onload = function(){
    document.getElementById("store_address").addEventListener("click", function(){
        //카카오 지도 발생
        new daum.Postcode({
            oncomplete: function(data) {
                document.getElementById("store_address").value = data.address;
                document.getElementById("store_tel").focus();
            }
        }).open();
    });
}

