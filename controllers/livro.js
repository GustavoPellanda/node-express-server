const {getTodosLivros, getLivroPorId, insereLivro, modificaLivro, removeLivro} = require("../services/livro");

function getLivros(req, res){
    try {
        const livros = getTodosLivros();
        res.send(livros);
    } catch(error) {
        res.status(500);
        res.send(error.message);
    };
}

function getLivroEspecifico(req, res) {
    try{
        const id = req.params.id;
        const livro = getLivroPorId(id);
         if (!livro) {
            res.status(404).json({ error: "Livro não encontrado", message: `O livro com ID ${id} não foi encontrado` });
        }
        res.send(livro);
    } catch(error) {
        res.status(500);
        res.send(error.message);
    };
}

function postLivro(req, res){
    try {
        const novoLivro = req.body;
        insereLivro(novoLivro);
        res.status(201);
        res.send("Livro inserido com sucesso.");
    } catch(error) {
        res.status(500);
        res.send(error.message);
    }
}

function patchLivro(req, res){
    try {
        const id = req.params.id;
        const body = req.body;
        modificaLivro(body, id);
        res.send("Item modificado com sucesso.");
    } catch(error) {
        res.status(500);
        res.send(error.message);
    }
}

function deleteLivro(req, res){
    try{
        const id = req.params.id;
        removeLivro(id);
        res.send("Livro deletado com sucesso.");
    } catch(error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getLivros,
    getLivroEspecifico,
    postLivro,
    patchLivro,
    deleteLivro
};
