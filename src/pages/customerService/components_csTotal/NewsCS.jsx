import React from 'react';
import '../../../styles/customerService/NewsCS.css';

const NewsCS = () => {
    return (
        <div>
            <section id="news_id" className="news">
                <h3><strong>NEWS</strong></h3>
                <hr />
                <div className="news_list">
                    <p>
                        <a href="#">
                            <strong>&#91;안내&#93;</strong>
                            사이트 점검으로 인한 서비스 일시중지
                        </a>
                    </p>

                    <p>
                        <a href="#">
                            <strong>&#91;안내&#93;</strong>
                            5&#47;29일 대체휴일 고객센터 휴무 안내
                        </a>
                    </p>

                    <p>
                        <a href="#">
                            <strong>&#91;안내&#93;</strong>
                            장바구니 정책 변경 안내
                        </a>
                    </p>
                </div>
            </section>
        </div>//최종div
    )
}

export default NewsCS;