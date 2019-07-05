import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ className, onClick, icon, children }) => {
  return (
    <div className={className} onClick={() => onClick()}>
      {<FontAwesomeIcon size="lg" icon={icon} />}
      {children}
    </div>
  );
};

const StyledHeaderIcon = styled(Icon)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding-left: 6px;
  padding-right: 6px;
`;

export default StyledHeaderIcon;
