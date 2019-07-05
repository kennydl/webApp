import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleHasSidebar } from 'store/header';

const SidebarComponent = props => {
  const { className, isSidebarOpen, WrappedSidebar } = props;
  let sidebarProps = { ...props };
  delete sidebarProps.className;
  delete sidebarProps.isSidebarOpen;
  delete sidebarProps.WrappedSidebar;
  delete sidebarProps.toggleHasSidebar;

  return (
    <div className={className}>
      {WrappedSidebar && isSidebarOpen ? (
        <WrappedSidebar {...sidebarProps} />
      ) : null}
    </div>
  );
};

const StyledSidebar = styled(SidebarComponent)`
  ${({ isSidebarOpen, hasSidebar }) => {
    return isSidebarOpen && hasSidebar
      ? `
            display: grid;
            grid-column-start: 1;
            grid-column-end: 2;
        `
      : `display:none;`;
  }}
  
  color: var(--page-text-color);
  background: var(--page-sidebar-color);
  overflow-y: auto;
`;

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.WrappedSidebar && this.props.WrappedSidebar()) {
      this.props.toggleHasSidebar(true);
    } else {
      this.props.toggleHasSidebar(false);
    }
  }

  render() {
    return (
      <StyledSidebar {...this.props} />
    )
  }
}

// const Sidebar = props => {
//   return <StyledSidebar {...props} />;
// };

export default connect(
  state => ({
    isSidebarOpen: state.header.isSidebarOpen,
    hasSidebar: state.header.hasSidebar
  }),
  { toggleHasSidebar }
)(Sidebar);

// export default Sidebar;
