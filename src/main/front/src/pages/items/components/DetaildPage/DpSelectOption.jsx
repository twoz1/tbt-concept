import usePricing from '../../../customHooks/usePricing';
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useModal from '../../../customHooks/useModal';
import Modal_gotobasket from './Modal_gotobasket';


const DpSelectOption = ({  product_name, product_price, product_img1, product_id }) => {

    
    const { openModal, closeModal, isModal } = useModal();

    //const { product_name, product_price, product_img1 } = ProductListSelected;
    
    const { quantityGoods, changeQuantity, totalPricing } = usePricing(1, product_price);

    const [isLiked, setIsLiked] = useState(false);
    const likedItem = () => {
        setIsLiked(!isLiked);

    }

    const heartIconStyle = {
        color: isLiked ? 'orangered' : 'gray'
    };
    console.log(product_img1);
    return (

        <div className="choice">
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

                

                
                <button className='gotoCart' onClick={() => openModal('gotoCartModal')}>쇼핑백 담기</button>
                {isModal('gotoCartModal') && <Modal_gotobasket closeModal={closeModal} />}
                <button className="likedItem" onClick={likedItem} >
                    <i className="fa-sharp fa-solid fa-heart" style={heartIconStyle} ></i>
                </button>
            </div>
        </div>
    );
}

export default DpSelectOption;