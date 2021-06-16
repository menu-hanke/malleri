import React, {useState} from 'react';
import Modal from 'react-modal';
import {BoxContainer, FlexContainer, FlexItem} from '../Styled';
import {ModelFunctionPackage} from '../../types';
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
  const [itemInModal, setItemInModal]: [ModelFunctionPackage, Function] = useState(placeholderPackageItem);

  const totalFilter = (item: ModelFunctionPackage) => {
    return item.name.includes(packageSearchInput) || item.description.includes(packageSearchInput);
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
      <input
        type="text"
        placeholder="Search packages..."
        onChange={(event) => setPackageSearchInput(event.target.value)}
      />
      <FlexContainer>
        {applyPackagesFiltering(props.packages).map((item: ModelFunctionPackage, i: number) => (
          <FlexItem key={i}>
            <BoxContainer onClick={() => setItemInModal(item)}>
              {item.name}
              <PackageInfo>
                Description: {item.description}<br/>
                Models: {item.models.length}<br/>
              </PackageInfo>
            </BoxContainer>
          </FlexItem>
        ))}
      </FlexContainer>
    </BoxContainer>
  );
};
