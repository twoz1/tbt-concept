import '../styles/components/Main.css';
import ImgSlide from '../pages/items/components/Collection/ImgSlide';
import New from '../pages/items/components/Collection/New';
import CollectionBanner from '../pages/items/components/Collection/CollectionBanner';
import Best from '../pages/items/components/Collection/Best';
import Video from '../pages/items/components/Collection/Video';
import useScrollToTop from '../pages/customHooks/useScrollToTop';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

const Main = () => {

    useScrollToTop();

    const [productDetail, setProductDetail] = useState("");
    const { product_id } = useParams();

    useEffect(() => { 
        const fetchData = async () => {
            try {
                const response = await axios.get('/product/pListDesc');
                setProductDetail(response.data);
                console.log("너 있냐?", response.data);
            } catch (err) {
                alert(`** product db 연결 실패 => ${err.message}`);
                console.log("error");
            }
        };

        fetchData();
    }, []);
    console.log("-->", productDetail);

    const ProductListSelected = productDetail;
    console.log("---", ProductListSelected);

    
    return (
        <div>
            <ImgSlide></ImgSlide>
            <div className="center">
                <New ProductListSelected={ProductListSelected}/>
                <CollectionBanner/>
                <Best/>
            </div>
            <Video/>
        </div>
    );
};

export default Main;