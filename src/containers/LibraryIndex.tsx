import React, {useState} from 'react';
import {ModelFunctionPackage} from '../../types';

export interface Props {
  packages: ModelFunctionPackage[]
}

export default (props: Props) => {
  // 1. search input and filtering
  // 2. refactoring & unit testing functionality
  // 3. new view for model function package

  const [titleFilterInput, setTitleFilterInput] = useState('');
  const [descriptionFilterInput, setDescriptionFilterInput] = useState('');

  const totalFilter = (item: ModelFunctionPackage) => {
    return item.title.includes(titleFilterInput) && item.description.includes(descriptionFilterInput);
  };

  const applyPackagesFiltering = (packages: ModelFunctionPackage[]) => {
    return packages.filter(totalFilter);
  };

  return (
    <div>
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
