const { createProxyMiddleware } = require('http-proxy-middleware') //服务器代理

module.exports = function (app) {   //服务器代理
    app.use('/api',
        createProxyMiddleware({ //Home
            target: 'https://m.mtime.cn/Service/callback.mi',
            changeOrigin: true,
            pathRewrite: {
                "^/api": "/"
            }
        }
        ));
     // https://m.mtime.cn/Service/callback.mi/News/NewsList.api?t=20203821112239230&pageIndex=1

    //http://localhost:1920/users/checkname?name=zzz
    app.use('/hd',
        createProxyMiddleware({         //  users
            target: 'http://localhost:1920',
            changeOrigin: true,
            pathRewrite: {
                "^/hd": "/"
            }
        }
        ));

    app.use('/shop',
        createProxyMiddleware({ //  Home
            target: 'https://content-api-m.mtime.cn',
            changeOrigin: true,
            pathRewrite: {
                "^/shop": "/"
            }
        }
        ));

//https://ticket-m.mtime.cn/api/proxy/ticket/onlineCinemasByCity.api?locationId=290&_=1583657217200
        app.use('/tick',
        createProxyMiddleware({ //  Home
            target: 'https://ticket-m.mtime.cn/api/proxy/ticket',
            changeOrigin: true,
            pathRewrite: {
                "^/tick": "/"
            }
        }
        ));

   

}
