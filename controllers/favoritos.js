const{getTodosFavoritos, insereFavoritos, deletaFavoritosPorId} = require("../services/favoritos")

function getFavoritos(req, res){
    try{
        const favoritos = getTodosFavoritos();
        res.send(favoritos);
    } catch(error) {
        res.status(500);
        res.send(error.message);
    };
}
function postFavoritos(req, res){
    try{
        const id = req.params.id;
        insereFavoritos(id)
        res.send("Livro adicionado com sucesso.");
    } catch(error) {
        res.status(500);
        res.send(error.message);
    };
}
function deleteFavoritos(req, res){
    try{
        const id = req.params.id;
        deletaFavoritosPorId(id)
        res.send("Livro deletado com sucesso.");
    } catch(error) {
        res.status(500);
        res.send(error.message);
    };
}

module.exports = {
    getFavoritos,
    postFavoritos,
    deleteFavoritos
};