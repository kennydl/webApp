import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from 'index';
import styled from 'styled-components';

import { isMobileDevice } from 'components/pageLayout/const';

// Overwrite for mobile devices
const BodyContainer = styled.div`

`;

export default function btnContainer(
  WrappedComponent
) {
  class Btn extends React.Component {
    constructor(props) {
      // props = Object.assign({},{
      //   style: {},
      //   className: ''
      // }, props)
      super(props);
    }

    componentWillMount() {
      
    }

    _onClickHanlder(e) {
      const {onClick} = this.props
      if(typeof onClick === 'function') {
        onClick(e)
      }
    }

    render() {     
      return (
        <BodyContainer>
          <WrappedComponent
            onClick = {(e) => this._onClickHanlder(e)}
            className = {this.props.className}
            style = {this.props.style}
          ></WrappedComponent>
        </BodyContainer>
      )
    }
  }

  const wrappedContent =
    WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component';

  Btn.displayName = `Content(${wrappedContent})`

  return Btn
}
