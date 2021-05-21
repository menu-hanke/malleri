import React from 'react';
import {ModelFunctionPackage} from '../../types';

export default ({packages}: {packages: ModelFunctionPackage[]}) => {
  console.log(packages);
  return (
    <div>
      <ul>
        {packages.map((item: ModelFunctionPackage) => (
          <li>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
