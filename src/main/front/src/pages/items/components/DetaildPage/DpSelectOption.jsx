import usePricing from '../../../customHooks/usePricing';
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useModal from '../../../customHooks/useModal';
import Modal_gotobasket from './Modal_gotobasket';
import axios from 'axios';


const DpSelectOption = ({  product_name, product_price, product_img1, product_id }) => {

    const { openModal, closeModal, isModal } = useModal();
   
    const loginUser = JSON.parse(sessionStorage.getItem("loginUser"));

    const { quantityGoods, changeQuantity, totalPricing } = usePricing(1, product_price);

    const [isLiked, setIsLiked] = useState(false);
    const likedItem = () => {
        setIsLiked(!isLiked);
    }

    const heartIconStyle = {
        color: isLiked ? 'orangered' : 'gray'
    };

    function insertItemToCart(e) {

        e.preventDefault();

        let url = "/rCart/cInsert";

        if (loginUser != null) {
            axios.post(url, {
                user_id: loginUser.user_id,
                product_id: product_id,
                cart_quan:quantityGoods,
            })
                .then(response => {

                    if (response.data == "성공") {
                        openModal('gotoCartModal')
                    } else {
                        alert("장바구니 담기 실패");
                    }
                }).catch(err => {
                    if (err.response.status == "502") {
                        alert("[입력 오류] 다시 시도하세요.");
                    } else {
                        alert("[시스템 오류] 잠시 후에 다시 시도하세요." + err.message);
                    }
                });
        } else {
            alert("로그인 후 이용해주세요.");
        }
    }

    return (

        <div className="choice">
            <form onSubmit={(e) => insertItemToCart(e)}>
                <div className='choice_1'>
                    <span> {product_name} </span>
                    <span>
                        <i className="fa-solid fa-truck"></i>
                        <em>무료배송</em></span>
                </div>
                <div className='choice_2'>
                {typeof product_price === 'number' && (
                <span>{product_price.toLocaleString()}원</span>
                )}
                </div> 

                <div className="total">
                    <strong>TOTAL</strong>
                    <input type="number"
                        min={1}
                        max={10}
                        value={quantityGoods}
                        name="cart_quan"
                        id="cart_quan"
                        onChange={changeQuantity} />


                    <span>{totalPricing().toLocaleString()}원</span>
                </div>

                <div className="choice_button">
                    <Link to={`/checkout`} 
                    state={{
                        product_id: product_id,
                        quantityGoods: quantityGoods,
                        product_name: product_name,
                        product_img1: product_img1,
                        product_price: product_price,
                    }} >바로 구매</Link>

                    <button className='gotoCart'>쇼핑백 담기</button>
                    {isModal('gotoCartModal') && <Modal_gotobasket closeModal={closeModal} />}
                    <button type="button" className="likedItem" onClick={likedItem} >
                        <i className="fa-sharp fa-solid fa-heart" style={heartIconStyle} ></i>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default DpSelectOption;