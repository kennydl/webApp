import React from 'react';
import store from '../index.js';

export default function routeComponent(WrappedComponent) {
  class RouteComponent extends React.Component {
    initHistory(history) {
      // Reducer to store/route.js
      return {
        type: 'INIT_HISTORY',
        history: history
      };
    }

    componentDidMount() {
      const history = store.getState().route.history
      if (!history) {
        store.dispatch(this.initHistory(this.props.history));
      } else {
        store.dispatch({
          type: 'SET_DEFAULT_ROUTE_STATE',
          pathname: history.location.pathname
        })
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  if (WrappedComponent) {
    const wrappedComponentName =
      WrappedComponent.displayName || WrappedComponent.name || 'Component';

    RouteComponent.displayName = `RouteComponent(${wrappedComponentName})`;
  }

  return RouteComponent;
}
