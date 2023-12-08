
import '../../styles/items/Glasses.css'
import useScrollToTop from '../customHooks/useScrollToTop';
import SearchBItemsList from './components/SearchBItemsList';

const SearchBItems = () => {
    useScrollToTop();

    return (
        <div className='Glasses'>
            <div className="center m_c">
                <div className="title_route">
                    <h2><strong>Search</strong></h2>
                    <ul>
                        <li>HOME</li>
                        <li>&nbsp;&gt;&nbsp;</li>
                        <li>검색결과</li>
                    </ul>
                </div>

                <SearchBItemsList />
            </div>
        </div>
    );
}

export default SearchBItems;



