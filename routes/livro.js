const { Router } = require("express");
const { getLivros, getLivroEspecifico, postLivro, patchLivro, deleteLivro} = require("../controllers/livro")

const router = Router();

router.get('/', getLivros);

router.get('/:id', getLivroEspecifico);

router.post('/', postLivro);

router.patch('/:id', patchLivro);

router.delete('/:id', deleteLivro);

module.exports = router;