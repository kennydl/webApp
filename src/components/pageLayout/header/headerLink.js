import React from 'react';
import styled from 'styled-components';

// Notice! it must have className to custom style it with styled-components
const HeaderLink = ({
  pathname,
  disabledHeader,
  updatePathname,
  history,
  className,
  children
}) => {
  var goTo = () => {
    if (!disabledHeader) {
      updatePathname(pathname);
    }
  };
  
  return (
    <div onClick={() => goTo()} className={className}>
      {children}
    </div>
  );
};

const activeLinkCss = `
  font-weight: bold;
  font-style: italic;
  font-size: 20px;
  transition: all 1s;
  color: rgb(78, 78, 78);
`;

const StyledHeaderLink = styled(HeaderLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding-right: 40px;
  padding-left: 40px;
  font-family: 'Raleway', sans-serif;
  color: white;
  transition: all 1s;
  ${props =>
    props.history.location.pathname.includes(props.pathname) ? activeLinkCss : ''}
  @media only screen and (max-width: 880px) {
    padding-right: 35px;
    padding-left: 35px;
  }
  @media only screen and (max-width: 840px) {
    padding-right: 30px;
    padding-left: 30px;
  }
  @media only screen and (max-width: 812px) {
    padding-right: 30px;
    padding-left: 30px;
  }
  @media only screen and (max-width: 812px) {
    padding-right: 30px;
    padding-left: 30px;
  }
  @media only screen and (max-width: 698px) {
    padding-right: 10px;
    padding-left: 10px;
  }
`;

export default StyledHeaderLink;
