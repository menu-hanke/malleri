import React from 'react';
import {IOParameter} from 'types/index';
import styled from 'styled-components';

export interface Props {
  parameters: IOParameter[]
}

const BorderTable = styled.table`
  border: 1px solid black;
  width: 100%;
`;

const TableHeader = styled.th`
  text-align: left;
  border-bottom: 1px solid black;
`;

const TableCell = styled.td`
  background: #eee;
  width: ${(props) => props.width}
`;

export default ({parameters}: Props) => {
  return (
    <BorderTable>
      <tr>
        <TableHeader>Name</TableHeader>
        <TableHeader>Unit</TableHeader>
      </tr>
      {parameters.map((item, i) => (
        <tr key={i}>
          <TableCell width={'75%'}>{item.name}</TableCell>
          <TableCell width={'25%'}>{item.unit}</TableCell>
        </tr>
      ))}
    </BorderTable>
  );
};
