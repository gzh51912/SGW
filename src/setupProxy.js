const {createProxyMiddleware} = require('http-proxy-middleware') //服务器代理

module.exports = function(app) {   //服务器代理
    app.use('/api', 
    createProxyMiddleware({ //Home
              target: 'https://m.mtime.cn/Service/callback.mi',
              changeOrigin: true,
              pathRewrite:{
                  "^/api":"/"
              } 
            }
         ));
    // https://m.mtime.cn/Service/callback-mall.mi
         app.use('/hd', 
         createProxyMiddleware({ //  Home
                   target: 'https://content-api-m.mtime.cn',
                   changeOrigin: true,
                   pathRewrite:{
                       "^/hd":"/"
                   } 
                 }
              ));
        
        app.use('/shop', 
              createProxyMiddleware({ //  Home
                        target: 'https://content-api-m.mtime.cn',
                        changeOrigin: true,
                        pathRewrite:{
                            "^/shop":"/"
                        } 
                      }
                   ));
}
