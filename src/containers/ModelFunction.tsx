import {ModelFunction} from 'types/index';
import React from 'react';
import IOParameters from './IOParameters';
import styled from 'styled-components';

export interface Props {
  model: ModelFunction
}

const ModelContainer = styled.div`
  border: 1px solid black;
  margin-bottom: 5px;
`;

const IOContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
`;

const IOItem = styled.div`
  flex: none;
  margin: 5px;
  width: 250px;
`;

const formatDate = (isoDate) => {
  const result = new Date(isoDate).toLocaleDateString('fi');
  if (result === 'Invalid Date') {
    return 'N/A';
  } else return result;
};

export default ({model}: Props) => {
  return (
    <ModelContainer>
      <h4>{model.name}</h4>
      <p>{model.description}</p>
      <p>
        Developed by:
        <ul>
          {model.developers.map((item, ii) => (<li key={ii}>{item}</li>))}
        </ul>
      </p>

      <IOContainer>
        <IOItem>
          Model function inputs:
          <IOParameters parameters={model.inputs}/>
        </IOItem>
        <IOItem>
          Model function outputs:
          <IOParameters parameters={model.outputs}/>
        </IOItem>
      </IOContainer>

      <p>Applicability: {model.applicability}</p>
      <p>Created: {formatDate(model.createdDate)}</p>
      <p>Modified: {formatDate(model.modifiedDate)}</p>
      <p>Remarks: {model.remarks}</p>
      <p>Reference: {model.referenceUrl.length > 0 ?
        <a href={model.referenceUrl} target="_blank" rel="noreferrer">{model.referenceUrl}</a> : model.reference}</p>
    </ModelContainer>
  );
}
;

