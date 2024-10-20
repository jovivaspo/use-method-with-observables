import { AttributeAddButton } from './components/AttributeAddButton/AttributeAddButton.component';
import { AttributeDeleteButton } from './components/AttributeDeleteButton/AttributeDeleteButton';
import AttributeInput from './components/AttributeInput/AttributeInput.component';
import { ListAttributesController } from './ListAttributes.controller';

export const ListAttributes = () => {
  const { data, addAttribute, removeAttribute, changeAttribute } = ListAttributesController();

  return (
    <div className='flex flex-col gap-4 justify-center items-center'>
      <h2 className='text-blue-500 text-xl'>Listado de atributo</h2>
      <div className='flex gap-8 flex-col'>
        <h3 className='text-lg'>Añadir nuevo atributo</h3>
        <div className='flex gap-2'>
          <AttributeInput addAttribute={addAttribute} />
          <AttributeAddButton />
        </div>
      </div>
      <div className='flex gap-8 flex-col'>
        <h3 className='text-lg'>Atributos existentes</h3>
        {data.map((attribute) => (
          <div className='flex gap-2' key={attribute.id}>
            <AttributeInput attributeProp={attribute} changeAttribute={changeAttribute} />
            <AttributeDeleteButton attributeProp={attribute} removeAttribute={removeAttribute} />
          </div>
        ))}
      </div>
    </div>
  );
};
