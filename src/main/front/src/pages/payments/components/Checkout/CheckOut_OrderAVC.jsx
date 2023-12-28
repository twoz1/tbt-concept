import '../../../../styles/payments/ChcekOut_OrderAVC.css';
import React, { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";

const ChcekOut_OrderAVC = (props) => {

    const complete = (data) => {
        let addressAvc = data.zonecode;
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }

        props.setcompany({
            ...props.company,
            zonecode: addressAvc,
            address: fullAddress,
        });
    };

    return (
        
        <div className="CheckOut_OrderAVC">
            <DaumPostcode className="postmodal" autoClose onComplete={complete}/>
        </div>
    );
};

export default ChcekOut_OrderAVC;
