import { Button } from '@nextui-org/react';
import { shareInformationService } from '../Modal/services/shareInformation.service';

export const ButtonModal = () => {
  const onClickOpenModal = () => {
    shareInformationService.setSubject$(true);
  };
  return (
    <Button className='absolute top-0 right-0' onClick={onClickOpenModal}>
      Abrir
    </Button>
  );
};
