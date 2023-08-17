import '../styles/components/Main.css';
import ImgSlide from '../pages/items/ImgSlide';
import New from '../pages/items/New';
import Collection from '../pages/items/Collection';
import Best from '../pages/items/Best';
import Video from '../pages/items/Video';

const Main = () => {
    return (
        <div>
            <ImgSlide></ImgSlide>
            <div className="center">
                <New></New>
                <Collection></Collection>
                <Best></Best>
            </div>
            <Video></Video>
        </div>
    );
};

export default Main;
