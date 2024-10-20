import { useEffect } from 'react';
import useMethods from 'use-methods';
import { AttributeI } from '../../models/Attribute';
import { shareInformationService } from '../../services/shareInformation.service';
import { initialState } from './constants';
import { methods } from './utils/methods';

export const AttributeInputController = ({
  attributeProp,
  addAttribute,
  changeAttribute,
}: {
  attributeProp?: AttributeI;
  addAttribute?: (attribute: AttributeI) => void;
  changeAttribute?: (attribute: AttributeI) => void;
}) => {
  const [state, { reset, onChangeValue }] = useMethods(methods, !!attributeProp ? attributeProp : initialState);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!!attributeProp && !!changeAttribute) {
      changeAttribute({ ...attributeProp, value: e.target.value });
    }

    return onChangeValue(e.target.value);
  };

  useEffect(() => {
    if (!addAttribute) return;

    const subscription$ = shareInformationService.getSubject$();

    subscription$.subscribe((data) => {
      if (!data) return;

      addAttribute({
        id: crypto.randomUUID(),
        value: state.value,
      });

      reset();
    });

    return () => {
      shareInformationService?.unsubscribe();
    };
  }, [state.value]);

  return {
    attribute: state,
    onChangeInput,
    reset,
  };
};
