import React from 'react';
import {ModelFunctionPackage} from '../../types';

export default ({packages}: {packages: ModelFunctionPackage[]}) => {
  return (
    <div>
      <ul>
        {packages.map((item: ModelFunctionPackage, i: number) => (
          <li key={i}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
