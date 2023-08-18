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
                            <img src={require('../../images/ssldfjsfksjdfjaslfksajdflskdjf.jpeg')} />
                        </li>
                        <li>
                            <img src={require('../../images/sinitta-leunen-OMFrvnCqmvo-unsplash.jpg')} />
                        </li>
                        <li>
                            <img src={require('../../images/prince-akachi-icu-D9rYM4w-unsplash.jpg')} />
                        </li>
                        <li>
                            <img src={require('../../images/salfkjskfsaflsdjfljk.jpeg')} />
                        </li>
                        <li>
                            <img src={require('../../images/azamat-zhanisov-fy1njZn94BU-unsplash.jpg')} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default Collection;
