import usePricing from '../../../customHooks/usePricing';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

const DpSelectOption = ({ ProductListSelected }) => {

    const { name, price, imageFront } = ProductListSelected;
    const { quantityGoods, changeQuantity, totalPricing } = usePricing(1, price);

    const [isLiked, setIsLiked] = useState(false);
    const likedItem = () => {
        setIsLiked(!isLiked);

    }

    const heartIconStyle = {
        color: isLiked ? 'orangered' : 'gray'
    };
    console.log(imageFront)
    return (

        <div className="choice">
            <div>
                <span> {name} </span>
                <span>
                    <i className="fa-solid fa-truck"></i>
                    <em>무료배송</em></span>
            </div>
            <div>{price.toLocaleString()}원</div>

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
                <Link to='/checkout' state={{
                    quantityGoods: quantityGoods,
                    price: price,
                    imageFront:imageFront,
                }}>바로 구매</Link>
                <Link to='/cart'>쇼핑백 담기</Link>
                <button onClick={likedItem} >
                    <i className="fa-sharp fa-solid fa-heart" style={heartIconStyle} ></i>
                </button>
            </div>
        </div>
    );
}

export default DpSelectOption;