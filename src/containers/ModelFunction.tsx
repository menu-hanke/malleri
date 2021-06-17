import {ModelFunction} from 'types/index';
import React from 'react';
import IOParameters from './IOParameters';
import {BoxContainer, FlexContainer, FlexItem} from '../Styled';

export interface Props {
  model: ModelFunction
}

const formatDate = (isoDate) => {
  const result = new Date(isoDate).toLocaleDateString('fi');
  if (result === 'Invalid Date') {
    return 'N/A';
  } else return result;
};

export default ({model}: Props) => {
  return (
    <BoxContainer>
      <h4>{model.name}</h4>
      <p>{model.description}</p>
      <p>Language: {model.language}</p>
      Developed by:
      <ul>
        {model.developers.map((item, ii) => (<li key={ii}>{item}</li>))}
      </ul>
      <FlexContainer>
        <FlexItem>
          Model function inputs:
          <IOParameters parameters={model.inputs}/>
        </FlexItem>
        <FlexItem>
          Model function outputs:
          <IOParameters parameters={model.outputs}/>
        </FlexItem>
      </FlexContainer>

      <p>Applicability: {model.applicability}</p>
      <p>Created: {formatDate(model.createdDate)}</p>
      <p>Modified: {formatDate(model.modifiedDate)}</p>
      <p>Remarks: {model.remarks}</p>
      <p>Reference: {model.referenceUrl.length > 0 ?
        <a href={model.referenceUrl} target="_blank" rel="noreferrer">{model.referenceUrl}</a> : model.reference}</p>
    </BoxContainer>
  );
}
;

