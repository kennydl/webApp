import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isAuthSessionActive } from 'store/auth';

import HeaderRightIcon from './headerRightIcon';
import HeaderLinks from './headerLinks';
import SidebarIcon from './sidebarIcon';

import styled from 'styled-components';

import { isMobileDevice } from 'components/pageLayout/const';

const HeaderGridContainer = styled.div`
  display: ${({ showHeader }) => (showHeader ? 'grid' : 'none')};
  grid-template-rows: var(--header-height);
  grid-template-columns: 100px 1fr 100px;
  height: var(--header-height);

  color: white;
  background: var(--page-header-color);

  @media only screen and (max-width: 812px) {
    grid-template-columns: 40px 1fr 100px;
  }
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.onload = () => {
      this.props.isAuthSessionActive();
      window.onload = null;
    };
  }

  componentWillUnmount() {
    window.onload = null;
  }

  render() {
    return this.props.history ? (
      <HeaderGridContainer showHeader={this.props.showHeader}>
        <SidebarIcon />
        <HeaderLinks />
        <HeaderRightIcon />
      </HeaderGridContainer>
    ) : null;
  }
}

export default connect(
  state => ({
    history: state.route.history,
    showHeader: state.header.showHeader
  }),
  { isAuthSessionActive }
)(Header);
