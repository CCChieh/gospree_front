module.exports = {
  publicPath: '/',
  devServer: {
    // host: 'zheng.nimingshe.com',
    allowedHosts: [
      'zheng.nimingshe.com',
    ],
    port: 8000,
    proxy: 'http://localhost:8080',
  },
};
