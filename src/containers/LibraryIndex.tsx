import React, {useState} from 'react';
import Modal from 'react-modal';
import {LibraryTable, LibraryTableCell} from '../Styled';
import {ModelFunctionPackage} from '../../types';
import Collapsible from '../components/Collapsible';
import PackageDetail from './PackageDetail';

export interface Props {
  packages: ModelFunctionPackage[]
}

const placeholderPackageItem = {
  name: '',
  description: '',
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
        <PackageDetail modelPackage={itemInModal} />
      </Modal>
      <input
        type="text"
        placeholder="Filter by title..."
        onChange={(event) => setTitleFilterInput(event.target.value)}
      />
      <LibraryTable>
        <tbody>
          {applyPackagesFiltering(props.packages).map((item: ModelFunctionPackage, i: number) => (
            <tr key={i}>
              <LibraryTableCell>
                <Collapsible header={item.name}>
                  Description: {item.description}<br/>
                  Models: {item.models.length}<br/>
                  <a onClick={() => setItemInModal(item)}>More details...</a>
                </Collapsible>
              </LibraryTableCell>
            </tr>
          ))}
        </tbody>
      </LibraryTable>
    </div>
  );
};
