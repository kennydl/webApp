import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSidebarState } from 'store/header';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import { isMobileDevice } from 'components/pageLayout/const';

const SidebarGridItem = styled.div`
  display: grid;
  grid-column-start: 1;
  grid-column-end: 2;
`;

const SidebarIconContainer = styled.div`
  display: flex;
  max-width: 19px;
  align-items: center;
  justify-content: start;
  cursor: pointer;
  padding-left: 14px;
  padding-right: 14px;
`;

class SidebarIcon extends React.Component {
  render() {
    return !isMobileDevice ? (
      <SidebarGridItem>
        {this.props.hasSidebar ? (
          <SidebarIconContainer onClick={e => this.props.updateSidebarState()}>
            <FontAwesomeIcon size="lg" icon={faBars} />
          </SidebarIconContainer>
        ) : null}
      </SidebarGridItem>
    ) : null;
  }
}

export default connect(
  state => ({
    hasSidebar: state.header.hasSidebar
  }),
  { updateSidebarState }
)(SidebarIcon);
