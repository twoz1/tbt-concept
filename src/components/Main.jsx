import '../styles/components/Main.css';
import ImageSlide from './Main/ImageSlide';
import New from './Main/New';
import Collection from './Main/Collection';
import Best from './Main/Best';
import Video from './Main/Video';
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
