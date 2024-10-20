import { useEffect, useState } from 'react';
import { shareInformationService } from './services/shareInformation.service';

export const ModalInfoController = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const subscription$ = shareInformationService.getSubject$();
    subscription$.subscribe(setIsOpen);
    return () => {
      shareInformationService?.unsubscribe();
    };
  }, []);

  const onClose = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    onClose,
  };
};
