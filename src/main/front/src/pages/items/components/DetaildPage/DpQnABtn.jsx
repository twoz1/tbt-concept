
import useModal from '../../../customHooks/useModal';
import DpProductCSModal from './DpProductCSModal';



const DpQnABtn = ({ product_id }) => {

  const loginUser = JSON.parse(sessionStorage.getItem("loginUser"));
  const { openModal, closeModal, isModal } = useModal();



  return (
    <div>
      {loginUser && loginUser.user_id !== null ?
        <div className="q_a_button">
          <button className='QnA_Button' onClick={() => { openModal('dpProductCSModal') }}>상품문의</button>
          {isModal('dpProductCSModal') && <DpProductCSModal closeModal={closeModal} product_id={product_id} />}
        </div>
        :
        <div></div>
      }
    </div>
  );
}

export default DpQnABtn;