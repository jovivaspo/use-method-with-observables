import { AttributeI } from '../../../models/Attribute';
import { initialState } from '../constants';

export const methods = (state: AttributeI) => ({
  reset() {
    return initialState;
  },
  onChangeValue(value: string) {
    return {
      ...state,
      value,
    };
  },
});
