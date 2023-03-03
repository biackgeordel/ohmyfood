module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        debug: true,
        corejs: 3,
        targets: ">0.50%, not dead",
      },
    ],
  ],
};
