import React from 'react';
import { useState, useEffect } from 'react';
import MyWishItem from './MyWishItem';
import axios from 'axios';
import Pagination from '../../../customHooks/Pagination';

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

    // pagination 구현
    const [currentPage, setCurrentPage] = useState(1);  // 현재 페이지 번호
    const listPerPage = 3;  // 페이지 당 게시글 개수
    const totalPages = Math.ceil(wish.length / listPerPage);    // 전체 페이지 번호

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const getPaginatedData = () => {
        const startIndex = (currentPage - 1) * listPerPage;
        const endIndex = startIndex + listPerPage;
        return wish.slice(startIndex, endIndex);
    };


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

                    {getPaginatedData().length == 0 ? <tbody>
                        <tr>
                            <td colSpan={4}>추가한 관심 상품이 없습니다.</td>
                        </tr>
                    </tbody> :
                        getPaginatedData().map((it) => { return (<MyWishItem {...it} user_id={loginUser.user_id} />) })}
                </table>
                {getPaginatedData().length !== 0 ? (
                    <div>
                        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}></Pagination>
                    </div>
                ) : <div></div>}


            </div>
        </div>
    )
}

export default MyWishList;