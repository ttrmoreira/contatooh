module.exports = function(app){
    var controller = app.controllers.home;
    console.log(controller);
    app.get('/', controller.index);
}