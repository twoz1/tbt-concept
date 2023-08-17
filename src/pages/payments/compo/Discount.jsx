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
                            <input type="text" placeholder="쿠폰을 사용해보세요." />
                            <span>원</span>
                            <a href="./modal/modal_3.html">쿠폰사용조회하기</a>
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