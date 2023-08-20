import { useState, useEffect } from 'react';
import '../../styles/customerService/Store.css';
import StoreItem from './components/Store/StoreItem';

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
    },
    {
        id: 3,
        branchName: "정자",
        storeAdress: "경기도 성남시 분당구 정자일로 95 (정자동)",
        storeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6342.591495668935!2d127.09530469357911!3d37.35917840000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5835c92bb553%3A0x930d2dc794fa9066!2z64Sk7J2067KE!5e0!3m2!1sko!2skr!4v1692460677906!5m2!1sko!2skr"
    },
    {
        id: 4,
        branchName: "서현",
        storeAdress: "경기 성남시 분당구 황새울로360번길 42 (서현동)",
        storeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.193010326206!2d127.1206840754007!3d37.3852675345024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5802decf215d%3A0xa6d3dd6812c38dd3!2zQUvtlIzrnbzsnpAg67aE64u5!5e0!3m2!1sko!2skr!4v1692460850222!5m2!1sko!2skr"
    },
    {
        id: 5,
        branchName: "용산",
        storeAdress: "서울 용산구 남산공원길 105 (용산동)",
        storeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.1651084841055!2d126.98565167540853!3d37.55117362500975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca257a88e6aa9%3A0x5cf8577c2e7982a5!2zTuyEnOyauO2DgOybjA!5e0!3m2!1sko!2skr!4v1692461311963!5m2!1sko!2skr"
    },
    {
        id: 6,
        branchName: "성남",
        storeAdress: "경기 성남시 중원구 둔촌대로 68 (성남동)",
        storeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.3279382355727!2d127.12379442540266!3d37.42935703198306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca7d554cc286d%3A0xb566d816ca139b39!2z66qo656A7Iuc7J6l!5e0!3m2!1sko!2skr!4v1692461483574!5m2!1sko!2skr"
    }
]

const Store = () => {

    const [store, setStore] = useState(storeList);
    const [changeCity, setChangeCity] = useState("");
    const [searchInputText, setSearchInputText] = useState("");

    const [searchState, setSearchState] = useState(false);
    const [searchStore, setSearchStore] = useState([]);

    const [storeMap, setStoreMap] = useState(storeList[0].storeSrc);

    const choiceCity = (e) => {
        setChangeCity(e.target.value);
        setSearchInputText("");
        setSearchStore([]);
    }

    const searchInput = (e) => {
        setSearchInputText(e.target.value);
        setChangeCity("");
    }

    const clickSearch = () => {
        setSearchState(true);

        if (searchInputText.trim() === "") {
            setSearchStore([]);
        } else {
            const filterStore = store.filter((item) => item.branchName.includes(searchInputText));
            setSearchStore(filterStore);
        };

        // if (!(changeCity === "")) {
        //     const filterStore2 = store.filter((item) => item.storeAdress.includes(changeCity));
        //     setSearchStore(filterStore2);
        // }

        const searchDong = document.getElementById("find_adress_dong").value;

        if (searchDong) {
            const filterStore2 = store.filter((item) => item.storeAdress.includes(searchDong));
            setSearchStore(filterStore2);
            console.log(searchDong);
        }
    }



    const resetSearch = () => {
        setSearchState(false);
        setSearchStore([]);
        setChangeCity("");
        setSearchInputText("");
    }


    return (
        <div className="Store">
            <div className="center m_c">
                <div id="map">
                    <iframe title="map"
                        src={storeMap}
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                    <div className="control">
                        <h3>매장찾기</h3>
                        <label htmlFor="find_name">지점명으로 찾기</label>
                        <input type="text" name="find_name" id="find_name" onChange={searchInput} value={searchInputText} />
                        <span>주소로 찾기</span>
                        <div className="select_box">
                            <select name="find_adress" id="find_adress_city" onChange={choiceCity} value={changeCity}>
                                <option value="">지역선택</option>
                                <option value="서울">서울특별시</option>
                                <option value="성남">성남시</option>
                            </select>
                            <select name="find_adress" id="find_adress_dong">
                                {changeCity === "서울" && <option value="용산구">용산구</option>}
                                {changeCity === "성남" &&
                                    <>
                                        <option value="분당구">분당구</option>
                                        <option value="중원구">중원구</option>
                                    </>}
                            </select>
                        </div>


                        <span>검색결과 &#40;{searchStore.length}&#41;건</span>
                        <ul className="find_result_list">
                            {searchState && searchStore.map((it) => { return (<StoreItem key={it.id} {...it} setStoreMap={setStoreMap} />) })}
                        </ul>
                        <div className="button">
                            <button onClick={resetSearch}>초기화</button>
                            <button onClick={clickSearch}>검색</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Store;