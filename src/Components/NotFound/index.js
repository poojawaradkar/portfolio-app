import React from 'react';
import loadable from '@loadable/component';
import LidoLoader from 'components/LidoLoader';

export default {
  component: loadable(() => import(/* webpackChunkName: "notFound" */ './NotFound'), {
    fallback: <LidoLoader />,
  }),
};
