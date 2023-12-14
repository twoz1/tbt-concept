import React from 'react';
import { useState, useEffect } from 'react';
import MyWishItem from './MyWishItem';
import axios from 'axios';

const MyWishList = ({ loginUser }) => {

    const [wish, setWish] = useState([]);

    useEffect(() => {

        axios.get("/user/wlist", {
            params: {
                user_id: loginUser.user_id,
            }
        }).then(response => {
            if (response.data !== null) {
                setWish(response.data);
            }
        }).catch(err => {
            if (err.response.status == "502") {
                alert("[wish detail 입력 오류] 다시 시도하세요.");
            } else {
                alert("[wish detail 시스템 오류] 잠시 후에 다시 시도하세요." + err.message);
            }
        });

    }, [])


    const onRemove = targetId => {
        const wishConf = window.confirm("관심상품을 해제하시겠습니까?");
        if (wishConf) {

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
                            <th scope="col">상태</th>
                            <th></th>
                        </tr>
                    </thead>
                    {wish.map((it) => { return (<MyWishItem {...it} onRemove={onRemove} />) })}
                </table>
            </div>
        </div>
    )
}

export default MyWishList;