import '../../styles/payments/Basket.css';
import BasketGoods from './components/Basket/BasketGoods';
import BasketPriceBox from './components/Basket/BasketPriceBox';
import { useContext, useState } from 'react';
import mockItemsContext from '../items/MockItems';

const Basket = () => {

    //useContext로 mock 데이터 받아오기
    const {sArr,gArr} = useContext(mockItemsContext);
    const mockItemsData=[...sArr, ...gArr];

    //체크박스 구현
    //목데이터에 checkbox를 위한 속성 추가해야 할 것 같음
    const [parentCheckbox, setParentCheckbox] = useState(false);
    const [childCheckboxes, setChildCheckboxes] = useState({
        checkbox0: false,
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
    });

    const handleParentCheckboxChange = () => {
        const newParentCheckboxState = !parentCheckbox;
        setParentCheckbox(newParentCheckboxState);

        const newChildCheckboxes = {
            checkbox0: newParentCheckboxState,
            checkbox1: newParentCheckboxState,
            checkbox2: newParentCheckboxState,
            checkbox3: newParentCheckboxState,
        };

        setChildCheckboxes(newChildCheckboxes);
    };

    const handleChildCheckboxChange = (checkboxName, isChecked) => {
        setChildCheckboxes({
            ...childCheckboxes,
            [checkboxName]: isChecked,
        });

        if (!isChecked) {
            setParentCheckbox(false);
        } else {
            const allChecked = Object.values(childCheckboxes).every(Boolean);
            setParentCheckbox(allChecked);
        }
    };

    return (
        <div>
            <div className="center m_c">
                <div className="basket_total">
                    <div className="title_route">
                        <h2><strong>SHOPPING BAG</strong></h2>
                        <ul>
                            <li>HOME</li>
                            <li>&nbsp;&gt;&nbsp;</li>
                            <li>SHOPPING BAG</li>
                        </ul>
                    </div>

                    <div className="basket_box">
                        <form action="#">
                            <div className="d_flex">
                                <figure className="basket_table">
                                    <h3>쇼핑백 상품</h3>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>
                                                    <input type="checkbox"
                                                        checked={parentCheckbox}
                                                        onChange={handleParentCheckboxChange}
                                                    />
                                                </th>
                                                <th>상품 정보</th>
                                                <th>수량</th>
                                                <th>상품 가격</th>
                                            </tr>
                                        </thead>

                                        {mockItemsData.slice(0, 4).map((item) => <BasketGoods key={item.id} {...item}
                                                                                isChecked={childCheckboxes[`checkbox${item.id}`]}
                                                                                onChange={(isChecked) => handleChildCheckboxChange(`checkbox${item.id}`, isChecked)}
                                                                                    />)}
                                    </table>

                                    <div className="btn_bottom">
                                        <button type="button">선택상품삭제</button>
                                        <button type="button">쇼핑계속하기</button>
                                    </div>
                                </figure>

                                <BasketPriceBox />
                            </div>


                        </form>
                    </div>
                </div>
            </div >
        </div >//최종div
    );
};

export default Basket;