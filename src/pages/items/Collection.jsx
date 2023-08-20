import '../../styles/items/Collection.css';
const Collection = () => {
    return (
        <div>
            <div className="center m_c">
                <div className="collection">
                    <div className="title_route">
                            <h2>
                                <strong>23&nbsp;S&#47;S&nbsp;COLLECTION</strong>
                            </h2>
                    </div>
                    <ul>
                        <li>
                            <img src={require('../../images/collectionImage01.jpeg')} />
                        </li>
                        <li>
                            <img src={require('../../images/collectionImage02.jpg')} />
                        </li>
                        <li>
                            <img src={require('../../images/collectionImage03.jpg')} />
                        </li>
                        <li>
                            <img src={require('../../images/collectionImage04.jpeg')} />
                        </li>
                        <li>
                            <img src={require('../../images/collectionImage05.jpg')} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default Collection;
