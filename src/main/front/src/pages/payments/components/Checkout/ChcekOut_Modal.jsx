
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddressForm from './AddressForm';
import ChcekOut_address from './ChcekOut_address';
import useModal from "../../../customHooks/useModal";

const CheckOut_Modal = ({ closeModal }) => {
    const { openModal, isModal } = useModal();

    const [addressList, setAddressList] = useState([]);
    const [showNewAddressForm, setShowNewAddressForm] = useState(false);

    const newAddressClick = () => {
        setShowNewAddressForm(true);
    };

    useEffect(() => {
        axios
            .get('/address/aList')
            .then((response) => {
                setAddressList(response.data);
                console.log(`** checkdata 서버연결 성공 => ${response.data}`);
            })
            .catch((err) => {
                alert(`** checkdata 서버연결 실패 => ${err.message}`);
            });
    }, []);

    return (
        <div className="Join_Modal03">
            <div className="modal_cover">
                <div className="modal_3">
                    <h3>주소 선택</h3>
                    <div>
                        <button type="button" onClick={() => newAddressClick()}>
                            배송지 신규 입력
                        </button>
                        {/* {isModal("addressModal") && <AddressForm closeModal={closeModal} />} */}
                    </div>

                    {showNewAddressForm ? (
                        <AddressForm />
                    ) : (
                        <React.Fragment>

                        <form action="">
                            <table className="modal_2_t">
                                <thead>
                                    <tr>
                                        <th>받으시는분</th>
                                        <th>주소</th>
                                        <th>연락처</th>
                                        <th>주문 메시지</th>
                                        <th>선택</th>
                                        <th>관리</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {addressList.map((address, index) => (
                                        <ChcekOut_address key={index} {...address} closeModal={closeModal} setAddressList={setAddressList} />
                                    ))}
                                </tbody>
                            </table>
                            <div className="checkout_modal">
                                <button className="checkout_close_button" type="button" onClick={() => closeModal("address")}>
                                    닫기
                                </button>
                            </div>
                        </form>
                        </React.Fragment>
                    )}

                </div>
            </div>
        </div>
    );
};

export default CheckOut_Modal;