import React from 'react';
import { AttributeI } from '../../models/Attribute';
import { AttributeInputController } from './AttributeInput.controller';

export type AttributeProps = {
  attributeProp?: AttributeI;
  changeAttribute?: (attribute: AttributeI) => void;
  addAttribute?: (attribute: AttributeI) => void;
};

const AttributeInput: React.FC<AttributeProps> = ({ attributeProp, changeAttribute, addAttribute }) => {
  const { attribute, onChangeInput } = AttributeInputController({ attributeProp, changeAttribute, addAttribute });
  return <input type='text' value={attribute.value} onChange={onChangeInput} />;
};

export default AttributeInput;
