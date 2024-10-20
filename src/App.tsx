import { NextUIProvider } from '@nextui-org/react';
import { lazy, Suspense } from 'react';
import './App.css';
import { ButtonModal } from './components/ButtonModal/ButtonModal.component';
import { ListAttributes } from './components/ListAttributes/ListAttributes';

const ModalInfoLazy = lazy(() => import('./components/Modal/ModalInfo'));
function App() {
  return (
    <NextUIProvider>
      <div className='relative'>
        <ListAttributes />
        <ButtonModal />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <ModalInfoLazy />
      </Suspense>
    </NextUIProvider>
  );
}

export default App;
