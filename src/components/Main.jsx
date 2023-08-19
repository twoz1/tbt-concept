import '../styles/components/Main.css';
import ImgSlide from '../pages/items/ImgSlide';
import New from '../pages/items/New';
import CollectionBanner from '../pages/items/CollectionBanner';
import Best from '../pages/items/Best';
import Video from '../pages/items/Video';

const Main = () => {
    return (
        <div>
            <ImgSlide></ImgSlide>
            <div className="center">
                <New></New>
                <CollectionBanner></CollectionBanner>
                <Best></Best>
            </div>
            <Video></Video>
        </div>
    );
};

export default Main;