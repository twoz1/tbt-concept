import { useState } from "react";

function useModal(){
    const [modal, setModal] = useState([]);

    const openModal = (modalId) => {
        setModal ((prevModal)=>[...prevModal, modalId]);
    }

    const closeModal = (modalId) => {
        setModal((prevModal)=>prevModal.filter((id)=>id !== modalId));
    }

    const isModal = (modalId) => {
        return modal.includes(modalId);
    }

    return {openModal, closeModal, isModal};

}

export default useModal;