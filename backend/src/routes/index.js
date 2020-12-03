const baseRoutes = require('./base');

module.exports = function (app, db) {
	baseRoutes(app, db);
	// Тут, позже, будут и другие обработчики маршрутов 
}