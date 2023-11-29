import '../../../../styles/members/join_modal03.css';

const CheckOut_Modal = ({closeModal}) => {
    return (
        <div className="Join_Modal03">
            <div className="modal_cover">
                <div className="modal_3">
                    <h3>주소 선택</h3>

                    <form action="">
                    <table className='modal_2_t'>
                        <tr>
                            <th>받으시는분</th>
                            <th>주소</th>
                            <th>연락처</th>
                        </tr>
                        <tr>
                    
                        </tr>
                    </table>
                    <div className='checkout_modal'>
                        <button className='checkout_close_button' onClick={()=>{closeModal('joinModal_2')}}>닫기</button>
                        <button className='checkout_submit_button' type='button'>등록</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckOut_Modal;