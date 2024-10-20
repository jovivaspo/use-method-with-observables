import { AttributeI } from '../../models/Attribute';

type Props = {
  attributeProp: AttributeI;
  removeAttribute: (attribute: AttributeI) => void;
};

export const AttributeDeleteButton: React.FC<Props> = ({ attributeProp, removeAttribute }) => {
  return <button onClick={() => removeAttribute(attributeProp)}>Eliminar</button>;
};
