module.exports = function(){
    var controlller = {}
    controlller.index = function(req, res){
        res.render('index',{nome: 'Contatooh'});
    };
    return controlller;
}