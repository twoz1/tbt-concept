import { useState, useEffect } from 'react';
import '../../styles/customerService/Store.css';
import StoreItem from './components/Store/StoreItem';
import useScrollToTop from '../customHooks/useScrollToTop';
import axios from 'axios';

const Store = () => {
    useScrollToTop();

    const [storeList, setStoreList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/store/storeList');
                setStoreList(response.data);

            } catch (err) {
                alert(`** store list db 연동 => ${err.message}`);
            }
        };

        fetchData();
    }, []);
    console.log(storeList);

    const [changeCity, setChangeCity] = useState("");
    const [searchInputText, setSearchInputText] = useState("");

    const [searchState, setSearchState] = useState(false);
    const [searchStore, setSearchStore] = useState([]);

    //const [storeMap, setStoreMap] = useState(storeList[0].storeSrc);

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
            const filterStore = storeList.filter((item) => item.branchName.includes(searchInputText));
            setSearchStore(filterStore);
        };

        // if (!(changeCity === "")) {
        //     const filterStore2 = store.filter((item) => item.storeAdress.includes(changeCity));
        //     setSearchStore(filterStore2);
        // }

        const searchDong = document.getElementById("find_adress_dong").value;

        if (searchDong) {
            const filterStore2 = storeList.filter((item) => item.storeAdress.includes(searchDong));
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
                            {searchState && searchStore.map((it) => { return (<StoreItem key={it.id} {...it} />) })}
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