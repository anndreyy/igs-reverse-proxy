const express                   = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

// proxy middleware options
const options = {
  target: 'http://localhost:0000', // target host
  changeOrigin: true, // needed for virtual hosted sites
  // pathRewrite: function (path, req) {
  //     return path.replace('/api', '') 
  //   },
  router: {
      'api.dev.planominhacasa.com.br' : 'http://localhost:3000',  // host only
      'api.hom.planominhacasa.com.br' : 'http://localhost:3001',  // host only
      'api.planominhacasa.com.br' : 'http://localhost:3002',  // host only
  }
};

// create the proxy (without context)
const proxy = createProxyMiddleware(options);

// mount `proxy` in web server
const app = express();
app.use('/api', proxy);
app.listen(5000);