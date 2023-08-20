import '../styles/components/Main.css';
import ImgSlide from '../pages/items/components/Collection/ImgSlide';
import New from '../pages/items/components/Collection/New';
import CollectionBanner from '../pages/items/components/Collection/CollectionBanner';
import Best from '../pages/items/components/Collection/Best';
import Video from '../pages/items/components/Collection/Video';

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