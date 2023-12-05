import '../../styles/items/New_goods.css';
import NgoodsGlass from './components/New_goods/NgoodsGlass';
import NgoodsSunGlass from './components/New_goods/NgoodsSunGlass';
import NgoodsSlide from './components/New_goods/NgoodsSlide';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const New_goods = () => {

    // NewGoods Glass/Sunclass DB 요청
    const [pNewGList, setPNewGList] = useState([]);
    const [pNewSList, setPNewSList] = useState([]);

    useEffect(() => {
        let url = "/product/pGListDesc";

        axios.get(url).then(response => {
            setPNewGList(response.data);
            console.log("NewGList 출력 성공" + response.data);
        }).catch(err => {
            if (err.response.status == "502") {
                alert("[NewGList 입력 오류] 다시 시도하세요.");
            } else {
                alert("[NewGList 시스템 오류] 잠시 후에 다시 시도하세요." + err.message);
            }
        });
    }, []);

    useEffect(() => {
        let url = "/product/pSListDesc";

        axios.get(url).then(response => {
            setPNewSList(response.data);
            console.log("NewSList 출력 성공" + response.data);
        }).catch(err => {
            if (err.response.status == "502") {
                alert("[NewSList 입력 오류] 다시 시도하세요.");
            } else {
                alert("[NewSList 시스템 오류] 잠시 후에 다시 시도하세요." + err.message);
            }
        });
    }, []);

    console.log("**pNewGList");
    console.log(pNewGList);



    return (
        <div>
            <div className="center m_c">
                <div className="newThings">
                    <div className="title_route">
                        <h2><strong>NEW</strong></h2>
                        <ul>
                            <li>HOME</li>
                            <li>&nbsp;&gt;&nbsp;</li>
                            <li>NEW</li>
                        </ul>

                        <div className="new_rec">
                            <h3><strong>NEW ITEM FOR YOU</strong></h3>
                            <p>
                                좋아하실 만한 신상품을 추천해 드려요.
                            </p>
                        </div>
                    </div>


                    {/* ======================main - glass====================== */}
                    <div className="new_glass">
                        <h3 className="new_glass_title"><strong>GLASS</strong></h3>
                        <div className="btn_plus">
                            <Link to='/glasses'><i className="fa-sharp fa-light fa-plus"></i></Link>
                        </div>

                        <div className="new_glass_img">
                            <NgoodsGlass pNewGList={pNewGList}/>
                        </div>
                    </div>

                    {/* ======================main - sunglass====================== */}

                    <div className="new_glass">
                        <h3 className="new_glass_title"><strong>SUNGLASS</strong></h3>
                        <div className="btn_plus">
                            <Link to='/sunglasses'><i className="fa-sharp fa-light fa-plus"></i></Link>
                        </div>

                        <div className="new_glass_img">
                            <ul>
                                <NgoodsSunGlass pNewSList={pNewSList} />
                            </ul>
                        </div>
                    </div>

                    {/* ======================main - new_slide_poster====================== */}

                    <div className="new_slide_poster">
                        <p>사진을 누르시면 해당 상품으로 이동됩니다.</p>
                        <NgoodsSlide pNewGList={pNewGList} pNewSList={pNewSList} />
                    </div>

                </div>
            </div>
        </div>//최종div
    );
};

export default New_goods;
