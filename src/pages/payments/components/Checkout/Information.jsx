import React, { useState } from 'react';

const Information = () => {
    const [showPlaceholder, setShowPlaceholder] = useState(true);

    const handleRadioChange = (event) => {
        if (event.target.value === 'new') {
            setShowPlaceholder(false);
        } else {
            setShowPlaceholder(true);
        }
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
                <table className="information_table">
                    <tbody>
                        <tr>
                            <th>
                                배송지 선택 <span>&#42;</span>
                            </th>
                            <td className="address">
                                <label>
                                    <input type="radio" name="address_radio" value="default" onChange={handleRadioChange} required />
                                    기본주소
                                </label>
                                <label>
                                    <input type="radio" name="address_radio" value="recent" onChange={handleRadioChange} required />
                                    최근 배송지
                                </label>
                                <label>
                                    <input type="radio" name="address_radio" value="new" onChange={handleRadioChange} required />
                                    새로 입력
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                받으시는 분 <span>&#42;</span>
                            </th>
                            <td className="receiver">
                                <input type="text" name="receiver_name" id="receiver_name_read" placeholder={showPlaceholder ? '최*조' : ''} style={{ backgroundColor: showPlaceholder ? '' : 'white' }} required  />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                휴대폰 번호 <span>&#42;</span>
                            </th>
                            <td className="receiver_phone">
                                <select name="receiver_phone" id="receiver_phone_read"  style={{ backgroundColor: showPlaceholder ? '' : 'white' }}>
                                    <option value="010">010</option>
                                    <option value="011">011</option>
                                    <option value="070">070</option>
                                </select>{' '}
                                <span className="hyphen">-</span>
                                <input type="text" minLength="3" maxLength="4" style={{ backgroundColor: showPlaceholder ? '' : 'white' }} required/>
                                <span className="hyphen">-</span>
                                <input type="text" minLength="4" maxLength="4"  style={{ backgroundColor: showPlaceholder ? '' : 'white' }} required/>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                배송 주소 <span>&#42;</span>
                            </th>
                            <td className="customer_address">
                                <input type="text" minLength="7" placeholder={showPlaceholder ? '13630' : ''}  style={{ backgroundColor: showPlaceholder ? '' : 'white' }} required/>
                                <p>
                                    <input type="text" placeholder={showPlaceholder ? '경기도 성남시 분당구 돌마로 46 ' : '상세주소를 입력해주세요.'}   style={{ backgroundColor: showPlaceholder ? '' : 'white' }}required/>
                                    &nbsp; - &nbsp;
                                    <input type="text" placeholder={showPlaceholder ? '광천빌딩 5층' : ''}   style={{ backgroundColor: showPlaceholder ? '' : 'white' }}required/>
                                </p>
                            </td>
                        </tr>
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
