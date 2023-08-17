import '../styles/components/Main.css';
import ImageSlide from './Main/ImageSlide';
import New from '../pages/items/New';
import Collection from '../pages/items/Collection';
import Best from '../pages/items/Best';
import Video from '../pages/items/Video';
import App from './Main/App';

const Main = () => {
    return (
        <div>
            <App></App>
            {/* <ImageSlide></ImageSlide> */}
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
