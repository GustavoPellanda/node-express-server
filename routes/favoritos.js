const { Router } = require("express")
const { getFavoritos, postFavoritos, deleteFavoritos } = require("../controllers/favoritos")

const router = Router();

router.get('/', getFavoritos);

router.post('/:id', postFavoritos);

router.delete('/:id', deleteFavoritos);

module.exports = router;