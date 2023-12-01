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
    const [sdata, setData] = useState([]);
    const [gdata, setData1] = useState([]);
    //const [array, dispatch] = useReducer(arrayReducer, []);

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
                setData1(response.data);
                
            } catch (err) {
                alert(`** product db 연결 실패 => ${err.message}`);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <ImgSlide></ImgSlide>
            <div className="center">
                <New sdata={sdata}/>
                <CollectionBanner/>
                <Best gdata={gdata}/>
            </div>
            <Video/>
        </div>
    );
};

export default Main;