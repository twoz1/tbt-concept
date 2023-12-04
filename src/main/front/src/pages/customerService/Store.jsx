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

    const { kakao } = window;
    const [storeMap, setStoreMap] = useState({ x: 127.108932846326, y: 37.3500951835995 })
    const [infoName, setInfoName] = useState("미금");
    useEffect(() => {
        let mapContainer = document.getElementById('map'), // 지도를 표시할 div 
            mapOption = {
                center: new kakao.maps.LatLng(storeMap.y, storeMap.x), // 지도의 중심좌표
                level: 3, // 지도의 확대 레벨
                mapTypeId: kakao.maps.MapTypeId.ROADMAP // 지도종류
            };

        // 지도를 생성한다 
        let map = new kakao.maps.Map(mapContainer, mapOption);

        // 지도에 마커를 생성하고 표시한다
        let marker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(storeMap.y, storeMap.x), // 마커의 좌표
            map: map // 마커를 표시할 지도 객체
        });

        // 마커 위에 표시할 인포윈도우를 생성한다
        let infowindow = new kakao.maps.InfoWindow({
            content: `<div style="padding:5px;">TBT concept ${infoName}점</div>` // 인포윈도우에 표시할 내용
        });

        // 인포윈도우를 지도에 표시한다
        infowindow.open(map, marker);

    }, [infoName, storeMap])

    const [changeCity, setChangeCity] = useState("");
    const [searchInputText, setSearchInputText] = useState("");

    const [searchState, setSearchState] = useState(false);
    const [searchStore, setSearchStore] = useState([]);

    const cities = [];
    const districts = [];

    // storeList에서 시와 구를 추출하여 각 배열에 저장
    storeList.forEach(store => {
        const address = store.store_address;
        const [city, district] = address.split(' ');
        if (!cities.includes(city)) {
            cities.push(city);
        }
        if (!districts.includes(district)) {
            districts.push(district);
        }
    });

    const [selectedDistricts, setSelectedDistricts] = useState([]);

    const choiceCity = (e) => {
        setSearchInputText("");
        setSearchStore([]);

        const selectedCity = e.target.value;
        setChangeCity(selectedCity);

        const districts = storeList.reduce((acc, store) => {
            const address = store.store_address;
            const [city, district] = address.split(' ');

            if (city === selectedCity && district && !acc.includes(district)) {
                acc.push(district);
            }

            return acc;
        }, []);

        setSelectedDistricts([...new Set(districts)]);
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
            const filterStore = storeList.filter((item) => item.store_id.includes(searchInputText));
            setSearchStore(filterStore);
        };

        const searchAddress = document.getElementById("find_adress").value;

        if (searchAddress) {
            const filterStore2 = storeList.filter((item) => item.store_address.includes(searchAddress));
            setSearchStore(filterStore2);
            console.log(searchAddress);
        }

        if (changeCity == "all") {
            setSearchStore(storeList);
        }
    }

    const resetSearch = () => {
        setSearchState(false);
        setSearchStore([]);
        setChangeCity("");
        setSearchInputText("");
        setInfoName("미금");
        setStoreMap({ x: 127.108932846326, y: 37.3500951835995 });
    }

    return (
        <div className="Store">
            <div className="center m_c">
                <div id="map_wrap">
                    <div id="map"></div>
                    <div className="control">
                        <h3>매장찾기</h3>
                        <label htmlFor="find_name">지점명으로 찾기</label>
                        <input type="text" name="find_name" id="find_name" onChange={searchInput} value={searchInputText} />
                        <span>주소로 찾기</span>
                        <div className="select_box">
                            <select name="find_adress" id="find_adress_city" onChange={choiceCity} value={changeCity}>
                                <option value="">지역선택</option>
                                <option value="all">전체</option>
                                {cities.map((city, index) => (
                                    <option key={index} value={city}>{city}</option>
                                ))}
                            </select>
                            <select name="find_adress" id="find_adress">
                                {changeCity && selectedDistricts.map((district, index) => (
                                    <option key={index} value={district}>{district}</option>
                                ))}
                            </select>
                        </div>


                        <span>검색결과 &#40;{searchStore.length}&#41;건</span>
                        <ul className="find_result_list">
                            {searchState && searchStore.map((it) => { return (<StoreItem key={it.id} {...it} setStoreMap={setStoreMap} setInfoName={setInfoName} />) })}
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