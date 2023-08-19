import { useState } from 'react';
import '../../styles/customerService/Store.css';
import StoreItem from './StoreItem';

const storeList = [
    {
        id: 0,
        branchName: "미금",
        storeAdress: "경기 성남시 분당구 돌마로46 5층 (구미동)",
        storeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1585.848637893303!2d127.10651099681853!3d37.34967497890743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b59c702bb5bd5%3A0xf4c1cd6ac6561210!2z6re466aw7Lu07ZOo7YSw7JWE7Lm0642w66-4IOyEseuCqOu2hOuLueygkA!5e0!3m2!1sko!2skr!4v1687157865622!5m2!1sko!2skr"
    },
    {
        id: 1,
        branchName: "서울",
        storeAdress: "서울 용산구 한강대로 405 (동자동)",
        storeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.97642454664!2d126.96842282540871!3d37.555619224754764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca266e3947003%3A0xe7be97c172b7af6a!2z7ISc7Jq47Jet!5e0!3m2!1sko!2skr!4v1692432954117!5m2!1sko!2skr"
    },
    {
        id: 2,
        branchName: "판교",
        storeAdress: "경기도 성남시 분당구 판교역로146번길 20 (백현동)",
        storeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1844.4330919534216!2d127.11039328002813!3d37.392711671362775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b585b10f7d4eb%3A0x23cd030dd3635aea!2z7ZiE64yA67Cx7ZmU7KCQIO2MkOq1kOygkA!5e0!3m2!1sko!2skr!4v1692433176597!5m2!1sko!2skr"
    }
]

const Store = () => {

    const [store, setStore] = useState(storeList);
    const [changeDong, setChangeDong] = useState("서울");

    const [searchstate, setSearchstate] = useState(false);

    const chioceDong = (e) => {
        setChangeDong(e.target.value);
    }

    const clickSearch = () => {
        setSearchstate(true);

        const filterStore = () => {
            return store.filter
        }
    }

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
                        <label htmlFor="find_name">지점명으로 찾기</label>
                        <input type="text" name="find_name" id="find_name" />
                        <span>주소로 찾기</span>
                        <div className="select_box">
                            <select name="find_adress" id="find_adress_city" onChange={chioceDong} value={changeDong}>
                                <option value="서울">서울특별시</option>
                                <option value="성남">성남시</option>
                            </select>
                            <select name="find_adress" id="find_adress_dong">
                                {changeDong === "서울" &&
                                    <option value="동자">동자동</option>}
                                {changeDong === "성남" &&
                                    <>
                                        <option value="미금">구미동</option>
                                        <option value="판교">백현동</option>
                                    </>}
                            </select>
                        </div>


                        <span>검색결과 &#40;2&#41;건</span>
                        <ul className="find_result_list">
                            {store.map((it) => { return (<StoreItem key={it.id} {...it} />) })}
                        </ul>
                        <div className="button">
                            <button type="reset">초기화</button>
                            <button onClick={clickSearch}>검색</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Store;