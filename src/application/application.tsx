import React from 'react';
import { Router } from "@reach/router";

import {Home, Settings, Clients, Report} from './pages';

import { RendererService } from '../renderer-service';
import { SideNav } from './components';

type Props = {
  service: RendererService;
};

export const Application = ({ service }: Props) => {
  const onClick = () => {
    service.ping();
  };

  return (
    <div className="section container">
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
