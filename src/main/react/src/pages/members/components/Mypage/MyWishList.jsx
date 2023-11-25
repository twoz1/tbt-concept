import React from 'react';
import { useState } from 'react';
import MyWishItem from './MyWishItem';

const wishList = [
    {
        id: 0,
        wishDate: "2023-01-01",
        wishName: "antonCrystal",
        wishTitle: "sunglass N-01 시리즈 black,white,navy",
        wishColor: "Black"
    },
    {
        id: 1,
        wishDate: "2023-01-01",
        wishName: "antonCrystal",
        wishTitle: "sunglass N-01 시리즈 black,white,navy",
        wishColor: "Black"
    }
]

const MyWishList = () => {

    const [wish, setWish] = useState(wishList);

    const onRemove = targetId => {
        const wishConf = window.confirm("관심상품을 해제하시겠습니까?");
        if (wishConf) {
            setWish(wish.filter((wish) => wish.id !== targetId));
            alert("관심상품이 해제되었습니다.");
        };
    }

    return (
        <div className="MyWishList">
            <div className="wishlist cover">
                <h3>관심 상품</h3>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">관심등록일</th>
                            <th scope="col">상품명</th>
                            <th scope="col">옵션</th>
                            <th scope="col">상태</th>
                            <th></th>
                        </tr>
                    </thead>
                    {wish.map((it) => { return (<MyWishItem key={it.id}{...it} onRemove={onRemove} />) })}
                </table>
            </div>
        </div>
    )
}

export default MyWishList;