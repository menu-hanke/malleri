import {ModelFunctionPackage} from 'types/index';
import React from 'react';
import ModelFunction from './ModelFunction';

export interface Props {
  modelPackage: ModelFunctionPackage
}

export default ({modelPackage}: Props) => {
  return (
    <div>
      <h3>{modelPackage.name}</h3>
      <p>{modelPackage.description}</p>
      <ul>
        {modelPackage.models.map((item, i) => <ModelFunction key={i} model={item} />)}
      </ul>
    </div>
  );
};
