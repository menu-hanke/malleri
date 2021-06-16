import React, {useState} from 'react';
import Modal from 'react-modal';
import {BoxContainer, FlexContainer, FlexItem} from '../Styled';
import {ModelFunction, ModelFunctionPackage} from '../../types';
import PackageDetail from './PackageDetail';
import styled from 'styled-components';

export interface Props {
  packages: ModelFunctionPackage[]
}

const placeholderPackageItem = {
  name: '',
  description: '',
  models: []
};

const PackageInfo = styled.div`
  margin-left: 1rem;
  font-style: italic;
  font-size: 0.8rem;
`;

export default (props: Props) => {

  const [packageSearchInput, setPackageSearchInput] = useState('');
  const [modelSearchInput, setModelSearchInput] = useState('');
  const [itemInModal, setItemInModal]: [ModelFunctionPackage, Function] = useState(placeholderPackageItem);

  const totalFilter = (item: ModelFunctionPackage) => {
    return item.name.includes(packageSearchInput) || item.description.includes(packageSearchInput);
  };

  const modelHasMatchingData = (model: ModelFunction): boolean => {
    if (modelSearchInput === '' || modelSearchInput.length < 2) return false;
    return model.name.includes(modelSearchInput) || model.description.includes(modelSearchInput);
  };

  const packageHasModelsMatchingToSearch = (item: ModelFunctionPackage) => {
    return item.models.map(modelHasMatchingData).includes(true);
  };

  const applyPackagesFiltering = (packages: ModelFunctionPackage[]) => {
    return packages.filter(totalFilter);
  };

  return (
    <BoxContainer>
      <Modal
        isOpen={itemInModal != placeholderPackageItem}
        onRequestClose={() => setItemInModal(placeholderPackageItem)}
        contentLabel="Mallifunktiopaketin sisältö"
      >
        <PackageDetail modelPackage={itemInModal}/>
      </Modal>
      <p>Search tools</p>
      <input
        type="text"
        placeholder="Search packages..."
        onChange={(event) => setPackageSearchInput(event.target.value)}
      />
      <br/>
      <input
        type="text"
        placeholder="Highlight models..."
        onChange={(event) => setModelSearchInput(event.target.value)}
      />
      <hr/>
      <FlexContainer>
        {applyPackagesFiltering(props.packages).map((item: ModelFunctionPackage, i: number) => {
          const emphasize = packageHasModelsMatchingToSearch(item);
          return (
            <FlexItem key={i}>
              <BoxContainer onClick={() => setItemInModal(item)} emphasize={emphasize}>
                {item.name}
                <PackageInfo>
                  Description: {item.description}<br/>
                  Models: {item.models.length}<br/>
                </PackageInfo>
              </BoxContainer>
            </FlexItem>
          );
        })}
      </FlexContainer>
    </BoxContainer>
  );
};
