import { shareInformationService } from '../../services/shareInformation.service';

export const AttributeAddButton = () => {
  const onClick = () => {
    shareInformationService.setSubject$(true);
  };
  return <button onClick={onClick}>Añadir</button>;
};
