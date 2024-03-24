import React from 'react';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../app/features/modalSlice';
import FileInput from './FileInput';

const CustomModal = () => {

    const modalIsOpen = useSelector((state) => state.modal.isOpen);
    const dispatch = useDispatch();

    return (
        <Modal isOpen={modalIsOpen} 
        onRequestClose={() => dispatch(closeModal())}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md shadow-md w-[800px] h-[500px] overflow-y-auto"
        overlayClassName="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75"
        >
        <FileInput/>
      </Modal>
    )
};

export default CustomModal;