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

