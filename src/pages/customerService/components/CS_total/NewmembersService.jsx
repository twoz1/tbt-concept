import React from 'react';
import '../../../styles/customerService/NewmembersService.css';

const NewmembersService = () => {
    return (
        <div>
            <section id="newCli_service_id" className="newCli_service">
                <h3><strong>신규 서비스</strong></h3>
                <hr />
                <div className="new_serv_details">
                    <details>
                        <summary>MY&hearts;</summary>
                        <img className='newServIMG' src={require("../../../images/cstotalNewService_01.jpg")} alt="MY사진" />
                    </details>

                    <details>
                        <summary>선물하기</summary>
                        <img className='newServIMG' src={require("../../../images/cstotalNewService_02.jpg")} alt="MY사진" />
                    </details>

                    <details>
                        <summary>상품평 쓰기</summary>
                        <img className='newServIMG' src={require("../../../images/cstotalNewService_03.jpg")} alt="MY사진" />
                    </details>
                </div>
            </section>




        </div>//최종div
    )
}

export default NewmembersService;