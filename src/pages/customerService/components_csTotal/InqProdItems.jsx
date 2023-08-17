import React from 'react';
import { useState } from 'react';
import '../../../styles/customerService/InqProdItems.css';
import ResultCS1on1 from './ResultCS1on1';

const InqProdItems = ({ userEmail, typeInquiry, titleInqProd, contentsInqProd }) => {

    const [showPopup1, setShowPopup1] = useState(false);

    const openPopup1 = () => {
        setShowPopup1(true);
    };

    return (
        <tbody className='tBodyInqProdItems'>
            <tr>
                <td>{typeInquiry}</td>
                <td>{userEmail}</td>
                <td className='curPointer' onClick={openPopup1}>{titleInqProd}</td>
                {showPopup1 && <ResultCS1on1 setShowPopup1={setShowPopup1}
                                            userEmail={userEmail}
                                            typeInquiry={typeInquiry}
                                            titleInqProd={titleInqProd}
                                            contentsInqProd={contentsInqProd}/>}
            </tr>
        </tbody>
    )
}

export default InqProdItems;