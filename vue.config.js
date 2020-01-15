module.exports = {
  publicPath: '/',
  devServer: {
    host: 'localhost',
    port: 8000,
    proxy: 'http://localhost:8080',
  },
};
