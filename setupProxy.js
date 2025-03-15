const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/rizz",
    createProxyMiddleware({
      target: "http://192.168.0.10:8080/rizz", // 백엔드 서버 주소
      changeOrigin: true, // 크로스 도메인 허용
    })
  );
};
