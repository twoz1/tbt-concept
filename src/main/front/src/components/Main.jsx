import '../styles/components/Main.css';
import ImgSlide from '../pages/items/components/Collection/ImgSlide';
import New from '../pages/items/components/Collection/New';
import CollectionBanner from '../pages/items/components/Collection/CollectionBanner';
import Best from '../pages/items/components/Collection/Best';
import Video from '../pages/items/components/Collection/Video';
import useScrollToTop from '../pages/customHooks/useScrollToTop';
import { useEffect, useState, useReducer } from 'react';
import axios from 'axios';

const Main = () => {

    useScrollToTop();
    const arrayReducer = (state, action) => {
        switch (action.type) {
            case "low":
                return state ? [...state].sort((a, b) => a.product_price - b.price) : [];
            case "high":
                return state ? [...state].sort((a, b) => b.price - a.price) : [];
            case "set":
                return action.payload;
            default:
                return state || [];
        }
    };

    const [data, setData] = useState([]);
    const [array, dispatch] = useReducer(arrayReducer, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/product/pSListDesc');
                setData(response.data);
                
            } catch (err) {
                alert(`** product db 연결 실패 => ${err.message}`);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/product/pGListDesc');
                setData(response.data);
                
            } catch (err) {
                alert(`** product db 연결 실패 => ${err.message}`);
            }
        };

        fetchData();
    }, []);
    console.log("-->", data);
    useEffect(() => {
        // 데이터가 업데이트될 때마다 useReducer의 초기 상태를 설정
        dispatch({ type: 'set', payload: data });
    }, [data]);

    const [page] = useState(1);
    const itemsPerPage = 8;
    const startIndex = (page - 1) * itemsPerPage;
    const displayedItemInfo1 = array.slice(startIndex, startIndex + itemsPerPage);
    const displayedItemInfo = array.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div>
            <ImgSlide></ImgSlide>
            <div className="center">
                <New displayedItemInfo1={displayedItemInfo1}/>
                <CollectionBanner/>
                <Best displayedItemInfo={displayedItemInfo}/>
            </div>
            <Video/>
        </div>
    );
};

export default Main;