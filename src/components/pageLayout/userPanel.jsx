import React, { Component } from 'react';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import {
  PrimaryButton,
  DefaultButton
} from 'office-ui-fabric-react/lib/Button';

import { connect } from 'react-redux';
import * as authActions from 'store/auth';
import { hideUserPanel, signOutUser } from 'store/auth';

class UserPanel extends React.Component {
  render() {
    return (
      <Panel
        isOpen={this.props.activeSession && this.props.showUserPanel}
        isLightDismiss={true}
        headerText="User Panel"
        onDismiss={() => this.props.hideUserPanel()}
        className="fabric-panel"
      >
        <div>
          <div
            style={{
              marginBottom: '20px'
            }}
          >
            This is your user panel.
          </div>

          <div>
            <PrimaryButton
              onClick={() => this.props.signOutUser()}
              style={{ marginRight: '8px' }}
            >
              Sign Out
            </PrimaryButton>
            <DefaultButton onClick={() => this.props.hideUserPanel()}>
              Cancel
            </DefaultButton>
          </div>
        </div>
      </Panel>
    );
  }
}

export default connect(
  state => ({
    showUserPanel: state.auth.showUserPanel
  }),
  { hideUserPanel, signOutUser }
)(UserPanel);
