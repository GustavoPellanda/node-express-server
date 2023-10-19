const express = require("express");
const rotaLivro = require("./routes/livro");
const rotaFavorito = require("./routes/favoritos");
const port = 8000;
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors({origin: "*"}))

app.use('/livros', rotaLivro);
app.use('/favoritos', rotaFavorito);

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
});

