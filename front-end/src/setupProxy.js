const {proxy} = require('http-proxy-middleware');
module.exports = function(app){
	app.use(proxy('/energy/api/Login', {target: 'https://localhost:8765/energy/api/Login'}));
}