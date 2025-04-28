//@ts-nocheck
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import GoBackToHome from '../components/GoBacktoHome';

const Modal = ({ children }) => {
  const modal = ReactDOM.createPortal(
    <div style={modalStyle}>
      {children}
    </div>,
    document.getElementById('modal-root') //Placed in index.html or AppRouter in my case
  );
  return modal;
}

//Create portal parent
export const CreatePortal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <GoBackToHome />
      <h1>React Portal Example</h1>
      <p>Click the button to open the modal</p>
      <button type="button" onClick={() => setShowModal(true)}>Open Modal</button>
      {showModal && (
        <Modal>
          <h2>Modal Title</h2>
          <p>This is a modal content.</p>
          <button type="button" onClick={() => setShowModal(false)}>Close Modal</button>
        </Modal>
      )}
    </div>
  );
}

const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'pink',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
};