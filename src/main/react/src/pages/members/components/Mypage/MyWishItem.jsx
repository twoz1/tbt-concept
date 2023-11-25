import React from 'react';

const MyWishItem = ({onRemove,id,wishDate,wishName,wishTitle,wishColor}) => {
    return (
        <tbody className="MyWishItem">
            <tr>
                <td>{wishDate}</td>
                <td>
                    <a href="#" className="product">
                        <strong>{wishName}</strong>
                        <p>{wishTitle}</p>
                    </a>
                </td>
                <td>{wishColor}</td>
                <td><button onClick={() => onRemove(id)}><i className="fa-sharp fa-solid fa-heart"></i></button></td>
                <td><a href="#">장바구니에 담기&gt;</a></td>
            </tr>
        </tbody>
    )
}

export default MyWishItem;
