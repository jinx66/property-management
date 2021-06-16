
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/login/index","pages/login/login","pages/login/register","pages/index/index","pages/mine/mine","pages/society/society","pages/homeServices/homeServices","pages/index/bill/bill","pages/index/vistor/vistor","pages/index/repair/repair","pages/index/water/water","pages/index/car/car","pages/index/express/express","pages/index/renovation/renovation","pages/index/guarantee/guarantee","pages/index/clean/clean","pages/index/notice/notice","pages/index/crown/crown","pages/index/usersright/usersright","pages/index/serviceplan/serviceplan","pages/mine/order/order","pages/mine/card/card","pages/mine/friendHands/friendHands","pages/mine/post/post","pages/mine/activities/activities","pages/mine/problem/problem","pages/mine/setting/setting","pages/mine/ours/ours","pages/mine/ours/sourcelicense","pages/mine/ours/serviceagreement","pages/mine/ours/privacyagreement","pages/mine/ours/protectionprinciple","pages/mine/explain/explain","pages/shoppingCart/shoppingCart","pages/goodsDetail/goodsDetail","pages/index/map/map"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"selectedColor":"#b50e03","backgroundColor":"#f0f0f0","list":[{"text":"首页","pagePath":"pages/index/index","iconPath":"static/icon/tabBarIcon/home.png","selectedIconPath":"static/icon/tabBarIcon/home-active.png"},{"text":"集市","pagePath":"pages/homeServices/homeServices","iconPath":"static/icon/tabBarIcon/Bazaar.png","selectedIconPath":"static/icon/tabBarIcon/Bazaar-active.png"},{"text":"社区","pagePath":"pages/society/society","iconPath":"static/icon/tabBarIcon/community.png","selectedIconPath":"static/icon/tabBarIcon/community-active.png"},{"text":"我的","pagePath":"pages/mine/mine","iconPath":"static/icon/tabBarIcon/me.png","selectedIconPath":"static/icon/tabBarIcon/me-active.png"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"PropertyManagement","compilerVersion":"3.1.11","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页"}},{"path":"/pages/login/index","meta":{},"window":{"navigationBarTitleText":"欢迎使用物业app"}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"登录"}},{"path":"/pages/login/register","meta":{},"window":{"navigationBarTitleText":"注册"}},{"path":"/pages/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","enablePullDownRefresh":false}},{"path":"/pages/society/society","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"社区","enablePullDownRefresh":false}},{"path":"/pages/homeServices/homeServices","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"家居服务","enablePullDownRefresh":false,"onReachBottomDistance":60}},{"path":"/pages/index/bill/bill","meta":{},"window":{"navigationBarTitleText":"账单","enablePullDownRefresh":false}},{"path":"/pages/index/vistor/vistor","meta":{},"window":{"navigationBarTitleText":"访客邀请","enablePullDownRefresh":false}},{"path":"/pages/index/repair/repair","meta":{},"window":{"navigationBarTitleText":"维修","enablePullDownRefresh":false}},{"path":"/pages/index/water/water","meta":{},"window":{"navigationBarTitleText":"送水","enablePullDownRefresh":false}},{"path":"/pages/index/car/car","meta":{},"window":{"navigationBarTitleText":"我的车","enablePullDownRefresh":false}},{"path":"/pages/index/express/express","meta":{},"window":{"navigationBarTitleText":"快递查询","enablePullDownRefresh":false}},{"path":"/pages/index/renovation/renovation","meta":{},"window":{"navigationBarTitleText":"装修登记","enablePullDownRefresh":false}},{"path":"/pages/index/guarantee/guarantee","meta":{},"window":{"navigationBarTitleText":"房屋保修","enablePullDownRefresh":false}},{"path":"/pages/index/clean/clean","meta":{},"window":{"navigationBarTitleText":"房屋清洁","enablePullDownRefresh":false}},{"path":"/pages/index/notice/notice","meta":{},"window":{"navigationBarTitleText":"物业公告","enablePullDownRefresh":false}},{"path":"/pages/index/crown/crown","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/index/usersright/usersright","meta":{},"window":{"navigationBarTitleText":"用户权益","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#2b2d42","navigationBarTextStyle":"white"}},{"path":"/pages/index/serviceplan/serviceplan","meta":{},"window":{"navigationBarTitleText":"资产服务计划","enablePullDownRefresh":false}},{"path":"/pages/mine/order/order","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/mine/card/card","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/mine/friendHands/friendHands","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/mine/post/post","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/mine/activities/activities","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/mine/problem/problem","meta":{},"window":{"navigationBarTitleText":"功能异常与产品建议","enablePullDownRefresh":false}},{"path":"/pages/mine/setting/setting","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/mine/ours/ours","meta":{},"window":{"navigationBarTitleText":"关于我们","enablePullDownRefresh":false}},{"path":"/pages/mine/ours/sourcelicense","meta":{},"window":{"navigationBarTitleText":"开源许可","enablePullDownRefresh":false}},{"path":"/pages/mine/ours/serviceagreement","meta":{},"window":{"navigationBarTitleText":"住这儿协议","enablePullDownRefresh":false}},{"path":"/pages/mine/ours/privacyagreement","meta":{},"window":{"navigationBarTitleText":"隐私协议","enablePullDownRefresh":false}},{"path":"/pages/mine/ours/protectionprinciple","meta":{},"window":{"navigationBarTitleText":"生物识别信息保护协议","enablePullDownRefresh":false}},{"path":"/pages/mine/explain/explain","meta":{},"window":{"navigationBarTitleText":"常见问题解决","enablePullDownRefresh":false}},{"path":"/pages/shoppingCart/shoppingCart","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/goodsDetail/goodsDetail","meta":{},"window":{"navigationBarTitleText":"商品详情","enablePullDownRefresh":false}},{"path":"/pages/index/map/map","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});