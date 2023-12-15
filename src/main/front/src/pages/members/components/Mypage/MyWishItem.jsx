import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useModal from '../../../customHooks/useModal';
import Modal_gotobasket from '../../../items/components/DetaildPage/Modal_gotobasket';


const MyWishItem = ({ wish_date, product_id, product_name, user_id, product_img1 }) => {

    const { openModal, closeModal, isModal } = useModal();

    function insertItemToCart(e) {

        e.preventDefault();

        let url = "/rCart/cInsert";

        if (user_id !== null) {
            axios.post(url, {
                user_id: user_id,
                product_id: product_id,
                cart_quan: 1,
            })
                .then(response => {

                    if (response.data == "성공") {
                        openModal('gotoCartModal');
                    } else {
                        alert("장바구니 담기 실패");
                    }
                }).catch(err => {
                    if (err.response.status == "502") {
                        alert("[cart 입력 오류] 다시 시도하세요.");
                    } else {
                        alert("[cart 시스템 오류] 잠시 후에 다시 시도하세요." + err.message);
                    }
                });
        } else {
            alert("로그인 후 이용해주세요.");
        }
    }

    const onRemove = (e) => {

        e.preventDefault();
        const wishConf = window.confirm("관심상품을 해제하시겠습니까?");
        if (wishConf) {

            axios.delete("/user/wdelete", {
                data: {
                    user_id: user_id,
                    product_id: product_id,
                }
            }).then(response => {

                if (response.data == "삭제성공") {
                    alert("관심 상품이 해제되었습니다.");
                    window.location.reload();
                }
            }).catch(err => {
                if (err.response.status == "502") {
                    alert("[wish delete 입력 오류] 다시 시도하세요.");
                } else {
                    alert("[wish delete 시스템 오류] 잠시 후에 다시 시도하세요." + err.message);
                }
            });
        }
    };


    return (
        <tbody className="MyWishItem">
            <tr>
                <td>{wish_date}</td>
                <td>
                    <img src={require(`../../../../images/${product_img1}`)} alt={product_name} />
                    <Link to={`/detail/${product_id}`}>{product_name}</Link>
                </td>
                <td><button onClick={(e) => onRemove(e)}><i className="fa-sharp fa-solid fa-heart"></i></button></td>
                <td>
                    <button onClick={e => insertItemToCart(e)}>장바구니에 담기&gt;</button>
                    {isModal('gotoCartModal') && <Modal_gotobasket closeModal={closeModal} />}
                </td>
            </tr>
        </tbody>
    )
}

export default MyWishItem;
