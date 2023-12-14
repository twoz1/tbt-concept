import React from 'react';

const MyWishItem = ({ onRemove, wish_date, product_name }) => {
    return (
        <tbody className="MyWishItem">
            <tr>
                <td>{wish_date}</td>
                <td>
                    <a href="#" className="product">
                        <p>{product_name}</p>
                    </a>
                </td>
                <td><button onClick={() => onRemove()}><i className="fa-sharp fa-solid fa-heart"></i></button></td>
                <td><a href="#">장바구니에 담기&gt;</a></td>
            </tr>
        </tbody>
    )
}

export default MyWishItem;
