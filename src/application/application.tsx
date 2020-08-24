import React from 'react';
import { createGlobalStyle } from 'styled-components'
import { Router } from "@reach/router";

import {Home, Settings, Clients, Report} from './pages';

import { RendererService } from '../renderer-service';
import { SideNav } from './components';

type Props = {
  service: RendererService;
};

const GlobalStyle = createGlobalStyle`
* { 
  margin:0; 
  padding:0;
  box-sizing: border-box;
  font-family: Montserrat !important;
} 
`

export const Application = ({ service }: Props) => {
  const onClick = () => {
    service.ping();
  };

  return (
    <div className="section container">
      <GlobalStyle/>
      <SideNav>
        <Router>
          <Home path="/"/>
          <Settings path="/settings"/>
          <Report path="/report"/>
          <Clients path="/clients"/>
        </Router>
      </SideNav>
    </div>
  );
};
