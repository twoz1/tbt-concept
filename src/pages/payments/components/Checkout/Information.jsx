import React, { useState } from 'react';

const Information = () => {
    const [useNewAddress, setUseNewAddress] = useState(false);

    const handleUseNewAddressChange = () => {
        setUseNewAddress(!useNewAddress);
    };

    const handleDefaultAddressChange = () => {
        setUseNewAddress(false);
    };

    return (
        <div>
            <div className="checkout">
                <h3>배송지 정보</h3>
                <p>
                    <span className="color">&#42;</span>필수항목
                </p>
            </div>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>
                                배송지 선택 <span>&#42;</span>
                            </th>
                            <td className="address">
                                <label>
                                    <input type="radio" name="address_radio" required onChange={handleDefaultAddressChange} />
                                    기본주소
                                </label>
                                <label>
                                    <input type="radio" name="address_radio" required onChange={handleDefaultAddressChange} />
                                    최근 배송지
                                </label>
                                <label>
                                    <input type="radio" name="address_radio" required checked={useNewAddress} onChange={handleUseNewAddressChange} />
                                    새로 입력
                                </label>
                            </td>
                        </tr>
                        {useNewAddress && (
                            <>
                                <tr>
                                    <th>
                                        받으시는 분 <span>&#42;</span>
                                    </th>
                                    <td className="receiver">
                                        <input type="text" name="receiver_name" id="receiver_name_read" placeholder="최*조" required />
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        휴대폰 번호 <span>&#42;</span>
                                    </th>
                                    <td className="receiver_phone">
                                        <select name="receiver_phone" id="receiver_phone_read">
                                            <option value="010">010</option>
                                            <option value="011">011</option>
                                            <option value="070">070</option>
                                        </select>{' '}
                                        -
                                        <input type="text" minLength="3" maxLength="4" /> -
                                        <input type="text" minLength="4" maxLength="4" />
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        배송 주소 <span>&#42;</span>
                                    </th>
                                    <td className="customer_address">
                                        <input type="text" minLength="7" />
                                        <p>
                                            <input type="text" placeholder="상세주소를 입력해주세요" />
                                            <input type="text" />
                                        </p>
                                    </td>
                                </tr>
                            </>
                        )}
                        <tr>
                            <th>배송 메시지</th>
                            <td className="message">
                                <input type="text" placeholder="메세지를 입력하세요." />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Information;
