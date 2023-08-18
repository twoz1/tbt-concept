import { useState } from "react";

const SidePay1 = () => {
    const [totalCount, settotalCount] = useState(89000);
    
    return (
        <div class="side_pay side_pay1">
            <h3>최종결제금액</h3>
            <table>
                <tbody>
                    <tr>
                        <th>총삼품금액</th>
                        <td>{totalCount}</td>
                    </tr>
                    <tr>
                        <th>배송비</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>할인쿠폰</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>T Point</th>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default SidePay1;
