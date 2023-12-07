import React from 'react';
import '../../../../styles/members/join_modal03.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AddressForm from './AddressForm';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ChcekOut_address from './ChcekOut_address';



const CheckOut_Modal = ({ closeModal }) => {


    // const addressValue = useSelector(state => state.address.);

   

    const [addressList, setAddressList] = useState([]);
    const [showNewAddressForm, setShowNewAddressForm] = useState(false);

    const NewAddressClick = () => {
        setShowNewAddressForm(true);
    };

    // => 실행과 동시에 처음 한번 서버요청
    useEffect(() => {
        axios
            .get('/address/aList')
            .then((response) => {
                setAddressList(response.data);

                console.log(`** checkdata 서버연결 성공 => ${response.data}`);
            }).catch((err) => {
                alert(`** checkdata 서버연결 실패 => ${err.message}`);
            });
    }, []);


    // const DeleteAddress = (duplicate_user_id) => {
    //     axios
    //         .delete(`/address/aDelete/${duplicate_user_id}`)
    //         .then((response) => {
    //             console.log(`** 주소 삭제 성공 => ${response.data}`);
    //             // 삭제 성공 시, 주소 목록을 갱신
    //             setAddressList((prevAddresses) =>
    //                 prevAddresses.filter((address) => address.duplicate_user_id !== duplicate_user_id)
    //             );
    //         })
    //         .catch((err) => {
    //             alert(`** 주소 삭제 실패 => ${err.message}`);
    //         });
    // }



    console.log("addressList", addressList);
    return (
        <div className="Join_Modal03">
            <div className="modal_cover">
                <div className="modal_3">
                    <h3>주소 선택</h3>

                    <div>
                        <button onClick={NewAddressClick}>
                            배송지 신규 입력
                        </button>
                    </div>
                    {showNewAddressForm ? (
                        <AddressForm />
                    ) : (
                        <form action="">
                            <table className='modal_2_t'>
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
                            <div className='checkout_modal'>
                                <button className='checkout_close_button' type='button' onClick={() => { closeModal('address') }}>닫기</button>
                                {/* <Link to={`/checkout/${addressList.address_name}`} key={addressList.address_name}> 
                                <button className='checkout_submit_button' type='button' onClick={() =>handleAddressBookClick()}>등록</button>
                                </Link>   */}
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CheckOut_Modal;
