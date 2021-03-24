import React, { FunctionComponent } from 'react';
import { LoadingPlaceholder } from '@grafana/ui';

export const LoadingChunkPlaceHolder: FunctionComponent = React.memo(() => (
  <div className="preloader">
    <LoadingPlaceholder text={'Chargement...'} />
  </div>
));

LoadingChunkPlaceHolder.displayName = 'LoadingChunkPlaceHolder';
