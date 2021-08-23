module.exports = function (api) {
  api.cache(true);

  const presets = [
    '@babel/env',
    '@babel/react'
  ];

  const plugins = [
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true
      }
    ],
    [
      '@babel/plugin-proposal-private-methods',
      {
        loose: true
      }
    ],
    '@loadable/babel-plugin',
    [
      'module-resolver', {
        root: ['./src'],
      }
    ],
    [
      '@babel/plugin-transform-runtime',
      {
        absoluteRuntime: false,
        corejs: false,
        helpers: true,
        regenerator: true,
        useESModules: false,
        version: '7.0.0-beta.0'
      }
    ]
  ];

  return {
    presets,
    plugins
  };
};
