import React, { useState } from 'react';

import './App.css';
import { Modal } from './components';

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className='App'>
      <div className={'main-container p'}>
        <button className={'ct-button'} onClick={() => setIsOpen(true)}>
          Open Modal
        </button>

        <Modal isOpen={isOpen} onCloseClick={() => setIsOpen(false)}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum mollitia officiis quas
          sapiente unde. Ab commodi illo itaque optio sed!
        </Modal>
      </div>
    </div>
  );
}

export default App;
