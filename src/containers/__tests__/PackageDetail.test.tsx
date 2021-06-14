import React from 'react';
import renderer from 'react-test-renderer';
import data from '../../../public/mfk-presentation-level-collection.json';
import PackageDetail, {Props} from '../PackageDetail';


const renderTree = () => {
  const defaultProps: Props = {
    modelPackage: data[0]
  };

  return renderer.create(<PackageDetail {...defaultProps} />);
};

test('snapshot should match', async () => {
  const resultElement = renderTree();
  expect(resultElement.toJSON()).toMatchSnapshot();
});
