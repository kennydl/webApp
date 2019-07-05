import React, { Component } from 'react';

// Font Awesome
import { faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import StyledHeaderIcon from './styledHeaderIcon';
import UserIcon from './userIcon';

import { isMobileDevice } from 'components/pageLayout/const';

const GridContainer = styled.div`
  display: grid;
  grid-column-start: 3;
  grid-column-end: 4;
`;

const LinkContainer = ({ children }) => {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
  `;
  return (
    <GridContainer>
      <Container>{children}</Container>
    </GridContainer>
  );
};

class HeaderRightIcon extends React.Component {
  render() {
    return !isMobileDevice ? (
      <LinkContainer>
        <StyledHeaderIcon icon={faInstagram} />
        <StyledHeaderIcon icon={faLinkedinIn} />
        <UserIcon />
      </LinkContainer>
    ) : null;
  }
}

export default HeaderRightIcon;
