import usePricing from '../../../customHooks/usePricing';
import { useContext, useState } from 'react';

const DpSelectOption = ({ ProductListSelected }) => {

    const { name, price } = ProductListSelected;
    const { quantityGoods, changeQuantity, totalPricing } = usePricing(1, price);

    const [isLiked, setIsLiked] = useState(false);
    const likedItem = () => {
        setIsLiked(!isLiked);

    }

    const heartIconStyle = {
        color: isLiked ? 'orangered' : 'gray'
    };

    return (

        <div className="choice">
            <div>
                <span> {name} </span>
                <span>
                    <i className="fa-solid fa-truck"></i>
                    <em>무료배송</em></span>
            </div>
            <div>{price}</div>

            <div className="total">
                <strong>TOTAL</strong>
                <input type="number"
                    min={1}
                    max={10}
                    value={quantityGoods}
                    onChange={changeQuantity} />

                <span>{totalPricing()}</span>

            </div>

            <div className="choice_button">
                <a href="">바로 구매</a>
                <a href="">쇼핑백 담기</a>
                <button onClick={likedItem} >
                    <i className="fa-sharp fa-solid fa-heart" style={heartIconStyle} ></i>
                </button>
            </div>
        </div>
    );
}

export default DpSelectOption;