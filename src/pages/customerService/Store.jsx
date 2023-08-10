import '../../styles/customerService/Store.css';

const Store = () => {
    return (
        <div className="Store">
            <div className="center m_c">
                <div id="map">
                    <iframe title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1585.848637893303!2d127.10651099681853!3d37.34967497890743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b59c702bb5bd5%3A0xf4c1cd6ac6561210!2z6re466aw7Lu07ZOo7YSw7JWE7Lm0642w66-4IOyEseuCqOu2hOuLueygkA!5e0!3m2!1sko!2skr!4v1687157865622!5m2!1sko!2skr"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                    <div className="control">
                        <h3>매장찾기</h3>
                        <form action="#">
                            <label for="find_name">지점명으로 찾기</label>
                            <input type="text" name="find_name" id="find_name" />

                            <span>주소로 찾기</span>
                            <div className="select_box">
                                <select name="find_adress" id="find_adress_city">
                                    <option value="seoul">서울특별시</option>
                                    <option value="seongnam">성남시</option>
                                </select>
                                <select name="find_adress" id="find_adress_dong">
                                    <option value="gumi">구미동</option>
                                    <option value="pangyo">판교동</option>
                                </select>
                            </div>


                            <span>검색결과 &#40;2&#41;건</span>
                            <ul className="find_result_list">
                                <li><a href="#">
                                    <strong>TBT concept 미금점</strong>
                                    <p>
                                        경기도 성남시 분당구 구미동 123-123 건물 3층 305호
                                    </p>
                                </a>
                                </li>
                                <li><a href="#">
                                    <strong>TBT concept 판교점</strong>
                                    <p>
                                        경기도 성남시 수정구
                                    </p>
                                </a>
                                </li>
                            </ul>
                            <div className="button">
                                <button type="reset">초기화</button>
                                <button>검색</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Store;