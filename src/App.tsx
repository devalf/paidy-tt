import React, { useState } from 'react';

import './App.css';
import { Modal, OrderForm } from './components';

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className='App'>
      <div className={'main-container p'}>
        <button className={'ct-button'} onClick={() => setIsOpen(true)}>
          Open Modal
        </button>

        {/* Very basic concept to render custom single modal */}
        <Modal
          isOpen={isOpen}
          onCloseClick={() => setIsOpen(false)}
          headerContent={
            <div>
              <h5>ラルフ ローレン松武オンラインストア</h5>
              <h3>¥30.800</h3>
            </div>
          }
        >
          <OrderForm />
        </Modal>
      </div>
    </div>
  );
}

export default App;
