const Discount = () => {
    return (
        <div class="discount">
            <h3>할인받기</h3>
            <table>
                <tbody>
                    <tr>
                        {/* <th style="width:150px;">결제 예정금액</th> */}
                        <th>결제 예정금액</th>
                        <td>89&#46;000</td>
                    </tr>
                    <tr>
                        <th>할인 쿠폰</th>
                        <td>
                            <select className="checkout_cou">
                                <option value="default">쿠폰선택</option>
                                <option value="welcome">회원가입 감사 10% 할인 쿠폰</option>
                                <option value="summer">s/s기념 10% 할인 쿠폰</option>
                            </select>
                            <span>원</span>
                        </td>
                    </tr>
                    <tr>
                        <th>T Ponit</th>
                        <td>
                            <input type="text" />
                            <span>P</span>
                            <input type="checkbox" />
                            모두사용하기
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export default Discount;