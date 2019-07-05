import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { updatePathname } from 'store/route';
import {
  foodBlogPath,
  analyticsPath,
  otherPath,
  aboutMePath
} from 'routes/routePaths';

import HeaderLink from './headerLink';
import styled from 'styled-components';

const HeaderLinkGridItem = styled.div`
  display: grid;
  user-select: none;
  grid-column-start: 2;
  grid-column-end: 3;
  /*padding-left: 100px;*/
`;

const HeaderLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

class HeaderLinks extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <HeaderLinkGridItem>
        <HeaderLinkContainer>
          <HeaderLink {...this.props} pathname={foodBlogPath}>
            Food Blog
          </HeaderLink>
          <HeaderLink {...this.props} pathname={analyticsPath}>
            Analytics
          </HeaderLink>
          <HeaderLink {...this.props} pathname={otherPath}>
            Other
          </HeaderLink>
          <HeaderLink {...this.props} pathname={aboutMePath}>
            About Me
          </HeaderLink>
        </HeaderLinkContainer>
      </HeaderLinkGridItem>
    );
  }
}

export default connect(
  state => ({
    currentPathname: state.route.pathname, // Update Component on this state change
    disabledHeader: state.header.disabledHeader,
    history: state.route.history
  }),
  { updatePathname }
)(HeaderLinks);
