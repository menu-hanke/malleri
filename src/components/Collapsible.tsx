import React, {useState} from 'react';

export interface Props {
  header: string;
  children: React.ReactNode
}

export default (props: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!isExpanded);
  };

  return (
    <table>
      <tr>
        <td style={{width: '20px'}} onClick={(event) => toggleExpanded()}><b>{isExpanded ? '-' : '+'}</b></td>
        <td>{props.header}</td>
      </tr>
      {isExpanded && (
        <tr>
          <td/>
          <td>{props.children}</td>
        </tr>
      )}
    </table>
  );
};
