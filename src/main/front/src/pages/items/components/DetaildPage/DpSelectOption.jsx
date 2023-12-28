import usePricing from '../../../customHooks/usePricing';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useModal from '../../../customHooks/useModal';
import Modal_gotobasket from './Modal_gotobasket';
import axios from 'axios';
import navigateTo from '../../../config/navigateTo';


const DpSelectOption = ({ product_name, product_price, product_img1, product_id, code, product_stock }) => {

    const { openModal, closeModal, isModal } = useModal();

    const loginUser = JSON.parse(sessionStorage.getItem("loginUser"));
    console.log(loginUser);

    const { quantityGoods, changeQuantity, totalPricing } = usePricing(1, product_price);

    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {

        if (loginUser !== null) {

            axios.get("/user/wdetail", {
                params: {
                    user_id: loginUser.user_id,
                    product_id: product_id,
                }
            }).then(response => {
                if (response.data !== null) {
                    setIsLiked(true);
                } else {
                    setIsLiked(false);
                }
            }).catch(err => {
                if (err.response.status == "502") {
                    alert("[wish detail 입력 오류] 다시 시도하세요.");
                } else {
                    alert("[wish detail 시스템 오류] 잠시 후에 다시 시도하세요." + err.message);
                }
            });
        }
    }, [])

    console.log(isLiked);


    const likedItem = (e) => {

        e.preventDefault();

        if (loginUser !== null) {

            if (!isLiked) {
                axios.post("/user/winsert", {
                    user_id: loginUser.user_id,
                    product_id: product_id,
                })
                    .then(response => {
                        if (response.data == "성공") {
                            setIsLiked(true);
                        }
                    }).catch(err => {
                        if (err.response.status == "502") {
                            alert("[wish insert 입력 오류] 다시 시도하세요.");
                        } else {
                            alert("[wish insert 시스템 오류] 잠시 후에 다시 시도하세요." + err.message);
                        }
                    });
            } else {
                axios.delete("/user/wdelete", {
                    data: {
                        user_id: loginUser.user_id,
                        product_id: product_id,
                    }
                }).then(response => {
                    setIsLiked(false);
                }).catch(err => {
                    if (err.response.status == "502") {
                        alert("[wish delete 입력 오류] 다시 시도하세요.");
                    } else {
                        alert("[wish delete 시스템 오류] 잠시 후에 다시 시도하세요." + err.message);
                    }
                });
            }

        } else {
            alert("로그인 후 이용해주세요.");
            navigateTo("/login");
        }
    }

    const heartIconStyle = {
        color: isLiked ? 'orangered' : 'gray'
    };

    function insertItemToCart(e) {

        e.preventDefault();
        if (product_stock === 0) {
            alert("품절된 상품입니다.")
            return;
        }
        let url = "/rCart/cInsert";

        if (loginUser != null) {
            axios.post(url, {
                user_id: loginUser.user_id,
                product_id: product_id,
                cart_quan: quantityGoods,
            })
                .then(response => {

                    if (response.data == "성공") {
                        openModal('gotoCartModal')
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

    return (

        <div className="choice">
            <form onSubmit={(e) => insertItemToCart(e)}>
                <div className='choice_1'>
                    <span> {product_name} </span>
                    {totalPricing() >= 200000 ?
                        <span>
                            <i className="fa-solid fa-truck"></i>
                            <em>무료배송</em>
                        </span> :
                        null
                    }
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
                    {product_stock === 0 ?
                        <span className='soldOut_btn'
                            onClick={(e) => {
                                    e.preventDefault();}}>
                                SOLD OUT</span>
                        :
                        <Link to={`/checkout`}
                            onClick={(e) => {
                                if (product_stock === 0) {
                                    e.preventDefault();
                                    alert("품절된 상품입니다.")
                                }
                            }}
                            state={{
                                product_id: product_id,
                                quantityGoods: quantityGoods,
                                product_name: product_name,
                                product_img1: product_img1,
                                product_price: product_price,
                                code: code,
                            }} >바로 구매</Link>
                    }

                    <button className='gotoCart'>쇼핑백 담기</button>
                    {isModal('gotoCartModal') && <Modal_gotobasket closeModal={closeModal} />}
                    <button type="button" className="likedItem" onClick={(e) => likedItem(e)} >
                        <i className="fa-sharp fa-solid fa-heart" style={heartIconStyle} ></i>
                    </button>
                </div>
            </form >
        </div >
    );
}

export default DpSelectOption;