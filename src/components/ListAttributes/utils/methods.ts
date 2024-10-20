import { AttributeI } from '../models/Attribute';

export const methods = (state: AttributeI[]) => {
  return {
    addAttributes(attributes: AttributeI[]) {
      return [...attributes];
    },
    addAttribute(attribute: AttributeI) {
      return [...state, attribute];
    },
    removeAttribute(attribute: AttributeI) {
      return state.filter((attr) => attr.id !== attribute.id);
    },
    changeAttribute(attribute: AttributeI) {
      return state.map((attr) => (attr.id === attribute.id ? attribute : attr));
    },
  };
};
