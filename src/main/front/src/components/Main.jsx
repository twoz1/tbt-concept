import '../styles/components/Main.css';
import ImgSlide from '../pages/items/components/Collection/ImgSlide';
import New from '../pages/items/components/Collection/New';
import CollectionBanner from '../pages/items/components/Collection/CollectionBanner';
import Best from '../pages/items/components/Collection/Best';
import Video from '../pages/items/components/Collection/Video';
import useScrollToTop from '../pages/customHooks/useScrollToTop';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Main = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/order/oListDesc');
                setData(response.data);
            } catch (err) {
                alert(`** product db 연결 실패 => ${err.message}`);
            }
        };

        fetchData();
    }, []);


    useScrollToTop();
    
    return (
        <div>
            <ImgSlide></ImgSlide>
            <div className="center">
                <New/>
                <CollectionBanner/>
                <Best/>
            </div>
            <Video/>
        </div>
    );
};

export default Main;