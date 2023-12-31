import React, { useState } from 'react';
import useModal from '../../../customHooks/useModal';
import Join_Modal01 from '../Join/Join_Modal01';
import Join_Modal02 from '../Join/Join_Modal02';
import Join_Modal03 from '../Join/Join_Modal03';
import { useEffect } from 'react';
const JoinCheckbox = () => {


    const { openModal, closeModal, isModal } = useModal();


    const [parentCheckbox, setParentCheckbox] = useState(false);
    const [childCheckboxes, setChildCheckboxes] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
    });

    useEffect(() => {
        // 모든 자식 체크박스가 체크되었는지 확인
        const allChecked = Object.values(childCheckboxes).every(Boolean);
        setParentCheckbox(allChecked);
    }, [childCheckboxes]); // childCheckboxes 상태가 변경될 때마다 useEffect가 실행


    const handleParentCheckboxChange = () => {
        const newParentCheckboxState = !parentCheckbox;
        setParentCheckbox(newParentCheckboxState);

        const newChildCheckboxes = {
            checkbox1: newParentCheckboxState,
            checkbox2: newParentCheckboxState,
            checkbox3: newParentCheckboxState,
            checkbox4: newParentCheckboxState,
        };

        setChildCheckboxes(newChildCheckboxes);
        
    };

    const handleChildCheckboxChange = (e) => {
        const checkboxName = e.target.name;
        const isChecked = e.target.checked;

        setChildCheckboxes({
            ...childCheckboxes,
            [checkboxName]: isChecked,
        });

        if (!isChecked) {
            setParentCheckbox(false);
        } else {
            const allChecked = Object.values(childCheckboxes).every(Boolean);
            setParentCheckbox(allChecked);    
        }
    };

    return (
        <div>
            <div className="general_agreement">
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            checked={parentCheckbox}
                            onChange={handleParentCheckboxChange}
                            name="agree"
                           
                        />{' '}
                        전체 동의합니다.
                    </li>
                    <li>
                        <span id="letter">
                            전체동의는 필수 및 선택정보에 대한 동의도 포함되어 있으며,개별적으로
                            동의를 선택하실 수 있습니다. <br />
                            선택항목에 대한 동의를 거부하는 경우에도 회원가입 서비스는 이용이
                            가능합니다.
                        </span>
                    </li>
                </ul>
            </div>
            <div className="check_agreement">
                <ul>
                    <li className='each_check_agreement'>
                        <div><input
                            type="checkbox"
                            name="checkbox1"
                            checked={childCheckboxes.checkbox1}
                            onChange={handleChildCheckboxChange}
                            required
                        />
                        만 14세 이상입니다.&#40;필수&#41;</div>
                    </li>

                    <li className='each_check_agreement'>
                        <div><input
                            type="checkbox"
                            name="checkbox2"
                            checked={childCheckboxes.checkbox2}
                            onChange={handleChildCheckboxChange}
                            required
                        />
                        이용약관 동의&#40;필수&#41;</div>
                        <button type='button' className='Join_button' onClick={()=>{openModal("joinModal_1")}}>내용보기</button>
                        {isModal("joinModal_1") && <Join_Modal01 closeModal={closeModal}/>}
                    </li>

                    <li className='each_check_agreement'>
                        <div><input
                            type="checkbox"
                            name="checkbox3"
                            checked={childCheckboxes.checkbox3}
                            onChange={handleChildCheckboxChange}
                            required
                        />
                        개인정보 수집 및 이용에 대한 동의&#40;필수&#41;</div>
                        <button type='button' className='Join_button' onClick={()=>{openModal("joinModal_2")}}>내용보기</button>
                        {isModal("joinModal_2") && <Join_Modal02 closeModal={closeModal}/>}
                    </li>

                    <li className='each_check_agreement'>
                        <div><input
                            type="checkbox"
                            name="checkbox4"
                            checked={childCheckboxes.checkbox4}
                            onChange={handleChildCheckboxChange}
                        />
                        개인정보 수집 및 이용안내&#40;선택&#41;</div>
                        <button type='button' className='Join_button' onClick={()=>{openModal("joinModal_3")}}>내용보기</button>
                        {isModal("joinModal_3") && <Join_Modal03 closeModal={closeModal}
                        
                        
                        />}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default JoinCheckbox;