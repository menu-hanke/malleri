import React, {useState} from 'react';
import Modal from 'react-modal';
import {LibraryTable, LibraryTableCell} from '../Styled';
import {ModelFunctionPackage} from '../../types';

export interface Props {
  packages: ModelFunctionPackage[]
}

const placeholderPackageItem = {
  name: '',
  models: []
};

export default (props: Props) => {
  // 1. search input and filtering
  // 2. refactoring & unit testing functionality
  // 3. new view for model function package

  const [titleFilterInput, setTitleFilterInput] = useState('');
  const [itemInModal, setItemInModal]: [ModelFunctionPackage, Function] = useState(placeholderPackageItem);

  const totalFilter = (item: ModelFunctionPackage) => {
    return item.name.includes(titleFilterInput);
  };

  const applyPackagesFiltering = (packages: ModelFunctionPackage[]) => {
    return packages.filter(totalFilter);
  };

  return (
    <div>
      <Modal
        isOpen={itemInModal != placeholderPackageItem}
        onRequestClose={() => setItemInModal(placeholderPackageItem)}
        contentLabel="Mallifunktiopaketin sisältö"
      >
        <b>{itemInModal.name}</b>
        <p>
          Mallit:
          <ul>
            {itemInModal.models.map((model, i) =>
              (<li key={i}>{model.name}</li>))}
          </ul>
        </p>

      </Modal>
      <input
        type="text"
        placeholder="Filter by title..."
        onChange={(event) => setTitleFilterInput(event.target.value)}
      />
      <LibraryTable>
        {applyPackagesFiltering(props.packages).map((item: ModelFunctionPackage, i: number) => (
          <tr>
            <LibraryTableCell>
              <a key={i} onClick={() => setItemInModal(item)}>{item.name}</a>
            </LibraryTableCell>
          </tr>
        ))}
      </LibraryTable>
    </div>
  );
};
