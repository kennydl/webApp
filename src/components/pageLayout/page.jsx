import React, { Component, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { connect } from 'react-redux';
import {
  toggleHasSidebar,
  enablePageHeader,
  disablePageHeader
} from 'store/header';

import styled from 'styled-components';

import { isMobileDevice } from 'components/pageLayout/const';

// Overwrite for mobile devices
import Sidebar from './sidebar';

const PageContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 250px 1fr;
  ${!isMobileDevice ? 'min-height: 800px;' : ''}
  height: var(--body-container-height);
  transition: all 0.1s;
`;

const StyledBodyContainer = styled.div`
  display: grid;
  ${({ isSidebarOpen, noSidebar }) =>
    isSidebarOpen && !noSidebar
      ? `grid-column-start: 2;`
      : `grid-column-start: 1;`}
  grid-column-end: 3;
  color: var(--page-text-color);
  background: var(--page-content-color);
  overflow-y: auto;
`;

const BodyContainer = connect(
  state => ({
    isSidebarOpen: state.header.isSidebarOpen
  }),
  {}
)(
  (props) => {
    return (
      <StyledBodyContainer {...props}>
        {props.children}
      </StyledBodyContainer>
    )
  }
);

const Body = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

const StyledBody = styled(Body)``;

export default function pageBody(
  WrappedContentComponent,
  WrappedSidebarComponent
) {
  class Page extends React.Component {
    constructor(props) {
      super(props);
    }

    componentWillMount() {
      // if (WrappedSidebarComponent && WrappedSidebarComponent()) {
      //   this.props.toggleHasSidebar(true);
      // } else {
      //   this.props.toggleHasSidebar(false);
      // }
    }

    render() {
      return !isMobileDevice ? (
        // Web view
        <PageContainer>
          <Sidebar
            {...this.props}
            // isSidebarOpen={this.props.isSidebarOpen}
            WrappedSidebar={WrappedSidebarComponent}
          />
          <BodyContainer
            noSidebar={!WrappedSidebarComponent}
          >
            <StyledBody>
              <WrappedContentComponent {...this.props} />
            </StyledBody>
          </BodyContainer>
          {/* <CSSTransition
            in={true}
            timeout={50}
            unmountOnExit
          >          
          </CSSTransition> */}
        </PageContainer>
      ) : null;
    }
  }

  const wrappedContentComponent =
    WrappedContentComponent.displayName ||
    WrappedContentComponent.name ||
    'Component';

  const wrappedSidebarComponent = WrappedSidebarComponent
    ? WrappedSidebarComponent.displayName ||
    WrappedSidebarComponent.name ||
    'Component'
    : 'None Sidebar';

  Page.displayName =
    `Content(${wrappedContentComponent}) - ` +
    `Sidebar(${wrappedSidebarComponent})`;

  // return connect(
  //   state => ({
  //     isSidebarOpen: state.header.isSidebarOpen
  //   }),
  //   { toggleHasSidebar }
  // )(Page);
  
  return Page
}
