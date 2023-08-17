import '../../../styles/customerService/FAQsearch.css';

const FAQsearch = () => {
    return (
        <div>
            <div className="cs_sch">
                <div className="cs_schLeft">
                    <span>
                        <strong>FAQ<br/>SEARCH</strong>
                    </span>

                    <label htmlFor="schText">
                        <input type="text" id="schText" placeholder="검색 후 문의가 해결되지 않으면 1&#58;1 상담을 이용하세요&#46;" maxLength="26" />
                    </label>

                    <button type="submit" name="button">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>

                <div className="cs_schRight">
                    <div>
                        <span><strong>고객센터 이용안내</strong></span>
                        <p>
                            1566&#45;1234<br />
                            운영시간 &#58; 평일 09&#58;00 &#126; 18&#58;00<br />
                            &#40;점심시간 &#58; 12&#58;30 &#126; 13&#58;30&#41;
                        </p>
                    </div>
                </div>
            </div>
        </div>//최종div
    );
};

export default FAQsearch;
