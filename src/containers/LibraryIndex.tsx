import React from 'react';
import {ModelFunctionPackage} from '../../types';

export interface Props {
  packages: ModelFunctionPackage[]
}

export default (props: Props) => {
  return (
    <div>
      <ul>
        {props.packages.map((item: ModelFunctionPackage, i: number) => (
          <li key={i}>{item.package}</li>
        ))}
      </ul>
    </div>
  );
};
