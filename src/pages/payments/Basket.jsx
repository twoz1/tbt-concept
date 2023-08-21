import '../../styles/payments/Basket.css';
import BasketGoods from './components/Basket/BasketGoods';
import BasketPriceBox from './components/Basket/BasketPriceBox';
import { useContext, useState, useReducer, startTransition } from 'react';
import mockItemsContext from '../items/MockItems';

function reducer(state, action) {
    switch (action.type) {
        case 'Delete': {
            return state.filter((it) => it.name !== action.targetName)
        }
        default: return state;
    };
}

const Basket = () => {

    //useContext로 mock 데이터 받아오기
    const { sArr, gArr } = useContext(mockItemsContext);
    const mockItemsData = [...sArr, ...gArr];

    const [basketItems, dispatch] = useReducer(reducer, mockItemsData);

    //체크박스 구현
    //목데이터에 checkbox를 위한 속성 추가해야 할 것 같음
    // const [parentCheckbox, setParentCheckbox] = useState(false);

    const [parentCheckbox, setParentCheckbox] = useState(false);
       // BasketGoods 컴포넌트의 체크박스 상태를 관리하는 배열
       const [childCheckboxStates, setChildCheckboxStates] = useState(
        mockItemsData.map((item) => ({
            name: item.name,
            isChecked: false,
        }))
    );

    const handleParentCheckboxChange = () => {
        const newParentCheckboxState = !parentCheckbox;
        setParentCheckbox(newParentCheckboxState);

        // BasketGoods 컴포넌트의 체크박스 상태를 변경
        const newChildCheckboxStates = childCheckboxStates.map((item) => ({
            name: item.name,
            isChecked: newParentCheckboxState,
        }));

        setChildCheckboxStates(newChildCheckboxStates);
    };

    const handleChildCheckboxChange = (checkboxName, isChecked) => {
        // BasketGoods 컴포넌트의 체크박스 상태를 업데이트
        const newChildCheckboxStates = childCheckboxStates.map((item) =>
            item.name === checkboxName ? { ...item, isChecked } : item
        );

        setChildCheckboxStates(newChildCheckboxStates);

        if (!isChecked) {
            setParentCheckbox(false);
        } else {
            const allChecked = newChildCheckboxStates.every((item) => item.isChecked);
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

                                        {mockItemsData.slice(0, 4).map((item) => <BasketGoods key={item.name} {...item}
                                             isChecked={childCheckboxStates.find((el) => el.name === item.name)?.isChecked || false}
                                             onChange={(isChecked) => handleChildCheckboxChange(`checkbox${item.name}`, isChecked)}
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

