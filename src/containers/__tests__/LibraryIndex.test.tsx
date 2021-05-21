import React from 'react';
import renderer from 'react-test-renderer';
import data from '../../../public/mfk-presentation-level-collection.json';

import LibraryIndex, {Props} from '../LibraryIndex';

const renderTree = () => {
  const defaultProps: Props = {
    packages: data
  };

  return renderer.create(<LibraryIndex {...defaultProps} />);
};


test('snapshot should match', async () => {
  const resultElement = renderTree();
  expect(resultElement.toJSON()).toMatchSnapshot();
});
