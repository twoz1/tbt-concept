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

    useScrollToTop();
    const [data, setData] = useState([]);
    //const [array, dispatch] = useReducer(arrayReducer, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/product/pListDesc');
                setData(response.data);
                
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
                <New data={data}/>
                <CollectionBanner/>
                <Best data={data}/>
            </div>
            <Video/>
        </div>
    );
};

export default Main;