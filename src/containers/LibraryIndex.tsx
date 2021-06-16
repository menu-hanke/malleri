import React, {useState} from 'react';
import Modal from 'react-modal';
import {BoxContainer, FlexContainer, FlexItem} from '../Styled';
import {ModelFunctionPackage} from '../../types';
import Collapsible from '../components/Collapsible';
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

const DetailsButton = styled.button`

  border: 1px solid black;
`;

export default (props: Props) => {

  const [titleFilterInput, setTitleFilterInput] = useState('');
  const [itemInModal, setItemInModal]: [ModelFunctionPackage, Function] = useState(placeholderPackageItem);

  const totalFilter = (item: ModelFunctionPackage) => {
    return item.name.includes(titleFilterInput);
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
        <PackageDetail modelPackage={itemInModal} />
      </Modal>
      <input
        type="text"
        placeholder="Filter by title..."
        onChange={(event) => setTitleFilterInput(event.target.value)}
      />
      <FlexContainer>
        {applyPackagesFiltering(props.packages).map((item: ModelFunctionPackage, i: number) => (
          <FlexItem key={i}>
            <BoxContainer>
              <Collapsible header={item.name}>
                <PackageInfo>
                  Description: {item.description}<br/>
                  Models: {item.models.length}<br/>
                  <DetailsButton onClick={() => setItemInModal(item)}>Show models...</DetailsButton>
                </PackageInfo>
              </Collapsible>
            </BoxContainer>
          </FlexItem>
        ))}
      </FlexContainer>
    </BoxContainer>
  );
};
