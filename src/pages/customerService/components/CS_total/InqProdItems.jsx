import React from 'react';
import { useState } from 'react';
import '../../../styles/customerService/InqProdItems.css';
import ResultCS1on1 from './ResultCS1on1';
import useModal from '../../useModal';

const InqProdItems = ({ userEmail, typeInquiry, titleInqProd, contentsInqProd }) => {

    // custom modal hook을 이용한 모달창 구현
    const {openModal, closeModal, isModal} = useModal();

    return (
        <tbody className='tBodyInqProdItems'>
            <tr>
                <td>{typeInquiry}</td>
                <td>{userEmail}</td>
                <td className='curPointer' onClick={() => openModal('titleInqProd')}>{titleInqProd}</td>
                {isModal('titleInqProd') && <ResultCS1on1 closeModal={closeModal}
                                            userEmail={userEmail}
                                            typeInquiry={typeInquiry}
                                            titleInqProd={titleInqProd}
                                            contentsInqProd={contentsInqProd}/>}
            </tr>
        </tbody>
    )
}

export default InqProdItems;