import '../../../../styles/members/ChcekOut_OrderAVC.css';
import React, { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";

const ChcekOut_OrderAVC = ({ closeModal, props, setcompany, company  }) => {
    const [addressInfo, setAddressInfo] = useState({
        fullAddress: "",
        zonecode: "",
    });
    const complete = (data) => {
        let fullAddress = data.address;
        let extraAddress = "";

        if (data.addressType === "R") {
            if (data.bname !== "") {
                extraAddress += data.bname;
            }
            if (data.buildingName !== "") {
                extraAddress += extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }

        setAddressInfo({
            fullAddress: fullAddress,
            zonecode: data.zonecode,
        });

        props.setcompany({
            ...props.company,
            address: fullAddress,
        });
    };

    return (
        <div className="Join_Modal03">
            <div className="modal_cover">
                <div className="modal_3">
                    <div>
                        <DaumPostcode className="postmodal" autoClose onComplete={complete} />
                    </div>
                </div>
                <div className="checkout_modal">
                    <button className="checkout_close_button" onClick={() => closeModal("ChcekOut_OrderAVC")}>
                        닫기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChcekOut_OrderAVC;

