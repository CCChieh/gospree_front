module.exports = {
  publicPath: '/',
  devServer: {
    // host: 'zheng.nimingshe.com',
    allowedHosts: [
      'zheng.nimingshe.com',
      'nimingshe.com',
    ],
    // disableHostCheck:true,
    port: 8000,
    proxy: 'http://zheng.nimingshe.com:8080',
  },
};
