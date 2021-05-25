import React, {useState} from 'react';
import Modal from 'react-modal';
import {ModelFunctionPackage} from '../../types';

export interface Props {
  packages: ModelFunctionPackage[]
}

const placeholderPackageItem = {
  title: '',
  description: '',
  searchPhrases: [],
  models: []
};

export default (props: Props) => {
  // 1. search input and filtering
  // 2. refactoring & unit testing functionality
  // 3. new view for model function package

  const [titleFilterInput, setTitleFilterInput] = useState('');
  const [descriptionFilterInput, setDescriptionFilterInput] = useState('');
  const [itemInModal, setItemInModal]: [ModelFunctionPackage, Function] = useState(placeholderPackageItem);

  const totalFilter = (item: ModelFunctionPackage) => {
    return item.title.includes(titleFilterInput) && item.description.includes(descriptionFilterInput);
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
        <b>{itemInModal.title}</b>
        <p>{itemInModal.description}</p>
        <p>
          Mallit:
          <ul>
            {itemInModal.models.map((model) =>
              (<li>{model.generalDetails.name}</li>))}
          </ul>
        </p>

      </Modal>
      <input type="text" placeholder="Filter by title..." onChange={(event) => setTitleFilterInput(event.target.value)} />
      <input type="text" placeholder="Filter by description..." onChange={(event) => setDescriptionFilterInput(event.target.value)} />
      <ul>
        {applyPackagesFiltering(props.packages).map((item: ModelFunctionPackage, i: number) => (
          <li key={i}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
