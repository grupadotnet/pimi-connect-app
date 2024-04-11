module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@': './src',
            style: './style.ts',
            public: './public',
            api: './api',
          },
        },
      ],
    ],
  };
};
