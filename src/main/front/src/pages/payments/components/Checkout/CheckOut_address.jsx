import React, { useEffect, useState } from 'react';
import '../../../../styles/members/join_modal03.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Configstore from '../../../../pages/config/Configstore';
import { setAddress } from '../../../../pages/config/Configstore';

const CheckOut_address = ({closeModal, index, address_name, address_city, address_avc, address_detail, address_phone_num, order_message, duplicate_user_id ,setAddressList}) => {
    const dispatch = useDispatch();
    const loginUser = JSON.parse(sessionStorage.getItem("loginUser"));
    const DeleteAddress = (duplicate_user_id) => {

      if(window.confirm("삭제하시겠습니까?")){

        axios
            .delete(`/address/aDelete/${duplicate_user_id}`)
            .then((response) => {
                alert("삭제되었습니다.");
                setAddressList((prevAddresses) =>
                    prevAddresses.filter((address) => address.duplicate_user_id !== duplicate_user_id)
                );
            })
            .catch((err) => {
                alert(`** 주소 삭제 실패 => ${err.message}`);
            });
        }
    }


    const [selectState, setSelectState] = useState(false);
    const select = () => {
        setSelectState(true);
        dispatch(setAddress({
            address_name: address_name,
            address_avc: address_avc,
            address_city: address_city,
            address_detail: address_detail,
            address_phone_num: address_phone_num,
            order_message:order_message
        }));

        closeModal('address');

    }

    useEffect(() => {

        if (!selectState) {
            dispatch(setAddress(null));
        }
    }, [selectState])


    return (


        <tr key={index}>
            
            <td>{address_name}</td>
            <td>{`${address_avc} ${address_city} ${address_detail}`}</td>
            <td>{address_phone_num}</td>
            <td>{order_message}</td>
            <td>
                <button type='button' onClick={() => select()}>선택</button>
            </td>
            <td>
                <button type='button' onClick={() => DeleteAddress(duplicate_user_id)}>삭제</button>
            </td>
        </tr>


    );
};

export default CheckOut_address;
