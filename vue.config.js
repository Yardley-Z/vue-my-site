module.exports = {
  devServer: {
    open: true,
    proxy: {
      "/api": {
        target: "http://test.my-site.com",
      },
    },
  },
};
