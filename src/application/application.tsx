import React from 'react';
import {Home} from './pages';

import { RendererService } from '../renderer-service';

type Props = {
  service: RendererService;
};

export const Application = ({ service }: Props) => {
  const onClick = () => {
    service.ping();
  };

  return (
    <div className="section container">
      <h1>Application loaded</h1>
      <Home/>
    </div>
  );
};
