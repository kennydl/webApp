import React, { Component } from 'react';
import styled from 'styled-components';
import StyledHeaderIcon from './styledHeaderIcon';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import UserPanel from '../userPanel';

import { connect } from 'react-redux';
import { onUserProfileClick } from 'store/auth';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: ${({ activeSession }) => (activeSession ? 'rgba(190,230,110,1)' : '')};
`;

class UserIcon extends React.Component {
  render() {
    return (
      <Container activeSession={this.props.user.activeSession}>
        <StyledHeaderIcon
          onClick={e => this.props.onUserProfileClick(e)}
          icon={faUserCircle}
        />
        <UserPanel {...this.props} activeSession={this.props.user.activeSession} />
      </Container>
    );
  }
}

export default connect(
  state => ({
    user: state.auth.user
  }),
  { onUserProfileClick }
)(UserIcon);
