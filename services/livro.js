const fs = require("fs");

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("livros.json"));
}

function getLivroPorId(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const livroFiltrado = livros.filter(livro => livro.id === id);
    return livroFiltrado;
}

function insereLivro(novoLivro){
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const novaListaDeLivros = [ ...livros, novoLivro ];
    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros));
}

function modificaLivro(modificacoes){
    const { id, ...changes } = modificacoes;
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id);
    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...changes };
    livrosAtuais[indiceModificado] = conteudoMudado;
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais));
}

function removeLivro(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const livrosFiltrados = livros.filter(livro => livro.id !== id);
    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados));
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    removeLivro
};